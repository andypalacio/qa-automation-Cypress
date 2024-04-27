Feature: As a QA, I want to validate that a user cannot complete a payment with an invalid credit card

  Scenario: Error trying to complete a payment with an invalid credit card
    Given the user navigates to SHAPERMINT HOME PAGE
    When the user enters the first product within the section "Best Sellers"
    And the user clicks on the “add to cart” button and proceed to checkout from the cart
    And the user completes email data and shipping Address data with the following information:
      | field      | value              |
      | email      | qa.mail@gmail.com  |
      | firstName  | My Name            |
      | lastName   | My Lastname        |
      | address    | 123 William Street |
      | aptSuite   | apt 1              |
      | city       | New York           |
      | country    | United State       |
      | state      | New York           |
      | postalCode | 10038              |
      | phone      | 123456789          |
    And the user completes credit card data with the following information:
      | field        | value               |
      | number       | 1234 1234 1234 1234 |
      | name on card | Name Lastname       |
      | MM/YY        | 01 / 25             |
      | CVV          | 999                 |
    Then the shipping method "Standard Delivery (4-8 business days)" is displayed
    And the message "Your card number is invalid." within Payment Information section is not displayed
    And the URL contains "/hc/checkout/"