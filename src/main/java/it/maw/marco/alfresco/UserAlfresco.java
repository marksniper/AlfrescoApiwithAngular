package it.maw.marco.alfresco;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import it.maw.marco.model.Utente;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class UserAlfresco
{
    private final static Logger logger = LoggerFactory.getLogger(UserAlfresco.class);

    @Autowired
    private Environment env;

    private JSONObject error = new JSONObject();


    public JSONObject getUserInformation()
    {
        logger.debug("Get Alfresco user information process");
        try
        {
            logger.info("Call Alfresco API to get user information");
            logger.debug("Call service to URL   >>>>>   "+env.getProperty("ip.alfresco.localhost") + "" + env.getProperty("url.alfresco.user.information"));
            HttpResponse<JsonNode> jsonResponse = Unirest.get(env.getProperty("ip.alfresco.localhost") + "" + env.getProperty("url.alfresco.user.information"))
                    .basicAuth(Utente.getInstance().getUsername(), Utente.getInstance().getPassword())
                    .header("accept", "application/json")
                    .asJson();
            return jsonResponse.getBody().getObject();
        } catch (UnirestException e) {
            logger.error("ATTENTION!!!  UnirestException");
            e.printStackTrace();
        }
        error.put("ERROR", "Error in Alfresco API");
        return error;
    }
}
