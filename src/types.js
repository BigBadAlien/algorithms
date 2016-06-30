/** @module Types */

/**
 * @param {*} value
 * @return {boolean}
 */
function isInteger(value) {
  return typeof value === "number" &&
    isFinite(value) &&
    Math.floor(value) === value;
}
module.exports.isInteger = isInteger;
