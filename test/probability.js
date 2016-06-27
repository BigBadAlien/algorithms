var getProbability = require('./src/probability').getProbability;
var IncorrectSampleError = require('./src/probability').IncorrectSampleError;
var IncorrectChoiceError = require('./src/probability').IncorrectChoiceError;
var NegativeParamError = require('./src/probability').NegativeParamError;
var expect = require('chai').expect;

describe("Probability", function () {
  describe("of assignment values in sample", function () {
    it("if you choose 1 values of the 100, expected probability of assigning is 0.01", function () {
      expect(getProbability(100, 1)).to.equal(0.01);
    });

    it("if you choose 2 values of the 100, expected probability of assigning is 0.0002...", function () {
      expect(getProbability(100, 2)).to.equal(1 / 4950);
    });

    it("if you choose 5 values of the 77, expected probability of assigning is 5.0613*10^-8", function () {
      expect(getProbability(77, 5)).to.equal(5.0613 * Math.pow(10, -8));
    });

    it("if you choose 1 values of the 77 with sample length 5, expected probability of assigning is 5.2019*10^-8", function () {
      expect(getProbability(77, 5, 1)).to.equal(5.2019 * Math.pow(10, -8));
    });

    it("if you choose 2 values of the 36 with sample length 6, expected probability of assigning is 0.2661", function () {
      expect(getProbability(36, 6, 2)).to.equal(0.2661);
    });

    it("if one of the params is zero expected results is zero too", function () {
      expect(getProbability(6567, 787, 0)).to.equal(0);
      expect(getProbability(8798, 0, 0)).to.equal(0);
      expect(getProbability(8798, 0)).to.equal(0);
      expect(getProbability(0, 0, 0)).to.equal(0);
    });

    it("if sample more than sample space expected throwing", function () {
      expect(getProbability(6768, 798798, 7668)).to.throw(IncorrectSampleError);
    });

    it("if sample space, sample or choice less than zero expected throwing", function () {
      expect(getProbability(-676, 898, 909)).to.throw(NegativeParamError);
      expect(getProbability(7678, -88, 99)).to.throw(NegativeParamError);
      expect(getProbability(8967, 88, -5)).to.throw(NegativeParamError);
      expect(getProbability(4534, -16)).to.throw(NegativeParamError);
      expect(getProbability(-4534, -16)).to.throw(NegativeParamError);
    });

    it("if choice more than sample expected throwing", function () {
      expect(getProbability(8976, 566, 999)).to.throw(IncorrectChoiceError);
      expect(getProbability(6768, 9887)).to.throw(IncorrectChoiceError);
    });
  });
});
