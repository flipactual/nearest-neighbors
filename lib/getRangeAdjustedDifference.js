const getValueInRange = require('./getValueInRange')

/**
 * Find the range adjusted difference between two numbers.
 *
 * @param {Number} a
 * The first value.
 * @param {Number} b
 * The second value.
 * @param {Number} range
 * The range to adjust the values for.
 *
 * @return {Number}
 * The range adjusted difference.
 */
module.exports = function(a, b, range) {
  return getValueInRange(a, range)
    - getValueInRange(b, range)
}
