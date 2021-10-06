// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  /**
   * Approach: Frequency
   * Complexity: O(2n) => O(n)
   * Flow:
   * If length of array is 0, return 0
   * var map: hash table with numbers and occurrences
   * loop through array: i
   *   assign or increment i key in map
   * filter map where value eq 1
   */
  if (A.length === 0) return 0;

  var map = {};

  for (let item of A) {
    map[item] = (map[item] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] % 2 === 1) {
      return parseInt(key);
    }
  }

  return 0;
}
