$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/US_013.feature");
formatter.feature({
  "name": "An employee can create new account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.scenario({
  "name": "employee should sign in and clicks manage accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "An employee navigate signin url \"gmibank_signin_url\"",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.an_employee_navigate_signin_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides username",
  "keyword": "Then "
});
formatter.match({
  "location": "US_013StepDefinitions.provides_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provides password",
  "keyword": "Then "
});
formatter.match({
  "location": "US_013StepDefinitions.provides_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.clicks_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on language menu",
  "keyword": "When "
});
formatter.match({
  "location": "US_013StepDefinitions.clicks_on_language_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on English",
  "keyword": "Then "
});
formatter.match({
  "location": "US_013StepDefinitions.clicks_on_English()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on manage accounts",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.clicks_on_manage_accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on create new account",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.clicks_on_create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US013_TC01 User should create a description for the new account and it cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "Employee writes description as Saving Account",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeWritesDescriptionAsSavingAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US013_TC02 User should provide a balance for the first time account creation as Dollar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "employee clicks on balance text box",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeClicksOnBalanceTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide balance as number",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.provideBalanceAsNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US013_TC03 User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "Employee clicks on account type dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeClicksOnAccountType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects its status such as CHECKING",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.typesItsStatusSuchAsCHECKING()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US013_TC04 Account status should be defined as ACTIVE, SUSPENDED or CLOSED",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "Employee clicks on account status type dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeClicksOnAccountStatusTypeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on its type such as ACTIVE",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.clicksOnItsTypeSuchAsACTIVE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US013_TC05 User can select an employee from the drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@employeecreateaccount"
    }
  ]
});
formatter.step({
  "name": "Employee clicks on employee",
  "keyword": "Given "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeClicksOnEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify it is selected or not",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.verifyItIsSelectedOrNot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee clicks on save button to create an account",
  "keyword": "And "
});
formatter.match({
  "location": "US_013StepDefinitions.employeeClicksOnSaveButtonToCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
});