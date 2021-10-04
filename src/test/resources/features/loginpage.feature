Feature: US_006
  Scenario: User info segment (User Settings) should be editable on Homepage

   Given There should be user info being populated when navigating to user info ""firstname, lastname email and language
Then There should be 2 languages available "English and Turkish
Then There should be an option to update firstname
Then There should be an option to update lastname
And There should be an option to update email id adding "@" sign and ".com" extension