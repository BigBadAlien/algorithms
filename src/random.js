/** @module Random */

var OnlyIntegerAvailableError = new Error('Only integer available');
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

var СontradictoryParamsErrorFactory = function () {
  return new Error('Contradictory parameters ' + JSON.stringify(arguments));
};
module.exports.СontradictoryParamsErrorFactory = СontradictoryParamsErrorFactory;

/**
 * Create function which distribute events by ranges.
 * For example params (5,2,13) gives true onetime in ranges
 * [6;14],[16,29],[31,44],[46,59],[61,74],[76,89]...
 * @param {!number} attemptsSkip First counts of attempts skipped.
 * @param {!number} leftRangeStep
 * @param {!number} rightRangeStep
 * @throws {OnlyIntegerAvailableError}
 * @returns {Function}
 */
function isEventHappenedFactory(attemptsSkip, leftRangeStep, rightRangeStep) {
  if (!Number.isInteger(attemptsSkip) || !Number.isInteger(leftRangeStep) || !Number.isInteger(rightRangeStep)) {
    throw OnlyIntegerAvailableError;
  }

  var current = 0;
  var leftRange = null;
  var rightRange = null;
  var currentShowIndex = null;

  return function () {
    current += 1;
    if (current <= attemptsSkip) {
      return false;
    }

    if (leftRange === null) {
      leftRange = current;
    }

    if (rightRange === null) {
      if (rightRangeStep <= attemptsSkip) {
        rightRange = leftRange + rightRangeStep;
      } else {
        rightRange = rightRangeStep + 1;
      }
    }

    if (rightRange < current) {
      leftRange = rightRange + leftRangeStep;
      rightRange = leftRange + rightRangeStep;
    }

    if (currentShowIndex === null ||
      currentShowIndex < leftRange ||
      currentShowIndex > rightRange) {
      currentShowIndex = getRandomInt(leftRange, rightRange);
    }

    return current === currentShowIndex;
  }
}
module.exports.isEventHappenedFactory = isEventHappenedFactory;

/**
 *
 * @param {number} min
 * @param {number} max
 * @throws {СontradictoryParamsErrorFactory}
 * @returns {*}
 */
function getRandomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw OnlyIntegerAvailableError;
  }

  if (min >= max) {
    throw СontradictoryParamsErrorFactory(arguments);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports.getRandomInt = getRandomInt;
