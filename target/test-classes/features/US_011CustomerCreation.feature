Feature: US_011Customer Creation

  Scenario: US_011_01 Any field on the registration page should not be left blank
  Given User go to Url
  And User click Menu Icon
  And User click SignIn Option
  And User enter valid Username
  And User enter valid Password
  And User click second SignIn Button
  And User click My Operations
  And User select Manage Custormers
  And User click Create a new Customer
  And User enter SSN
  And User click Search button
  And User sees all his/her registration info populated
  Then User sees entered today date and time