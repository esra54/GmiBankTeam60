@US08pwdChange
Feature: Password Change Should be done

  Background: User  should be logged in gmi bank url and navigate to password page

    Given User go to the GMi Bank home page
    And User click on user icon
    And user log in with a valid username and password
    Then User click on the password menu


  Scenario:The old password should not be used
    Given User enters the old password as new password
    And Check the fail message
    Then Asserts the result


   Scenario:The new password should be confirmed
    Given User enter current password in password box
    And User enter a valid new password in new password text box
    And ser enter a valid new password confirmation password text box
    And User click save button for password
    Then Assert that pwd change is succeeded
