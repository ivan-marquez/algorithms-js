/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median
 * of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Pseudocode:
 * totalLen = nums1 length + nums2 length
 * medianIndices []
 *
 * mergedArr []
 * i = 0
 *
 * while nums1 length >= 0 && nums2 length >= 0
 * && i < (totalLen / 2) + 1
 *   if nums1[0] less than nums2[0]
 *     mergedArr.push(nums1.shift())
 *   else if nums1[0] > nums2[0]
 *     mergedArr.push(nums2.shift())
 * i++
 *
 * if totalLen is odd => push mid index and one index before mid
 *   medianIndices.push((totalLen/2) - 1 )
 *   medianIndices.push((totalLen/2))
 * else => just push mid
 *   medianIndices.push((totalLen/2))
 *
 * if medianIndices length == 1
 *   return mergedArray[medianIndices[0]]
 * else
 *   return mergedArray[medianIndices[0]] + mergedArray[medianIndices(1)] / 2
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const totalLen = nums1.length + nums2.length;
  const medianIndices = [];

  const mergedArr = [];
  var i = 0;

  // merge arrays by going only through half of list
  while (
    nums1.length >= 0 &&
    nums2.length >= 0 &&
    i < Math.ceil(totalLen / 2) + 1
  ) {
    if (nums2.length <= 0 || nums1[0] <= nums2[0]) {
      mergedArr.push(nums1.shift());
    } else if (nums1.length <= 0 || nums1[0] > nums2[0]) {
      mergedArr.push(nums2.shift());
    }

    i++;
  }

  // calculate mid (1 index if totalLen is odd, 2 if even)
  if (totalLen % 2 === 0) {
    medianIndices.push(Math.floor(totalLen / 2) - 1);
    medianIndices.push(Math.floor(totalLen / 2));
  } else {
    medianIndices.push(Math.floor(totalLen / 2));
  }

  // return 1 index if medianIndices is odd, 2 if even
  if (medianIndices.length === 1) {
    return mergedArr[medianIndices[0]];
  } else {
    const firstMed = medianIndices[0];
    const secondMed = medianIndices[1];

    return (mergedArr[firstMed] + mergedArr[secondMed]) / 2;
  }
};
