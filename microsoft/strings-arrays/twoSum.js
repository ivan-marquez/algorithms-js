/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Approach: Brute-Force
 * Complexity: O(n^2)
 * Pseudocode:
 * loop through nums (i)
 *   loop through nums (j = i + 1)
 *     if nums[j] is eq to target - nums[i]
 *       return [i,j]
 * return null
 *
 * Approach: Hash Table (Map)
 * Complexity: O(2n) => O(n)
 * Pseudocode:
 * var map (hash table)
 * loop through nums (i)
 *   map.set(nums[i], i)
 * loop through nums (i)
 *   var complement to store target - nums[i]
 *   if map has complement and map[complement] !== i
 *     return [i, map[complement]]
 *
 * Example:
 * Inputs:
 * [3,3], 6
 * Map:
 * {3 => 1}
 * Inputs:
 * [2,7,11], 9
 * {2 => 0, 7 => 1, 9 => 3}
 */
var twoSumv1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  var map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return null;
};
