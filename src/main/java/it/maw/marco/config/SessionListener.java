package it.maw.marco.config;

import it.maw.marco.utilities.UtilDate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.ResourceBundle;

@Component
public class SessionListener implements HttpSessionListener
{
    private final static Logger logger = LoggerFactory.getLogger(SessionListener.class);
    private ResourceBundle configProp = ResourceBundle.getBundle("configuration");
    private int intervalSeconds = Integer.parseInt(configProp.getString("session.sessionlistener.maxinactivetime"));

    public SessionListener() {

    }

    @Override
    public void sessionCreated(HttpSessionEvent event) {
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
        logger.debug("Prova: " + Integer.parseInt(configProp.getString("session.sessionlistener.maxinactivetime")));
        logger.info("SESSION-ID [" + event.getSession().getId() + "] -> Session is created. Creation date: "
                + UtilDate.convertDate(event.getSession().getCreationTime())
                + ". Max inactive time " + intervalSeconds + " minutes");
        event.getSession().setMaxInactiveInterval(intervalSeconds);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent event) {
        logger.info("SESSION-ID [" + event.getSession().getId() + "] -> Sessione destroyed.");
    }

}
