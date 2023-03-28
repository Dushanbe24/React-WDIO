
Feature: Shoping Web Page
The online store must work in web browsers and on mobile devices.
The main product must use a regular thumbnail image.

Background: 
Given I am on the home page


Scenario: Configured Shopping Cart List page
Then I should see the "Sizes:" title
And I should see "16Product(s) found" container header
# And I should see the inscription "Order by" 
# And user on the right side  can see the basket Cart