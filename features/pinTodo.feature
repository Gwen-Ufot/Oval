Feature: Pin a Todo

  Scenario: Pinning a todo
    Given I am on the todo page
    When  I click on the 3 dots on a todo
    Then I pin a todo
    Then I should see a pinned status