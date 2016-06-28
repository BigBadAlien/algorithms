var NegativeValueImpossible = new Error('Negative value impossible');
module.exports.NegativeValueImpossible = NegativeValueImpossible;

/**
 * Get factorial of number
 * @param {!number} value
 * @return {number}
 */
function getFactorial(value) {
  if (value < 0) {
    throw NegativeValueImpossible;
  }
  else if (value == 0) {
    return 1;
  }
  else {
    return (value * getFactorial(value - 1));
  }
}
module.exports.getFactorial = getFactorial;
