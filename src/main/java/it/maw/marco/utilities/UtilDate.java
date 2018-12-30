package it.maw.marco.utilities;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class UtilDate {
    private final static Logger logger = LoggerFactory.getLogger(UtilDate.class);

    public static String convertDate(long timestamp) {
        try {
            logger.debug("Convert date.");
            DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Calendar calendar = Calendar.getInstance();
            calendar.setTimeInMillis(timestamp);
            return df.format(calendar.getTime());
        } catch (Exception e) {
            logger.error("Error to convert date. Exception is occured (" + timestamp + "). Return invalid date.");
            return "invalid date";
        }
    }
}
