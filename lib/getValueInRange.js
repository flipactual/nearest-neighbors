/**
 * Find the position of the value within the range where 0 is the minimum value
 * and 1 is the maximum value.
 *
 * @param {Number} value
 * The value to place within the range.
 * @param {Number} range
 * The range to adjust the value for.
 *
 * @return {Number}
 * The position of the value within the range.
 */
module.exports = (value, range) => value / range - 1
