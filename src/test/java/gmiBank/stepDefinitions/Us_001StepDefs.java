package gmiBank.stepDefinitions;





import com.sun.tools.jxc.ConfigReader;
import cucumber.api.java.en.Given;
import gmiBank.pages.US_001Page;
import gmiBank.utilities.ConfigurationReader;
import gmiBank.utilities.Driver;


public class Us_001StepDefs {
    US_001Page us001Page= new US_001Page();

    @Given("user navigate homepage {string}")
    public void user_navigate_homepage(String gmibank_url) {

        Driver.getDriver().get(ConfigurationReader.getProperty(gmibank_url));


        

    }






}
