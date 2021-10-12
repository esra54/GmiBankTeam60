package gmiBank.pages;

import com.sun.tools.jxc.ConfigReader;
import gmiBank.utilities.ConfigurationReader;
import gmiBank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "account-menu")
    public WebElement iconAccountMenu;

    @FindBy(xpath = "//span[text()='Sign in']")
    public WebElement signInhomePage;

    @FindBy(xpath = "//span[text()='Register']")
    public WebElement RegisterhomePage;

    @FindBy(id = "username")
    public WebElement usernameBox;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement passwordBox;

    @FindBy(xpath = "//*[@type='submit']")
    public WebElement signInBtn;
    //  //*[text()='Sign in']

    @FindBy(partialLinkText = "Cancel")
    public WebElement cancelBtn;

    @FindBy(xpath = "//*[span='My Operations']")
    public WebElement myOperations;


    @FindBy(xpath = "//input[@name='middleInitial']")
    public WebElement middleInitial;

    @FindBy(xpath = "//input[@name='zipCode']")
    public WebElement zipcode;

    @FindBy(xpath = "//input[@name='city']")
    public WebElement city;

    @FindBy(xpath = "//select[@name='country.id']")
    public WebElement country;

    @FindBy(xpath = "//input[@name='state']")
    public WebElement state;

    @FindBy(xpath = "//select[@id='tp-customer-user']")
    public WebElement user;

    @FindBy(xpath = "//button[@id='save-entity']")
    public WebElement saveBtn;

    @FindBy(xpath = "//div[@class='Toastify__toast-container Toastify__toast-container--top-left toastify-container']")
    public WebElement acceptMessage;   // Bir daha kisa olanini dene . Sistem gelince Unutma

    @FindBy(id = "search-ssn")
    public WebElement SSN;

    @FindBy(xpath = "//button[@class='btn btn-secondary']")
    public WebElement searchButton;

    @FindBy(xpath = "//div[@class='Toastify__toast-body']")
    public WebElement succesmessage;

    @FindBy(xpath = "//input[@name='firstName']")
    public WebElement firstname;

    @FindBy(id = "tp-customer-lastName")
    public WebElement lastname;

    @FindBy(id = "tp-customer-email")
    public WebElement email;

    @FindBy(xpath = "//input[@name='mobilePhoneNumber']")
    public WebElement mobile;

    @FindBy(xpath = "//input[@name='phoneNumber']")  //input[@id='tp-customer-phoneNumber']
    public WebElement phone;

    @FindBy(xpath = "//input[@name='address']")
    public WebElement adress;

    @FindBy(id = "//input[@id='tp-customer-ssn']")      //input[@name='ssn']
    public WebElement ssn;

    @FindBy(xpath = "//input[@id='tp-customer-createDate']")
    public WebElement createDate;




    public void loginExecution(){

        iconAccountMenu.click();
        signInhomePage.click();
        usernameBox.sendKeys(ConfigurationReader.getProperty("usernameUSA"));
        passwordBox.sendKeys(ConfigurationReader.getProperty("passwordUSA"));
        signInBtn.click();
    }


}
