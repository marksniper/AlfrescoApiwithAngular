package it.maw.marco.config;

import it.maw.marco.model.UserDetailsServiceImp;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final static Logger logger = LoggerFactory.getLogger(MvcConfig.class);
    @Autowired
    private CustomAuthenticationProvider authProvider;

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImp();
    }

    @Override
    protected void configure(
            AuthenticationManagerBuilder auth) throws Exception {
        logger.info("Configure userDetailsService e authenticationProvider");
        auth.userDetailsService(userDetailsService());
        auth.authenticationProvider(authProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        logger.info("Configure site security");
        http
                .authorizeRequests().antMatchers("/ng/*.js").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic()
                .and().formLogin()
                .loginPage("/accedi")
                .permitAll(true)
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/ng/logout"))
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessUrl("/accedi?logout")
                .permitAll()
        ;

    }

}
