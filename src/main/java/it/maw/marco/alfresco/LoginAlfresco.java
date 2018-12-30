package it.maw.marco.alfresco;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import it.maw.marco.model.Utente;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class LoginAlfresco {
    private final static Logger logger = LoggerFactory.getLogger(LoginAlfresco.class);

    @Autowired
    private Environment env;

    public String loginPost() {
        logger.info("Login process");
        JSONObject credenziali = new JSONObject();
        credenziali.put("username", Utente.getInstance().getUsername());
        credenziali.put("password", Utente.getInstance().getPassword());
        try {
            logger.info("Get ticket");
            HttpResponse<JsonNode> jsonResponse = Unirest.post(env.getProperty("ip.alfresco.localhost") + "" + env.getProperty("url.alfresco.login"))
                    .header("accept", "application/json")
                    .body(credenziali)
                    .asJson();
            JSONObject result = jsonResponse.getBody().getObject();
            result = result.getJSONObject("data");
            logger.debug("Ticket: " + result.get("ticket").toString());
            return result.get("ticket").toString();

        } catch (UnirestException | JSONException e) {
            logger.info("Not Authorized");
            return new String();
        }
    }
}