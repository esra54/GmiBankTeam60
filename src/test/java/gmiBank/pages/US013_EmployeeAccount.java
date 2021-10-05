package gmiBank.pages;

import gmiBank.utilities.ConfigurationReader;
import gmiBank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US013_EmployeeAccount {
    public US013_EmployeeAccount(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy(xpath ="//a[@aria-haspopup='true'][1] ")
    public WebElement languageMenu;
    // //a[@aria-haspopup='true'][1]     //nav[1]/div[1]/ul[1]/li[1]/a[1]

    @FindBy(xpath ="//*[@class='dropdown-item'][1]")
    public WebElement englishMenu;

    @FindBy(css ="#account-menu")
    public WebElement iconAccountMenu;

    @FindBy(id="login-item")
    public WebElement SignIn;

    @FindBy(xpath = "//input[contains(@id,'username')]")
    public WebElement username;

    @FindBy(xpath = "//input[contains(@id,'password')]")
    public WebElement password;

    @FindBy(xpath ="//button[@type='submit']")
    public WebElement SignInSubmitBtn;

    @FindBy (css = "#account-menu > a > span")
    public WebElement accountMenu1;
    //   //span[contains(text(),'team60 team60')]

    @FindBy(css = "#account-menu > div > a:nth-child(1) > span")
    public WebElement userInfo;

    @FindBy(xpath ="//span[contains(text(),'Operations')]")
    public WebElement myOperations;
    // //span[contains(text(),'My Operations')]  //span[contains(text(),'Manage Accounts')]

    @FindBy(xpath ="//span[contains(text(),'Manage Accounts')]")
    public WebElement manageAccounts;

    @FindBy(xpath ="//span[text()='Create a new Account']")
    public WebElement createNewAccountsBtn;

    @FindBy(xpath =" //input[@name='description']")
    public WebElement descriptionTextBox;

    @FindBy(xpath =" //input[@name='balance']")
    public WebElement balanceTextBox;

    @FindBy(xpath ="//select[@name='accountType']")
    public WebElement accountTypeDropdown;

    @FindBy(xpath ="//select[@name='accountStatusType']")
    public WebElement accountStatusTypeDropdown;

    @FindBy(xpath =" //*[text()='Cancel']")
    public WebElement cancelButton;

    @FindBy (xpath = "//span[contains(text(),'Sign out')]")
    public WebElement signOut;

    public void userSignIn () {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
        iconAccountMenu.click();
        SignIn.click();
        username.sendKeys(ConfigurationReader.getProperty("user_username"));
        password.sendKeys(ConfigurationReader.getProperty("user_password"));
        SignInSubmitBtn.click();

    }
    public void userSignOut() {
        accountMenu1.click();
        signOut.click();
    }

}
