var expect = require("chai").expect;   //import chai and set expectation

// Test Suite
describe("Mocha", function() {
  // Do a Sanity Check and Test spec/unit/mocha is installed and running correctly
  it("should run tests using npm", function() {
    expect(true).to.be.ok;       //ok is a Chai assertion method that checks if a value is truthy
  });
});
