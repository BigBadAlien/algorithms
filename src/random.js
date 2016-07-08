var OnlyIntegerAvailableError = new Error('Only integer available');
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

var СontradictoryParamsErrorFactory = function () {
  return new Error('Contradictory parameters ' + JSON.stringify(arguments));
};
module.exports.СontradictoryParamsErrorFactory = СontradictoryParamsErrorFactory;

/**
 * Create function which distribute events by ranges.
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

  var currentPhotoCount = 0;
  var leftRange = null;
  var rightRange = null;
  var currentShowIndex = null;

  return function () {
    currentPhotoCount += 1;
    if (currentPhotoCount <= attemptsSkip) {
      return false;
    }

    if (leftRange === null) {
      leftRange = currentPhotoCount;
    }

    if (rightRange === null) {
      if (rightRangeStep <= attemptsSkip) {
        rightRange = leftRange + rightRangeStep;
      } else {
        rightRange = rightRangeStep + 1;
      }
    }

    if (rightRange < currentPhotoCount) {
      leftRange = rightRange + leftRangeStep;
      rightRange = leftRange + rightRangeStep;
    }

    if (currentShowIndex === null ||
      currentShowIndex < leftRange ||
      currentShowIndex > rightRange) {
      currentShowIndex = getRandomInt(leftRange, rightRange);
    }

    if (currentPhotoCount === currentShowIndex) {
      return true;
    }

    return false;
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
