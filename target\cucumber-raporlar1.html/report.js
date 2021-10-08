$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/US_001.feature");
formatter.feature({
  "name": "US001 Registration Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@win"
    }
  ]
});
formatter.scenario({
  "name": "TC0107 any user to register with valid credentials",
  "description": "  validating the success message",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@win"
    }
  ]
});
formatter.step({
  "name": "user navigate homepage \"gmibank_url\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});