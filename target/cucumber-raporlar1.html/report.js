<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US_005.feature");
formatter.feature({
  "name": "Login page",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US_002RegistrationPage.feature");
formatter.feature({
  "name": "US_002  System should not allow anyone to register with invalid credentials",
  "description": "    seeing the message \"If you want to sign in, you can try the default\n    accounts:- Administrator (login\u003d\"admin\" and password\u003d\"admin\")\n    - User (login\u003d\"user\" and password\u003d\"user\").",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_01 SSNTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the ssnTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_ssnTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the SSNTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_SSNTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an SSN error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnSSNErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_02 firstNameTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the firstNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_firstNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the firstNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_firstNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an firstname error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnFirstnameErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_03 lastNameTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the lastNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_lastNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the lastNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_lastNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an lastname error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnLastnameErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_04 adresTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the adresTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_adresTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the adresTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_adresTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an adres error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnAdresErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_05 phoneNumberTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the phoneNumberTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_phoneNumberTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the phoneNumberTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_phoneNumberTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an phoneNumber error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnPhoneNumberErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_06 userNameTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the userNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_userNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the userNameTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_userNameTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an userName error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnUserNameErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_07 emailTextBox on the registration page should not be left blank",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the emailTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_emailTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the emailTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_emailTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see an email error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnEmailErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_08 newPasswordTextBox on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@Loginpage"
=======
      "name": "@Registration002"
>>>>>>> master
    }
  ]
});
formatter.step({
  "name": "User click on the newPasswordTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_newPasswordTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the newPasswordTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_newPasswordTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see a newPassword error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeANewPasswordErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "US_005 TC_01 User should not be able to login with invalid username and valid password",
=======
  "name": "US_002 TC_09 newPasswordConfirmation on the registration page should not be left blank",
>>>>>>> master
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@Loginpage"
    },
    {
      "name": "@US_005-TC_01"
=======
      "name": "@Registration002"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user go to \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "US_005StepDefinitions.user_go_to(String)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class gmiBank.stepDefinitions.US_005StepDefinitions\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 32 more\r\nCaused by: io.github.bonigarcia.wdm.WebDriverManagerException: io.github.bonigarcia.wdm.WebDriverManagerException: chromedriver 94.0.4606.61 for WIN64 not found in http://npm.taobao.org/mirrors/chromedriver/\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:776)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:550)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:773)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:550)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:766)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:550)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:260)\r\n\tat gmiBank.utilities.Driver.getDriver(Driver.java:36)\r\n\tat gmiBank.pages.US_005LoginPage.\u003cinit\u003e(US_005LoginPage.java:11)\r\n\tat gmiBank.stepDefinitions.US_005StepDefinitions.\u003cinit\u003e(US_005StepDefinitions.java:11)\r\n\t... 37 more\r\nCaused by: io.github.bonigarcia.wdm.WebDriverManagerException: chromedriver 94.0.4606.61 for WIN64 not found in http://npm.taobao.org/mirrors/chromedriver/\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.downloadAndExport(WebDriverManager.java:575)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:547)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click to account menu",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.userClickToAccountMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on sign in",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.userClickOnSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on username checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_click_on_username_checkbox()"
=======
  "name": "User click on the newPasswordConfirmation",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_newPasswordConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User does not enter the newPasswordConfirmation",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_does_not_enter_the_newPasswordConfirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see a passwordConfirmation error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAPasswordConfirmationErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_10 SSN number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User click on the SSNTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_SSNTextBox()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "user enter a invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_enter_a_invalid_username()"
=======
  "name": "User enter an SSNnumber with chars or specific chars",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_enter_an_SSNnumber_with_chars_or_specific_chars()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SP2020\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56749}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39992413fd316bcdcffb704577167888\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat gmiBank.stepDefinitions.US_002StepDefinition.user_enter_an_SSNnumber_with_chars_or_specific_chars(US_002StepDefinition.java:197)\r\n\tat ✽.User enter an SSNnumber with chars or specific chars(src\\test\\resources\\features\\US_002RegistrationPage.feature:59)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User see an invalid SSN error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnInvalidSSNErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click on password checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_click_on_password_checkbox()"
=======
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "user enter a valid password",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_enter_a_valid_password()"
=======
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US_002 TC_11 Mobilephone number cannot be of any chars nor spec chars except \"-\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.userClickOnSignInButton()"
=======
  "name": "User click on the phoneTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_click_on_the_phoneTextBox()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
<<<<<<< HEAD
  "name": "verify if the user sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "US_005StepDefinitions.verifyIfTheUserSignIn()"
=======
  "name": "User enter a mobilePhoneNumber with chars or spesific chars",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_enter_a_mobilePhoneNumber_with_chars_or_spesific_chars()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SP2020\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56749}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39992413fd316bcdcffb704577167888\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat gmiBank.stepDefinitions.US_002StepDefinition.user_enter_a_mobilePhoneNumber_with_chars_or_spesific_chars(US_002StepDefinition.java:213)\r\n\tat ✽.User enter a mobilePhoneNumber with chars or spesific chars(src\\test\\resources\\features\\US_002RegistrationPage.feature:64)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User see an invalid mobilePhoneNumber error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnInvalidMobilePhoneNumberErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to  URL",
  "keyword": "Given "
});
formatter.match({
  "location": "US_002StepDefinition.user_go_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_clicks_on_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on registerButton",
  "keyword": "And "
});
formatter.match({
  "location": "US_001RegistrationStepDefinition.user_clicks_on_registerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US_002 TC_12 email id cannot be created without \"@\" sign and \".\" extensions",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registration002"
    }
  ]
});
formatter.step({
  "name": "User clicks on emailTextBox",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.userClicksOnEmailTextBox()"
>>>>>>> master
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter an email without @ and . extensions",
  "keyword": "And "
});
formatter.match({
  "location": "US_002StepDefinition.user_enter_an_email_without_and_extensions()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SP2020\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56749}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39992413fd316bcdcffb704577167888\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat gmiBank.stepDefinitions.US_002StepDefinition.user_enter_an_email_without_and_extensions(US_002StepDefinition.java:228)\r\n\tat ✽.User enter an email without @ and . extensions(src\\test\\resources\\features\\US_002RegistrationPage.feature:69)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User see an invalid email error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_002StepDefinition.userSeeAnInvalidEmailErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
});