package it.maw.marco.config;

import it.maw.marco.utilities.UtilDate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ResourceBundle;

@WebFilter("/*")
@Controller
public class FilterSite implements Filter {
    private final static Logger logger = LoggerFactory.getLogger(FilterSite.class);
    private ResourceBundle configProp = ResourceBundle.getBundle("configuration");

    @Override
    public void init(FilterConfig filterConfig) {
        logger.debug("Init filtering");
        logger.debug("Get max inactive time " + Integer.parseInt(configProp.getString("session.filter.maxinactivetime")));
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws ServletException, IOException {
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
        logger.debug("Filter execution");
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        HttpSession session = request.getSession(true);
        String loginURI = request.getContextPath() + "/accedi";

        if (session == null) {
            logger.debug("Session is null");
            response.sendRedirect(loginURI);
        } else {
            logger.debug("Session not null. Session id[ " + session.getId() + " ]. Max inactive time: " + session.getMaxInactiveInterval() + ". Creation data: " +
                    "" + UtilDate.convertDate(session.getCreationTime()) + ". Last session accessed time: " +
                    "" + UtilDate.convertDate(session.getLastAccessedTime())
            );
        }

        session.setMaxInactiveInterval(Integer.parseInt(configProp.getString("session.filter.maxinactivetime")));
        chain.doFilter(request, response);

    }


    @Override
    public void destroy() {
        logger.debug("Session is destroyed");
    }


}
