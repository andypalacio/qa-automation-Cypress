Feature: As a QA, I want to validate that a user cannot complete a payment with an invalid credit card

  Scenario: Error trying to complete a payment with an invalid credit card
    Given the user navigates to SHAPERMINT HOME PAGE
    When the user enters the first product within the section "Best Sellers"
    And the user clicks on the "add to cart" button and proceed to checkout from the cart
    And the user completes email data and shipping Address data with the following information
      | email             | firstName | lastName    | address            | aptSuite | city     | country       | state    | postalCode | phone     |
      | qa.mail@gmail.com | My Name   | My Lastname | 123 William Street | apt 1    | New York | United States | New York | 10038      | 123456789 |
    And the user completes credit card data with the following information
      | number              | mmyy  | cvv | nameOnCard    |
      | 1234 1234 1234 1234 | 01 25 | 999 | Name Lastname |
    Then the shipping method "Standard Delivery (4-8 business days)" is displayed
    And the message "Your card number is invalid." within Payment Information section is displayed
    And the URL contains "/hc/checkout/"