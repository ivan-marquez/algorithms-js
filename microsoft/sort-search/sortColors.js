/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the
 * same color are adjacent, with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * Example:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Approach: 3 pointers (Dutch National Flag Problem)
 * Pseudocode:
 * var left = 0
 * var right = length of array - 1
 * var current = left
 *
 * while(current <= right)
 *   if arr[current] === 0
 *     swap arr[left] with arr[current]
 *     left++
 *     current++
 *   else, if arr[current] === 2
 *     swap arr[right] with arr[current]
 *     right--
 *   else
 *     current++
 */
const sortColors = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var current = left;

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current);
      left++;
      current++;
    } else if (nums[current] === 2) {
      swap(right, current);
      right--;
    } else {
      current++;
    }
  }
};
