$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\loginpage.feature");
formatter.feature({
  "name": "LogIn Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "User navigates go to \"gmi_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LogInStepDefinitions.user_navigates_go_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on iconAccountMenu",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepDefinitions.user_clicks_on_iconAccountMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  sigInHomePage button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepDefinitions.user_clicks_on_sigInHomePage_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides username",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepDefinitions.user_provides_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides password",
  "keyword": "And "
});
formatter.match({
  "location": "LogInStepDefinitions.user_provides_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefinitions.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
});