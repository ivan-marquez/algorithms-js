/**
 * Given an array arr[] of size N and an integer K. Find the maximum for each and every contiguous subarray of size K.
 *
 * Input:
 * N = 9, K = 3
 * arr[] = 1 2 3 1 4 5 2 3 6
 * Output:
 * 3 3 4 5 5 5 6
 *
 * Explanation:
 * 1st contiguous subarray = {1 2 3} Max = 3
 * 2nd contiguous subarray = {2 3 1} Max = 3
 * 3rd contiguous subarray = {3 1 4} Max = 4
 * 4th contiguous subarray = {1 4 5} Max = 5
 * 5th contiguous subarray = {4 5 2} Max = 5
 * 6th contiguous subarray = {5 2 3} Max = 5
 * 7th contiguous subarray = {2 3 6} Max = 6
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 * Approach: Sliding Window
 * Pseudocode:
 * var result to store result
 * if num > arr.length
 *   return null
 * var window to store max number
 * var windowStart
 *
 * for (let windowEnd = k; windowEnd < arr.length - k + 1; windowEnd++)
 *
 *
 *
 *
 * return result
 */
class Solution {
  //Function to find maximum of each subarray of size k.
  max_of_subarrays(arr, n, k) {
    if (n > arr.length) return null;

    var max = 0;
    var windowStart = 0;
    var result = [];

    for (let windowEnd = 0; windowEnd < n; windowEnd++) {
      max = Math.max(...arr.slice(windowStart, windowEnd + 1));

      if (windowEnd >= k - 1) {
        result.push(max);
        windowStart += 1;
      }
    }

    return result;
  }
}
