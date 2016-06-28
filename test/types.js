var expect = require('chai').expect;
var isInteger = require('../src/types').isInteger;

describe("Types", function () {
  describe("Is integer", function () {
    it("Positive integer", function () {
      expect(isInteger(5)).to.be.true;
    });
    it("Negative integer", function () {
      expect(isInteger(-123)).to.be.true;
    });
    it("Substraction of integer is integer", function () {
      expect(isInteger(5 - 2)).to.be.true;
    });
    it("Zero is integer", function () {
      expect(isInteger(0)).to.be.true;
    });
    it("Float is not integer", function () {
      expect(isInteger(0.5)).to.be.false;
    });
    it("String with number is not integer", function () {
      expect(isInteger('123')).to.be.false;
    });
    it("Boolean is not integer", function () {
      expect(isInteger(true)).to.be.false;
      expect(isInteger(false)).to.be.false;
    });
    it("Infinity is not integer", function () {
      expect(isInteger(Infinity)).to.be.false;
      expect(isInteger(-Infinity)).to.be.false;
    });
    it("0 divided by zero is not integer", function () {
      expect(isInteger(0 / 0)).to.be.false;
    });
  });
});
