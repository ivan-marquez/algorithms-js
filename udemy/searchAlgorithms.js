/**
 * Searching Algorithms
 */

/**
 * Linear Search
 *
 * Complexity: O(n)
 *
 * JS implementations:
 * indexOf
 * includes
 * find
 * findIndex
 *
 * Pseudocode:
 * Accept an array and a value
 * Loop through the array and check if the current array
 * element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch([1, 3, 4], 3));

/**
 * Binary Search
 *
 * Approach: Divide and Conquer
 *
 * Much faster form of search
 * Rather than eliminating one element at a time, you can eliminate
 * half of the remaining elements at a time
 * Binary Search only works on SORTED arrays!!!
 *
 * Pseudocode:
 * This function accepts a SORTED array and a value.
 * Create a left pointer at the start of the array, and a right pointer at the end
 * of the array.
 * While the left pointer comes before the right pointer:
 *   Create a pointer in the middle.
 *   If you find the value you want, return the index.
 *   If the value is too small, move the left pointer up.
 *   If the value is too large, move the right pointer down.
 * If value not found, return -1.
 */
function binarySearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  var mid = (start + end) / 2;

  if (arr[mid] === val) return mid;
  else if (arr[mid] > val) return binarySearch(arr.slice(mid), val);
  else if (arr[mid] < val) return binarySearch(arr.slice(0, mid), val);
  else return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
