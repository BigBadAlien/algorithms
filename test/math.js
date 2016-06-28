var expect = require('chai').expect;
var getFactorial = require('../src/math').getFactorial;
var NegativeValueImpossible = require('../src/math').NegativeValueImpossible;
var OnlyIntegerAvailableError = require('../src/math').OnlyIntegerAvailableError;
var СontradictoryParamsError = require('../src/math').СontradictoryParamsError;

describe("Math", function () {
  describe("Factorial", function () {
    it("Factorial of 5 is 120", function () {
      expect(getFactorial(5)).to.equal(120);
    });

    it("Factorial of 44 is 2.6582715747884485e+54", function () {
      expect(getFactorial(5)).to.equal(120);
      expect(getFactorial(44)).to.equal(2.6582715747884485e+54);
    });

    it("Result with value 36 with 6 loops is 36*35*34*33*32*31", function () {
      expect(getFactorial(36, 6)).to.equal(36 * 35 * 34 * 33 * 32 * 31);
    });
    //
    it("Result with value 79 with 4 loops is 1402410240", function () {
      expect(getFactorial(79, 4)).to.equal(79 * 78 * 77 * 76);
    });

    it("If param is negative number expected throwing", function () {
      expect(getFactorial.bind(this, -787)).to.throw(NegativeValueImpossible);
      expect(getFactorial.bind(this, -1024)).to.throw(NegativeValueImpossible);
    });

    it("If loops is less than zero integer expected throwing", function () {
      expect(getFactorial.bind(this, 32, -7)).to.throw(NegativeValueImpossible);
    });

    it("If loops more than value expected throwing", function () {
      expect(getFactorial.bind(this, 32, 36)).to.throw(СontradictoryParamsError);
    });

    it("If value is not integer expected throwing", function () {
      expect(getFactorial.bind(this, '32', 36)).to.throw(OnlyIntegerAvailableError);
      expect(getFactorial.bind(this, 'foobar', 36)).to.throw(OnlyIntegerAvailableError);
      expect(getFactorial.bind(this, true, 36)).to.throw(OnlyIntegerAvailableError);
      expect(getFactorial.bind(this, Infinity, 36)).to.throw(OnlyIntegerAvailableError);
    });
  });
});
