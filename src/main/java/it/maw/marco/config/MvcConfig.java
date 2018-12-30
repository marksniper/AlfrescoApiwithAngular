package it.maw.marco.config;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.*;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan("it.maw.marco")
@PropertySources({
        @PropertySource("classpath:configuration.properties")
})

public class MvcConfig implements WebMvcConfigurer {
    private final static Logger logger = LoggerFactory.getLogger(MvcConfig.class);

    /*Property resolver*/
    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        PropertySourcesPlaceholderConfigurer p = new PropertySourcesPlaceholderConfigurer();
        p.setNullValue("");
        logger.info(">>>>> CONFIGURING PropertySourcesPlaceholderConfigurer.");
        logger.info("(Spring Bean registered): " + p.getClass().getName());
        return p;
    }

    /**
     * This allows for mapping the Spring MVC DispatcherServlet to "/", while still allowing static resource requests mapping to be handled by the container’s default Servlet.
     * A customized InternalResourceViewResolver bean can be used to view resources without the need for a dedicated mapping to be defined for each view (see viewResolver()).
     */
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        logger.info(">>>>> CONFIGURING DefaultServletHandlerConfigurer: enabled");
        configurer.enable();
    }

    @Bean
    public InternalResourceViewResolver htmlViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        String viewPath = "/WEB-INF/views/";
        logger.info(">>>>> Define viewPath : " + viewPath + " with suffix: " + "");
        viewResolver.setPrefix(viewPath);
        viewResolver.setSuffix("");
        return viewResolver;
    }

    /**
     * Stores registrations of resource handlers for serving static resources such as images, css files and so on.
     */
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        // The URL pattern corresponding to static resources located in "/WEB-INF/view/resources/"
        String originLocation = "/WEB-INF/views/resources/";
        String targetLocation = "/res/**";
        logger.info(">>>>> Resource target location: " + targetLocation + " from original location:" + originLocation);
        registry.addResourceHandler(targetLocation).addResourceLocations(originLocation);
    }


}