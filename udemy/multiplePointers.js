/**
 * Problem:
 * Write a function that accepts a SORTED array of integers. The function
 * should find the FIRST pair where their sum is 0. Return an array that
 * includes both values that sum to zero or undefined (when a pair does
 * not exist).
 *
 * Examples:
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3]
 * sumZero([-2, 0, 1, 3]) => undefined
 * sumZero([1, 2, 3]) => undefined
 */

/**
 * Version 1 #bruteForce
 * Description:
 * loop through each item of array and have a nested loop that iterates
 * the same array, starting with the next item.
 * for each item in array
 *   for each item + 1 in array
 *     if item[i] + item[j] equals 0, return [i, j]
 * NOTE: this would iterate the entire array for every item in the array
 * complexity: O(n^2)
 */
function sumZeroV1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

/**
 * Version 2
 * Description:
 * have 2 pointers; left and right (first index and last index of array, respectively)
 * while left < right
 *   sum = left + right
 *   if sum == 0
 *     return [left, right]
 *   else if sum > 0
 *     subtract from right
 *   else
 *     add to left
 * complexity: O(n)
 */
function sumZeroV2(arr) {
  var left = 0; // first index
  var right = arr.length - 1; // last index

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined; // optional
}

/**
 * Problem:
 * Implement a function that accepts a SORTED array, and counts the UNIQUE values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * Examples:
 * countUniqueValues([1, 1, 1, 1, 1, 2]) => 2
 * countUniqueValues([-2, -1, -1, 0, 1]) => 4
 * countUniqueValues([]) => 0
 *
 * Flow:
 * var i = 0
 * loop from index 1 onwards (j)
 *   if index i not equal to index j
 *     move i to the right and replace i value with j
 * return i + 1
 *
 * complexity: O(n)
 */
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  var i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
