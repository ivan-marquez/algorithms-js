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
/**
 * @param {number[]} nums
 * @return {number}
 * Approach: Reduce
 * Pseudocode:
 * Create reducer function that multiplies Math.sign(prev) * current
 * var resut to store reduce result
 * return Math.sign(result)
 */
var arraySign = function (nums) {
  const reducer = (prev, next) => Math.sign(prev) * next;
  const result = nums.reduce(reducer);

  return Math.sign(result);
};
