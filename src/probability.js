var IncorrectSampleError = new Error();
module.exports.IncorrectSampleError = IncorrectSampleError;

var IncorrectChoiceError = new Error();
module.exports.IncorrectChoiceError = IncorrectChoiceError;

var NegativeParamError = new Error();
module.exports.NegativeParamError = NegativeParamError;

/**
 * Get probability by terms.
 * @param {!number} sampleSpace
 * @param {!number} choice
 * @param {=number} sample
 * @returns {number}
 */
function getProbability(sampleSpace, choice, sample) {

}
module.exports.getProbability = getProbability;

/**
 * Get combination count by sample space and sample size.
 * @param {!number} sampleSpace
 * @param {!number} sample
 * @returns {number}
 */
function getCombinationsCount(sampleSpace, sample) {

}
module.exports.getCombinationsCount = getCombinationsCount;


