package it.maw.marco.config;

import it.maw.marco.alfresco.LoginAlfresco;
import it.maw.marco.model.Utente;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomAuthenticationProvider implements AuthenticationProvider {
    private final static Logger logger = LoggerFactory.getLogger(CustomAuthenticationProvider.class);
    @Autowired
    LoginAlfresco loginAlfresco;

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {
        logger.info("Controllo autenticazioni");
        Utente.getInstance().setPassword(authentication.getCredentials().toString());
        Utente.getInstance().setUsername(authentication.getName());
        Utente.getInstance().setRole("ROLE_USER");
        List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_USER"));
//        da cancellare in caso
        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        String token = loginAlfresco.loginPost();
        if (!(token.isEmpty())) {
            logger.info("User is authenticated");
            Utente.getInstance().setAlfrescoTicket(token);
//                Utente.getInstance().setRole(grantedAuthorities.get(1).toString());
            return new UsernamePasswordAuthenticationToken
                    (Utente.getInstance().getUsername(), Utente.getInstance().getPassword(), grantedAuthorities);
        } else {
            logger.warn("Warning! User did not pass authentication with Alfresco");
            Utente.setInstance(null);
            throw new BadCredentialsException("Credenziali non valide. Immettere delle credenziali giuste");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(
                UsernamePasswordAuthenticationToken.class);
    }

}