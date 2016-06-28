var expect = require('chai').expect;
var getFactorial = require('../src/math').getFactorial;
var NegativeValueImpossible = require('../src/math').NegativeValueImpossible;

describe("Math", function () {
  describe("Factorial", function () {
    it("Factorial of 5 is 120", function () {
      expect(getFactorial(5)).to.equal(120);
      expect(getFactorial(44)).to.equal(2.6582715747884485e+54);
    });

    it("If param is negative number expected throwing", function () {
      expect(getFactorial.bind(this, -787)).to.throw(NegativeValueImpossible);
      expect(getFactorial.bind(this, -1024)).to.throw(NegativeValueImpossible);
      expect(getFactorial.bind(this, -67567567.78567867)).to.throw(NegativeValueImpossible);
    });
  });
});
