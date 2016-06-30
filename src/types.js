/** @module Types */

/**
 * Determines whether the passed value is an integer.
 * Works like Number.isInteger.
 * @param {*} value
 * @return {boolean}
 */
function isInteger(value) {
  return typeof value === "number" &&
    isFinite(value) &&
    Math.floor(value) === value;
}
module.exports.isInteger = isInteger;
