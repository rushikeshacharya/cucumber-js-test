Feature: Add Functionality in Application
    This Feature will add two numbers and display the sum of both numbers
#   Scenario: Adding two numbers
#     Given Numbers are provided
#     When Sum up both numbers here
#     Then Display sum of both

  Scenario Outline: Add Two Numbers
    Given Numbers are "<num1>" and "<num2>"
    When Sum up both numbers
    Then Display Addition "<sum>"

    Examples:
      | num1 | num2 | sum |
      |    4 |    5 |   9 |
      |    5 |    4 |   9 |
      |    2 |    2 |   4 |
