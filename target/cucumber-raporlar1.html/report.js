$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US_005.feature");
formatter.feature({
  "name": "Login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Loginpage"
    }
  ]
});
formatter.scenario({
  "name": "US_005 TC_01 User should not be able to login with invalid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Loginpage"
    },
    {
      "name": "@US_005-TC_01"
    }
  ]
});
formatter.step({
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
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter a invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_enter_a_invalid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on password checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_click_on_password_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter a valid password",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.user_enter_a_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "US_005StepDefinitions.userClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify if the user sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "US_005StepDefinitions.verifyIfTheUserSignIn()"
});
formatter.result({
  "status": "skipped"
});
});