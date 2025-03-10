Feature: Delete a Todo

  Scenario: Deleting a todo
    Given I launch application's url
    When  I click on the 3 dots of a todo 
    Then I click delete
    Then I should see a text saying 'Deleted Task '