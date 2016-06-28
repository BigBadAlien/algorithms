var NegativeValueImpossible = new Error('Negative value impossible');
module.exports.NegativeValueImpossible = NegativeValueImpossible;

/**
 * Get factorial of number
 * @param {!number} value
 * @param {=number} count
 * @returns {number}
 */
function getFactorial(value, count) {
  if (value < 0) {
    throw NegativeValueImpossible;
  }
  else if (value == 0) {
    return 1;
  }
  else {
    return (value * getFactorial(value - 1));
  }
};
module.exports.getFactorial = getFactorial;
