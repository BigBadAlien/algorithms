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
 * Get probability by terms.
 * @param {!number} sampleSpace
 * @param {!number} choice
 * @param {?number} sample
 * @throws {OnlyIntegerAvailableError}
 * @throws {NegativeParamError}
 * @throws {СontradictoryParamsError}
 * @return {number}
 */
function getProbability(sampleSpace, choice, sample) {
  if (!isInteger(sampleSpace) || !isInteger(choice)) {
    throw OnlyIntegerAvailableError;
  }

  if (sampleSpace < 0 ||
    choice < 0 ||
    (isInteger(sample) && sample < 0)) {
    throw NegativeParamError;
  }

  if (choice > sampleSpace) {
    throw СontradictoryParamsError;
  }

  if (isInteger(sample) && (sample < choice || sample > sampleSpace)) {
    throw СontradictoryParamsError;
  }

  if (sampleSpace === 0 ||
    choice === 0 ||
    sample === 0) {
    return 0;
  }

  if (!isInteger(sample)) {
    return 1 / getCombinationsCount(sampleSpace, choice);
  }

  if ((isInteger(sample) && choice === 1)) {
    return 1 / getCombinationsCount(sampleSpace, sample);
  }

  return (getCombinationsCount(sample, choice) *
    getCombinationsCount(sampleSpace - choice, sample - choice)) /
    getCombinationsCount(sampleSpace, sample);
}
module.exports.getProbability = getProbability;

/**
 * Get combination count by sample space and sample size.
 * @param {!number} sampleSpace
 * @param {!number} sample
 * @throws {OnlyIntegerAvailableError}
 * @throws {NegativeParamError}
 * @throws {СontradictoryParamsError}
 * @return {number}
 */
function getCombinationsCount(sampleSpace, sample) {
  if (!isInteger(sampleSpace) || !isInteger(sample)) {
    throw OnlyIntegerAvailableError;
  }

  if (sampleSpace < 0 || sample < 0) {
    throw NegativeParamError;
  }

  if (sampleSpace < sample) {
    throw СontradictoryParamsError;
  }

  if (sampleSpace === 0 || sample === 0) {
    return 0;
  }

  return getFactorial(sampleSpace, sample) / getFactorial(sample);
}
module.exports.getCombinationsCount = getCombinationsCount;
