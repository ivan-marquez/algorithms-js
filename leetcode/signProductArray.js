/**
 * There is a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 *
 * You are given an integer array nums. Let product be the product of
 * all values in the array nums.
 *
 * Return signFunc(product).
 */

var arraySign = function (nums) {
  /**
   * create reducer function to calculate product using Math.sign()
   * apply reducer to nums and store result in variable
   * return Math.sign(result)
   */
  const reducer = (a, c) => Math.sign(a) * c;
  const result = nums.reduce(reducer);

  return Math.sign(result);
};
