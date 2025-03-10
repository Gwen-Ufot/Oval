Feature: Create a Todo

  Scenario: Creating a todo
    Given user authentication
    When  I navigate to the todo page and add a todo
    Then I should see a text saying 'You have 1 task to complete.'