/**
 * Sliding Window
 * This pattern involves creating a window that can either be an array or number from one position to another.
 * Depending on a certain condition, the window either increases or closes (and a new window is created).
 * Very useful for keeping track of a subset of data in an array or string.
 */

/**
 * Problem:
 * Write a function that accepts an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements in the array.
 *
 * Examples:
 * maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) => 10 (2 + 8)
 * maxSubArraySum([4, 2, 1, 6], 1) => 6
 *
 * Edge case:
 * if array is empty, return null
 *
 * #bruteForce
 * inputs: arr, n
 * max = variable to track maximum sum (-Infinity)
 * loop through array: i
 *   var sum = 0;
 *   nested loop: j (to iterate through next n items)
 *     sum += arr[j]
 *
 *     max = Math.max(max, sum)
 * return max
 *
 * Complexity: O(n^2)
 *
 * v2
 * inputs: arr, n
 * validation: if n > arr.length => null
 * maxSum = -Infinity: to track maximum sum
 * windowStart = 0 (to keep track of first window item)
 * windowSum = 0 (sum of current window)
 * loop through array: windowEnd
 *   windowSum += arr[windowEnd]
 *   if windowEnd >= n - 1 // validation to stop every n items
 *     maxSum = Math.max(windowSum, maxSum) // max between windowSum and maxSum
 *     windowSum -= arr[windowStart] // subtract first item in window from windowSum
 *     windowStart += 1; // increase windowStart to slide window ahead by one item
 *
 * return maxSum
 *
 * Complexity: O(n)
 */
function maxSuabArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var maxSum = -Infinity;
  var windowStart = 0;
  var windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= num - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return maxSum;
}

/**
 * Examples
 */

// complexity: O(N * K)
function findAverageOfSubArrayV1(K, arr) {
  const result = [];

  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next K elements
    let sum = 0.0;

    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}

// complexity: O(N)
function findAverageOfSubArrayV2(K, arr) {
  const result = [];
  var windowSum = 0.0;
  var windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add next element

    // if window end reached
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract item going out
      windowStart += 1; // slide window ahead
    }
  }

  return result;
}

// O(N * K) #bruteForce
function maxSubArrayOfSizeKV1(K, arr) {
  var maxSum = 0;
  var windowSum = 0;

  for (let i = 0; i < arr.length - K + 1; i++) {
    windowSum = 0;

    for (let j = i; j < i + K; j++) {
      windowSum += arr[j];
    }

    // largest between maxSum and windowSum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// sliding window: O(N)
function maxSubArrayOfSizeKV2(K, arr) {
  var maxSum = 0;
  var windowSum = 0;
  var windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    // if window end reached
    if (windowEnd >= K - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract item going out
      windowStart += 1; // slide window ahead
    }
  }

  return maxSum;
}

function smallestSubArrayWithGivenSum(s, arr) {
  var windowSum = 0;
  var minLength = Infinity;
  var windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add elements

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

module.exports = {
  findAverageOfSubArrayV1,
  findAverageOfSubArrayV2,
  maxSubArrayOfSizeKV1,
  maxSubArrayOfSizeKV2,
  smallestSubArrayWithGivenSum
};
