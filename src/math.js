var isInteger = require('../src/types').isInteger;

var NegativeValueImpossibleError = new Error('Negative value impossible');
module.exports.NegativeValueImpossible = NegativeValueImpossibleError;

var OnlyIntegerAvailableError = new Error('Only integer available');
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

var СontradictoryParamsError = new Error('Сontradictory params');
module.exports.СontradictoryParamsError = СontradictoryParamsError;

/**
 * Get factorial of number
 * @param {!number} value
 * @param {=number} loops Needs for partial fractal calculation.
 * @return {number}
 */
function getFactorial(value, loops) {
  if (!isInteger(value)) {
    throw OnlyIntegerAvailableError;
  }

  if (value < 0) {
    throw NegativeValueImpossibleError;
  }

  if (isInteger(loops) && loops < 0) {
    throw NegativeValueImpossibleError;
  }

  if (isInteger(loops) && loops > value) {
    throw СontradictoryParamsError;
  }

  if (value == 0) {
    return 1;
  } else {
    if (isInteger(loops) && loops > 1) {
      return (value * getFactorial(value - 1, loops - 1));
    } else if (isInteger(loops) && loops === 1) {
      return value;
    } else {
      return (value * getFactorial(value - 1));
    }
  }
}
module.exports.getFactorial = getFactorial;
