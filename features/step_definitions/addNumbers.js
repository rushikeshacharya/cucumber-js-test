const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { clearScreenDown } = require("readline");

function addNumber(num1, num2) {
  return num1 + num2;
}
Given("Numbers are {string} and {string}", function (num1, num2) {
  // Write code here that turns the phrase above into concrete actions
  this.number1 = Number(num1);
  this.number2 = Number(num2);
});
When("Sum up both numbers", function () {
  // Write code here that turns the phrase above into concrete actions
  this.sum = addNumber(this.number1, this.number2);
});

Then("Display Addition {string}", function (expectedSum) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.sum, Number(expectedSum), "Sum is incorrect");
  console.log(
    `Addition of ${this.number1} and ${this.number2} is ${expectedSum}`
  );
});
