package it.maw.marco.config;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;

public class WebInitializer implements WebApplicationInitializer {

    private static final Logger logger = LoggerFactory.getLogger(WebInitializer.class);

    public void onStartup(ServletContext servletContext) {
        logger.info(" >>>>> INITIALIZING [" + servletContext.getServletContextName() + "]...");

        logger.info("Creating a new context and registering the Root Config...");
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.register(MvcConfig.class);

        logger.info("Adding a Loader Listener to the servlet context (manages the lifecycle of the root application context)...");
        servletContext.addListener(new ContextLoaderListener(context));

        logger.info("Registering the servlet dispatcher...");
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", new DispatcherServlet(context));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");
        //dispatcher.setLoadOnStartup(1);

        String filterProxyName = "springSecurityFilterChain";
        logger.info("Registering a Filter Proxy with the name '" + filterProxyName + "'...");
        FilterRegistration.Dynamic springSecurityFilterChain = servletContext.addFilter(filterProxyName, new DelegatingFilterProxy(filterProxyName));
        springSecurityFilterChain.addMappingForUrlPatterns(null, false, "/*");
    }
}