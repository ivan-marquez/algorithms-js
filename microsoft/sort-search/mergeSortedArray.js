/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and
 * two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored
 * inside the array nums1. To accommodate this, nums1 has a length of m + n, where the
 * first m elements denote the elements that should be merged, and the last n
 * elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [*1,*2,2,*3,5,6] with the marked(*) elements coming from nums1.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Pseudocode:
 * idx1 = m - 1
 * idx2 = n - 1
 * idx3 = m + n - 1
 *
 * while idx2 >= 0
 *   if nums1[idx1] > nums2[idx2]
 *     nums1[idx3] = nums1[idx1]
 *     decrease idx3
 *     decrease idx1
 *   else
 *     nums1[idx3] = nums2[idx2]
 *     decrease idx3
 *     decrease idx2
 *
 */
const merge = function (nums1, m, nums2, n) {
  var idx1 = m - 1;
  var idx2 = n - 1;
  var idx3 = m + n - 1;

  while (idx2 >= 0) {
    if (nums1[idx1] > nums2[idx2]) {
      nums1[idx3--] = nums1[idx1--];
    } else {
      nums1[idx3--] = nums2[idx2--];
    }
  }
};
