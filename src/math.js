/** @module Math */

var BigInteger = require('big-integer/BigInteger');
var isInteger = require('../src/types').isInteger;

var NegativeValueImpossibleError = new Error('Negative value impossible');
module.exports.NegativeValueImpossible = NegativeValueImpossibleError;

var OnlyIntegerAvailableError = new Error('Only integer available');
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

var СontradictoryParamsError = new Error('Сontradictory params');
module.exports.СontradictoryParamsError = СontradictoryParamsError;

var OnlyNaturalNumberAvailableError = new Error('Only natural number available');
module.exports.OnlyNaturalNumberAvailableError = OnlyNaturalNumberAvailableError;

/**
 * Get factorial of value.
 * @param {!number} value
 * @param {?number} loops Needs for partial factorial calculation.
 * @throws {OnlyIntegerAvailableError}
 * @throws {NegativeValueImpossibleError}
 * @throws {СontradictoryParamsError}
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

/**
 * Determines whether the Mersenne number with passed power is an prime.
 * Big integer version.
 * @param {number} pow Power of Mersenne number. First number which required big math is 2^20 - 1.
 * @private
 * @return {boolean}
 */
function isPrimeBig(pow) {
  //L0 = 4
  var Lnum = BigInteger(4);

  //Cached full form of Mersenne number
  var mersenneNumber = BigInteger(2).pow(pow).minus(1);

  //Lnum+1 = Lnum^2 - 2
  for(var i = 0; i < pow - 2; i++) {
    Lnum = Lnum.pow(2).minus(2).mod(mersenneNumber);
  }

  return Lnum.isZero();
};

/**
 * Determines whether the Mersenne number with passed power is an prime.
 * Natural form of Mersenne number must be less than primitive JavaScript number.
 * @param {number} pow Power of Mersenne number. The maximum number which can be checked is 2^19 - 1.
 * @private
 * @return {boolean}
 */
function isPrimeSmall(pow) {
  var Lnum = 4;

  var mersenneNumber = Math.pow(2, pow) - 1;

  for(var i = 0; i < pow - 2; i++) {
    Lnum = (Math.pow(Lnum, 2) - 2) % mersenneNumber;
  }

  return Lnum === 0;
}

/**
 * Determines whether the Mersenne number with passed power is an prime.
 * @param {number} pow Power of Mersenne number.
 * @return {boolean}
 **/
function isPrime(pow) {
  if (pow <= 1) {
    throw OnlyNaturalNumberAvailableError;
  }

  if (pow <= 19) {
    return isPrimeSmall(pow);
  } else {
    return isPrimeBig(pow);
  }
}
module.exports.isPrime = isPrime;
