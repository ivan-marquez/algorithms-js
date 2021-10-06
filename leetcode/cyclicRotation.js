// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  /**
   * Approach: Pointers
   * Complexity: O(n)
   * Flow:
   * inputs: A (array), K (times)
   * var counter: to keep track of iterations
   *
   * while K is less than or eq to K
   *   pop from array
   *   shift popped item from array
   *   increment counter
   *
   * return A
   */
  if (A.length === 0) return A;

  var counter = 0;
  var i = null;
  while (counter < K) {
    i = A.pop();
    A.unshift(i);
    counter++;
  }

  return A;
}

console.log(solution([], 1));
