Feature: SauceDemo Purchase Flow

    Scenario: Complete purchase of first product
        Given I am on the SauceDemo login page
        When I login with username "standard_user" and password "secret_sauce"
        And I add the first product to the cart
        And I go to the cart
        And I proceed to checkout
        And I enter checkout information with firstname "John", lastname "Doe", postalcode "12345"
        And I continue to the overview
        And I finish the order
        Then I should see the order confirmation page
        And I take a screenshot of the confirmation