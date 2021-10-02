/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 * https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/282809/JavaScript-beats-100-or-BinarySearch
 */

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  const x = nums1.length;
  const y = nums2.length;
  var start = 0;
  var end = x;

  while (start <= end) {
    let partitionX = Math.floor((start + end) / 2);
    let partitionY = Math.floor((start + end) / 2 - partitionX);

    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) & 1) return Math.max(maxLeftX, maxLeftY);

      return (
        (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
      );
    } else if (maxLeftX > minRightY) {
      start = partitionX - 1;
    } else {
      end = partitionX + 1;
    }
  }
};
