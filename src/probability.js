/** @module Probability */

var getFactorial = require('../src/math').getFactorial;
var isInteger = require('../src/types').isInteger;

var СontradictoryParamsError = new Error();
module.exports.СontradictoryParamsError = СontradictoryParamsError;

var NegativeParamError = new Error();
module.exports.NegativeParamError = NegativeParamError;

var OnlyIntegerAvailableError = new Error();
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

/**
 * Get probability of outcome by terms.
 * For example probability of outcome with 2 elements out of 36 with sample size 5 is 0.35714285714285715.
 * @param {!number} allElementsQuantity
 * @param {!number} outcomeElementsQuantity
 * @param {?number} sampleElementsQuantity
 * @throws {OnlyIntegerAvailableError}
 * @throws {NegativeParamError}
 * @throws {СontradictoryParamsError}
 * @return {number}
 */
function getProbability(allElementsQuantity, outcomeElementsQuantity, sampleElementsQuantity) {
  if (!isInteger(allElementsQuantity) || !isInteger(outcomeElementsQuantity)) {
    throw OnlyIntegerAvailableError;
  }

  if (allElementsQuantity < 0 ||
    outcomeElementsQuantity < 0 ||
    (isInteger(sampleElementsQuantity) && sampleElementsQuantity < 0)) {
    throw NegativeParamError;
  }

  if (outcomeElementsQuantity > allElementsQuantity) {
    throw СontradictoryParamsError;
  }

  if (isInteger(sampleElementsQuantity) &&
    (sampleElementsQuantity < outcomeElementsQuantity || sampleElementsQuantity > allElementsQuantity)) {
    throw СontradictoryParamsError;
  }

  if (allElementsQuantity === 0 ||
    outcomeElementsQuantity === 0 ||
    sampleElementsQuantity === 0) {
    return 0;
  }

  if (!isInteger(sampleElementsQuantity)) {
    return 1 / getCombinationsQuantity(allElementsQuantity, outcomeElementsQuantity);
  }

  if ((isInteger(sampleElementsQuantity) && outcomeElementsQuantity === 1)) {
    return 1 / getCombinationsQuantity(allElementsQuantity, sampleElementsQuantity);
  }

  return (getCombinationsQuantity(sampleElementsQuantity, outcomeElementsQuantity) *
    getCombinationsQuantity(allElementsQuantity - outcomeElementsQuantity,
      sampleElementsQuantity - outcomeElementsQuantity)) /
    getCombinationsQuantity(allElementsQuantity, sampleElementsQuantity);
}
module.exports.getProbability = getProbability;
console.log(getProbability(36, 2, 6));

/**
 * Get combinations quantity by all elements quantity and outcome elements quantity.
 * @param {!number} allElementsQuantity
 * @param {!number} outcomeElementsQuantity
 * @throws {OnlyIntegerAvailableError}
 * @throws {NegativeParamError}
 * @throws {СontradictoryParamsError}
 * @return {number}
 */
function getCombinationsQuantity(allElementsQuantity, outcomeElementsQuantity) {
  if (!isInteger(allElementsQuantity) || !isInteger(outcomeElementsQuantity)) {
    throw OnlyIntegerAvailableError;
  }

  if (allElementsQuantity < 0 || outcomeElementsQuantity < 0) {
    throw NegativeParamError;
  }

  if (allElementsQuantity < outcomeElementsQuantity) {
    throw СontradictoryParamsError;
  }

  if (allElementsQuantity === 0 || outcomeElementsQuantity === 0) {
    return 0;
  }

  return getFactorial(allElementsQuantity, outcomeElementsQuantity) /
    getFactorial(outcomeElementsQuantity);
}
module.exports.getCombinationsCount = getCombinationsQuantity;
