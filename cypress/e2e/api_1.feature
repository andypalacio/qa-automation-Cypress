Feature: As a QA, I want to get the list of users, to validate I can get the active ones

  Scenario: Successfully get the first user from the list od active users
    Given I get the list of users
    When I get the first active user from the list
    Then I get the folowing details of the user
      | status | statusCode |
      | active | 200        |