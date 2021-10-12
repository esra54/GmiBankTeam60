package gmiBank.stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gmiBank.pages.LoginPage;
import gmiBank.pages.US_011CustomerCreationPage;
import gmiBank.utilities.ConfigurationReader;

public class US_011CustomerCreationStepDef {
    US_011CustomerCreationPage us_011=new US_011CustomerCreationPage();
    LoginPage loginPage=new LoginPage();

   @Given("User click My Operations")
    public void user_click_My_Operations() {

        us_011.myOperations.click();

    }

    @Given("User select Manage Custormers")
    public void user_select_Manage_Custormers() {
       us_011.manageCustomer.click();
    }

    @Given("User click Create a new Customer")
    public void user_click_Create_a_new_Customer() {
       us_011.createANewCustomer.click();
    }

    @Given("User enter SSN")
    public void user_enter_SSN() {
       us_011.sSN.sendKeys(ConfigurationReader.getProperty("valid_ssn_no"));

    }

    @Given("User click Search button")
    public void user_click_Search_button() {
       us_011.searchButton.click();

    }

     @Then("User sees entered today date and time")
    public void user_sees_entered_today_date_and_time() {

    }

    @Then("User sees correct order date")
    public void user_sees_correct_order_date() {

    }

    @Then("User choose valid user")
    public void user_choose_valid_user() {

    }

    @Then("User choose valid account")
    public void user_choose_valid_account() {

    }

    @Given("User click zelle enrolled check box")
    public void user_click_zelle_enrolled_check_box() {

    }

    @Then("User click save button")
    public void user_click_save_button() {

    }

    @And("User sees all his her registration info populated")
    public void userSeesAllHisHerRegistrationInfoPopulated() {

    }

    @And("User Login in")
    public void userLoginIn() {
        loginPage.loginExecution();

    }

 @And("User choose Language")
 public void userChooseLanguage() {
  us_011.languageIcon.click();
  us_011.englishSelect.click();
 }
}
