@Us11
Feature: US_011Customer Creation
  Background: US_011
    Given User navigates go to "gmi_url"
    And User Login in
    And User choose Language
    And User click My Operations
    And User select Manage Custormers
    And User click Create a new Customer
    And User enter SSN
    And User click Search button
    And User sees all his her registration info populated

  Scenario: US_011_01 Any field on the registration page should not be left blank
    Then User sees entered today date and time

  Scenario: US_011_02The date should be created as month, day, year, hour and minute
    Then User sees correct order date

  Scenario: US_011_03User can choose a user from the registration and it cannot be blank
    Then User choose valid user

  Scenario: US_011_04There user can choose an account created on manage accounts
    Then User choose valid account

  Scenario: US_011_05User can select Zelle Enrolled optionally and save it
    And User click zelle enrolled check box
    Then User click save button