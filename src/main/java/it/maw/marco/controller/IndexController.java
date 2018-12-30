package it.maw.marco.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/")
public class IndexController {
    public static final Logger logger = LoggerFactory.getLogger(IndexController.class);

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public ModelAndView index(ModelAndView modelAndView) {
        logger.info("Set request mapping for /");
        logger.debug("Redirect for angular");
        return new ModelAndView("redirect:/ng/index.html", modelAndView.getModelMap());
    }

    @RequestMapping(value = {"/accedi"}, method = RequestMethod.GET)
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response) {
        String pageName = "login.jsp";
        logger.debug("Session-ID: " + request.getSession().getId());
        logger.info("Showing page: '" + pageName + "'");
        ModelAndView view = new ModelAndView(pageName);
        return view;
    }

}
