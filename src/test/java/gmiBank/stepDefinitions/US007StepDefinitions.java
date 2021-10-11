package gmiBank.stepDefinitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import gmiBank.pages.LoginPage;
import gmiBank.pages.US006Page;
import gmiBank.pages.US007Page;
import gmiBank.utilities.ConfigurationReader;
import gmiBank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class US007StepDefinitions {

    US007Page us_007Page = new US007Page();
    LoginPage loginPage= new LoginPage();
    US006Page us006Page= new US006Page();
    Faker faker = new Faker();




    @Then("Clear the Email box")
    public void clear_the_email_box() {
        us006Page.emailTextBox.clear();
    }

    @Then("Check the invalid warning is displayed")
    public void check_the_invalid_warning_is_displayed() {
        Assert.assertTrue(us_007Page.emailTextBoxInvalisMessage.isDisplayed());
    }

    @And("Send a new email without @ sign")
    public void sendANewEmailWithoutSign() {
        us006Page.emailTextBox.sendKeys("ufuktakmakgmail.com");
        Driver.wait(5);
    }

    @And("Send a new email without .com  extension")
    public void sendANewEmailWithoutComExtension() {
        us006Page.emailTextBox.sendKeys("ufuktakmak@gmail");

    }


    @Then("Check if there is only  English and Türkçe  displayed on Languauge dropdown menu")
    public void checkIfThereIsOnlyEnglishAndTurkishDisplayedOnLanguaugeDropdownMenu() {
        WebElement selectElement =us006Page.languageDropDown;
        Select select = new Select(selectElement);
        List<WebElement> allOptions =select.getOptions();
        for (WebElement element: allOptions){
 boolean languages= element.getText().equals("English") || element.getText().equals("Türkçe");
 Assert.assertTrue("User should see English or Türkçe", languages);
            System.out.println("there is only  English and Türkçe  displayed on Languauge dropdown menu");
        //     Condition veya ile calistigi icin boolean kullandik

        }

    }


}
