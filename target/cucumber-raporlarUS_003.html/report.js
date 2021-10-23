$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US_008PasswordChange.feature");
formatter.feature({
  "name": "Password Change Should be done",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US008pwdChange"
    }
  ]
});
formatter.background({
  "name": "User  should be logged in gmi bank and navigate to password page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.go_to_the_GMi_Bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.click_on_user_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in with a valid username and password",
  "keyword": "And "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.sign_in_with_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the password menu",
  "keyword": "Then "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.click_on_the_password_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The old password should not be used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US008pwdChange"
    },
    {
      "name": "@US_008_01"
    }
  ]
});
formatter.step({
  "name": "User enters the old password as new password",
  "keyword": "When "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.user_enters_the_old_password_as_new_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check the fail message",
  "keyword": "Then "
});
formatter.match({
  "location": "US_008PasswordChangeStepDefiniton.check_the_fail_message()"
});
formatter.result({
  "status": "passed"
});
});