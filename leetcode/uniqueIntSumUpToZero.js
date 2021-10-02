/**
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  /**
   * Pseudo:
   * arr variable to store result
   * var neg to store negative numbers (default: -1)
   * var pos to store positive numbers (default +1)
   *
   * while n > 1:
   *   push to arr neg--
   *   push to arr pos++
   *   decrease n by 2
   *
   * if number is odd:
   *   push 0 to arr
   *
   * return arr
   */

  var arr = [];
  var neg = -1;
  var pos = 1;

  while (n > 1) {
    arr.push(neg);
    neg--;
    arr.push(pos);
    pos++;
    n -= 2;
  }

  if (n % 2 === 1) {
    arr.push(0);
  }

  return arr;
};
