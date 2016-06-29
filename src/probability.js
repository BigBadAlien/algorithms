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
 * @param {=number} sample
 * @return {number}
 */
function getProbability(sampleSpace, choice, sample) {

}
module.exports.getProbability = getProbability;

/**
 * Get combination count by sample space and sample size.
 * @param {!number} sampleSpace
 * @param {!number} sample
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
