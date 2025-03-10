Feature: Add a User

  Scenario: Creating a user
    Given I navigate to the application url
    When  I navigate to the users page to add a user
    Then I should see a text saying 'User added'