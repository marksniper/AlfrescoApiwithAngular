package it.maw.marco.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImp implements UserDetailsService {
    public static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImp.class);

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.info("Builder user");
        if (Utente.getInstance().getUsername() != null) {
            logger.debug("Set user information: " + Utente.getInstance().getUsername());
            User.UserBuilder builder = User.withUsername(Utente.getInstance().getUsername());
            builder.password(Utente.getInstance().getPassword());
            builder.roles(Utente.getInstance().getRole());
            logger.debug("User information: " + Utente.getInstance().toString());
            return builder.build();
        } else {
            logger.debug("User not found! Unauthorized access!!");
            throw new UsernameNotFoundException("User not found.");
        }
    }
}