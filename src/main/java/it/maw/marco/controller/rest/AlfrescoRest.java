package it.maw.marco.controller.rest;

import it.maw.marco.alfresco.UserAlfresco;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.UUID;

@Controller
@RequestMapping("/ng/alfresco")
@CrossOrigin(origins = "http://localhost:8080")
public class AlfrescoRest
{
    private final static Logger logger = LoggerFactory.getLogger(AlfrescoRest.class);

    @Autowired
    private UserAlfresco userAlfresco;

    @RequestMapping(value = "/user/info", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity home() {
        logger.debug("Request Alfresco user information");
        return new ResponseEntity(userAlfresco.getUserInformation().toString(), HttpStatus.OK);
    }

}
