/**
 * Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in ascending order, find the starting and ending
 * position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * searchRange (Brute-Force)
 * Approach: Linear Search
 * Complexity: O(n)
 * Description:
 * linear scan over the entire array to find the first and the last position.
 */
function searchRangeBF(N, T) {
  var result = [-1, -1];

  for (let i = 0; i < N.length; i++) {
    if (N[i] === T) {
      result[0] = i;
      break;
    }
  }

  for (let i = N.length - 1; i >= 0; i--) {
    if (N[i] === T) {
      result[1] = i;
      break;
    }
  }

  return result;
}

/**
 * Approach: 2 binary searches
 * Complexity: O(logn)
 * Description: Given a sorted array, binary search works by looking at the middle of the given array,
 * and based on the value of the middle element, it decides to discard one half of the array. At each
 * step, we reduce the length of the array to search by half and that is what leads to logarithmic time
 * complexity of the algorithm.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  var s = [];

  const findFirstIndex = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      if (nums[mid] === target) {
        index = mid;
      }
    }

    return index;
  };

  const findLastIndex = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      if (nums[mid] === target) {
        index = mid;
      }
    }

    return index;
  };

  s[0] = findFirstIndex(nums, target);
  s[1] = findLastIndex(nums, target);

  return s;
}
