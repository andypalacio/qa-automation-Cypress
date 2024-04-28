Feature: As a QA, I Wan to validate I can update users from API

  Scenario: successfully update a user
    Given I get the list of users
    When I update the user with the following data:
      | authorization                                                           | name        | email                   | status |
      | Bearer 55d6636b25b84832f383665a17f72117ee2b5e655a78ba968912c9a37d1c050f | Jana Waters | jana.waters-[timestamp]@hotmail.us | active |
    Then the user has been updated
