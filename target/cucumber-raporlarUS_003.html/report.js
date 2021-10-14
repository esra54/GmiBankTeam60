$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US_003PasswordRestriction.feature");
formatter.feature({
  "name": "Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03pwdR"
    }
  ]
});
formatter.background({
  "name": "User go to the gmi bank url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.user_go_to_the_GMi_Bank_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.user_click_on_user_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the registration menu",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.user_click_on_the_registration_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on New Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.click_on_New_Password_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that strenght bar is red",
  "keyword": "Then "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.assert_that_strenght_bar_is_red()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least one lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03pwdR"
    },
    {
      "name": "@US03pwdR01"
    }
  ]
});
formatter.step({
  "name": "Enter a password with one uppercase letter",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.enter_a_password_with_one_uppercase_letter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Observe that strenght bar is yellow",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.observe_that_strenght_bar_is_yellow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter one lowercase letter to password test box",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.enter_one_lowercase_letter_to_password_test_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Strength Bar must be green",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.strength_Bar_must_be_green()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.click_on_password_confirmation_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Copy new password text box value to new password confirmation texbox",
  "keyword": "Then "
});
formatter.match({
  "location": "US_003PasswordRestrictionStepDefinition.copy_new_password_text_box_value_to_new_password_confirmation_texbox()"
});
formatter.result({
  "status": "passed"
});
});