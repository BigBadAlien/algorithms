var getProbability = require('../src/probability').getProbability;
var getCombinationsCount = require('../src/probability').getCombinationsCount;
var NegativeParamError = require('../src/probability').NegativeParamError;
var OnlyIntegerAvailableError = require('../src/probability').OnlyIntegerAvailableError;
var СontradictoryParamsError = require('../src/probability').СontradictoryParamsError;
var expect = require('chai').expect;

describe("Probability", function () {
  describe("combination counts", function () {
    it("If one of the params not integer expected throwing", function () {
      expect(getCombinationsCount.bind(this, '36', 6)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 44, '6')).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 36, 6.7)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 36.565, 6)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 345.565e+445, 6)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 345, 6e+786786)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 44, '6')).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 78, Infinity)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, Infinity, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 78, -Infinity)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, -Infinity, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, null, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getCombinationsCount.bind(this, 24, null)).to.throw(OnlyIntegerAvailableError);
    });

    it("If one of the params negative expected throwing", function () {
      expect(getCombinationsCount.bind(this, -24, 234)).to.throw(NegativeParamError);
      expect(getCombinationsCount.bind(this, 24, -234)).to.throw(NegativeParamError);
    });

    it("If sample more than sample space expected throwing", function () {
      expect(getCombinationsCount.bind(this, 456, 996)).to.throw(СontradictoryParamsError);
      expect(getCombinationsCount.bind(this, 1, 3)).to.throw(СontradictoryParamsError);
    });

    it("with length of sample 6 and sample space 36 expected 1947792 result variants", function () {
      expect(getCombinationsCount(36, 6)).to.equal(1947792);
      expect(getCombinationsCount(88, 8)).to.equal(64276915527);
    });

    it("with length of sample 0 expected 0 result variants", function () {
      expect(getCombinationsCount(2342, 0)).to.equal(0);
    });

    it("with length of sample and sample space 0 expected 0 result variants", function () {
      expect(getCombinationsCount(0, 0)).to.equal(0);
    });
  });

  describe("assignment values in sample", function () {
    it("if you choose 1 values of the 100, expected probability of assigning is 0.01", function () {
      expect(getProbability(100, 1)).to.equal(0.01);
    });

    it("if you choose 2 values of the 100, expected probability of assigning is 0.0002...", function () {
      expect(getProbability(100, 2)).to.equal(1 / 4950);
    });

    it("if you choose 5 values of the 77, expected probability of assigning is 5.0613*10^-8", function () {
      expect(getProbability(77, 5)).to.equal(1 / ((77 * 76 * 75 * 74 * 73) / (5 * 4 * 3 * 2)));
    });

    it("if you choose 1 values of the 77 with sample length 5, expected probability of assigning is 5.2019*10^-8", function () {
      expect(getProbability(77, 1, 5)).to.equal(1 / ((77 * 76 * 75 * 74 * 73) / (5 * 4 * 3 * 2)));
    });

    it("if you choose 2 values of the 36 with sample length 6, expected probability of assigning is 0.2661", function () {
      expect(getProbability(36, 2, 6)).to.equal((((6 * 5) / 2) * ((34 * 33 * 32 * 31) / (4 * 3 * 2))) / ((36 * 35 * 34 * 33 * 32 * 31) / (6 * 5 * 4 * 3 * 2)));
    });

    it("if one of the params is zero expected results is zero too", function () {
      expect(getProbability(8798, 0)).to.equal(0);
      expect(getProbability(8798, 0, 788)).to.equal(0);
      expect(getProbability(0, 0, 0)).to.equal(0);
    });

    it("if sample space, sample or choice less than zero expected throwing", function () {
      expect(getProbability.bind(this, -676, 898, 909)).to.throw(NegativeParamError);
      expect(getProbability.bind(this, 7678, -88, 99)).to.throw(NegativeParamError);
      expect(getProbability.bind(this, 8967, 88, -5)).to.throw(NegativeParamError);
      expect(getProbability.bind(this, 4534, -16)).to.throw(NegativeParamError);
      expect(getProbability.bind(this, -4534, -16)).to.throw(NegativeParamError);
    });

    it("if choice more than sample space expected throwing", function () {
      expect(getProbability.bind(this, 6768, 9887)).to.throw(СontradictoryParamsError);
      expect(getProbability.bind(this, 6768, 798798, 7668)).to.throw(СontradictoryParamsError);
    });

    it("if sample passed and it less than choice or more than sample space expected throwing", function () {
      expect(getProbability.bind(this, 12767, 9887, 9886)).to.throw(СontradictoryParamsError);
      expect(getProbability.bind(this, 5456, 9887, 9889)).to.throw(СontradictoryParamsError);
    });

    it("if sample not integer type expected its ignoring", function () {
      expect(getProbability(100, 1, '342')).to.equal(0.01);
      expect(getProbability(100, 2, null)).to.equal(1 / 4950);
      expect(getProbability(77, 5, true)).to.equal(1 / ((77 * 76 * 75 * 74 * 73) / (5 * 4 * 3 * 2)));
      expect(getProbability(77, 5, Infinity)).to.equal(1 / ((77 * 76 * 75 * 74 * 73) / (5 * 4 * 3 * 2)));
    });

    it("if sample space or choice not integer expected throwing", function () {
      expect(getProbability.bind(this, '36', 6)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 44, '6')).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 36, 6.7)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 36.565, 6)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 345.565e+445, 6)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 345, 6e+786786)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 44, '6')).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 78, Infinity)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, Infinity, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 78, -Infinity)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, -Infinity, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, null, 71)).to.throw(OnlyIntegerAvailableError);
      expect(getProbability.bind(this, 24, null)).to.throw(OnlyIntegerAvailableError);
    });
  });
});
