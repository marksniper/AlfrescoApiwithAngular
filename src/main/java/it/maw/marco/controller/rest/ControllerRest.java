package it.maw.marco.controller.rest;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.ldap.Control;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;
@Controller
@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class ControllerRest
{
    private final static Logger logger = LoggerFactory.getLogger(ControllerRest.class);
    @RequestMapping(value = "ng/resource", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity resource() {
        logger.debug("Call to ng/resource");
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", UUID.randomUUID().toString());
        jsonObject.put("data", "Hello World");
        return new ResponseEntity(jsonObject.toString(), HttpStatus.OK);
    }

}
