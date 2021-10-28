@api_demo
Feature: Api testing Demo

  @countryRead
  Scenario: read and validate country
    Given read all customer data using with api endpoint "https://www.gmibank.com/api/tp-countries"
    Then validate customer



  @countryCreate
  Scenario: Create a country
    And create country "https://www.gmibank.com/api/tp-countries"
    Then validate it is created or not



  @countryUpdate
  Scenario Outline:  Update country
    Then update created a country using api end point "https://www.gmibank.com/api/tp-countries"  "<name>" and its extension "<id>"
    And validate it is updated or not

    Examples: Update country
      |name|id|
      |Guncellenmis Ulke|93277|

  @countryDelete
  Scenario Outline: Delete country
    Given delete updated a country using endpoint "<endPoint>" and its extension "<id>"
    And validate it is deleted or not

    Examples: Delete Country
      |endPoint                                |id    |
      |https://www.gmibank.com/api/tp-countries|/93277|

  @countryDataBase
  Scenario Outline: All countries should be retrieved by database and validated
    And user should read all countries data using "<query>" and "<columnName>"
    Then validates countries exist or not
    Examples:
      |query|columnName|
      |select * from tp_country|name|

  @countryPDFGenerator
  Scenario Outline: You should have first  countries' names and their ids on a pdf document
    Given user creates a connection using "jdbc:postgresql://157.230.48.97:5432/gmibank_db" , "techprodb_user" and "Techpro_@126"
    Then user provides the query "<query>"
    Examples: pdf
      |query|
      |select * from tp_country |