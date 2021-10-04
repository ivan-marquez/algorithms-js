/**
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 */
/**
 * @param {number} n
 * @return {number[]}
 * Pseudocode:
 * var result []
 * var pos = 1
 * var neg = -1
 * while n is greater than 1
 *   result.push(neg--)
 *   result.push(pos++)
 *   n -= 2
 *
 * if (n % 2 === 1)
 *   result.push(0)
 *
 * return result
 */
var sumZero = function (n) {
  const result = [];
  var neg = -1;
  var pos = 1;

  while (n > 1) {
    result.push(neg--);
    result.push(pos++);
    n -= 2;
  }

  if (n % 2 !== 0) {
    result.push(0);
  }

  return result;
};
