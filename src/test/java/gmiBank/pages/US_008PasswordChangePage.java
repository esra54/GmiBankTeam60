package gmiBank.pages;

import gmiBank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_008PasswordChangePage {

    public US_008PasswordChangePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }
   // US_003PasswordRestriction us_003page= new US_003PasswordRestriction();


    @FindBy(id = "account-menu")
    public WebElement we_account_menu;

    @FindBy(id="login-item")
    public WebElement we_signinbutton;

    @FindBy(id="username")
    public WebElement we_username;

    @FindBy(xpath = "//a[@href='/account/password']")
    public WebElement we_passwordButton;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement we_signInSubmit;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement we_password;

    @FindBy(xpath = "//input[@name='currentPassword']")
    public WebElement we_currentPassword;

    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement we_newPassword;

    @FindBy(xpath = "//input[@name='confirmPassword']")
    public WebElement we_confirmPassword;

    @FindBy(className = "invalid-feedback")
    public WebElement we_failMessageBox;

    @FindBy(xpath = "//ul[@id='strengthBar']/li")
    public WebElement we_StrengthBar;

    @FindBy(xpath = "//a[@href='/logout']")
    public WebElement we_LogOut;


}

