var expect = require('chai').expect;
var getFactorial = require('../src/math').getFactorial;
var isPrime = require('../src/math').isPrime;
var NegativeValueImpossible = require('../src/math').NegativeValueImpossible;
var OnlyIntegerAvailableError = require('../src/math').OnlyIntegerAvailableError;
var СontradictoryParamsError = require('../src/math').СontradictoryParamsError;
var OnlyNaturalNumberAvailableError = require('../src/math').OnlyNaturalNumberAvailableError;

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

  describe("MersenneNumber", function() {
    describe("isPrime", function() {
      it("If power is less than 1 integer expected throwing", function () {
        expect(isPrime.bind(this, 0)).to.throw(OnlyNaturalNumberAvailableError);
        expect(isPrime.bind(this, -1)).to.throw(OnlyNaturalNumberAvailableError);
        expect(isPrime.bind(this, -3)).to.throw(OnlyNaturalNumberAvailableError);
        expect(isPrime.bind(this, -31)).to.throw(OnlyNaturalNumberAvailableError);
        expect(isPrime.bind(this, -500)).to.throw(OnlyNaturalNumberAvailableError);
        expect(isPrime.bind(this, -521)).to.throw(OnlyNaturalNumberAvailableError);
      });

      it("If value is not integer expected throwing", function () {
        expect(isPrime.bind(this, '32')).to.throw(OnlyIntegerAvailableError);
        expect(isPrime.bind(this, 'foobar', 36)).to.throw(OnlyIntegerAvailableError);
        expect(isPrime.bind(this, true)).to.throw(OnlyIntegerAvailableError);
        expect(isPrime.bind(this, Infinity)).to.throw(OnlyIntegerAvailableError);
      });

      it("Should be return true if passed power of Mersenne prime", function () {
        expect(isPrime(3)).to.be.true;
        expect(isPrime(5)).to.be.true;
        expect(isPrime(13)).to.be.true;
        expect(isPrime(19)).to.be.true;
        expect(isPrime(31)).to.be.true;
        expect(isPrime(521)).to.be.true;
        expect(isPrime(607)).to.be.true;
      });

      it("Should be return false if passed power of not Mersenne prime", function () {
        expect(isPrime(4)).to.be.false;
        expect(isPrime(6)).to.be.false;
        expect(isPrime(18)).to.be.false;
        expect(isPrime(20)).to.be.false;
        expect(isPrime(30)).to.be.false;
        expect(isPrime(50)).to.be.false;
        expect(isPrime(500)).to.be.false;
      });
    });
  });
});
