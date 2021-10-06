// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * Task Description:
 * An array A consisting of N different integers is given. The array contains
 * integers in the range [1..(N + 1)], which means that exactly one element is
 * missing.
 *
 * Your goal is to find that missing element.
 *
 * Write a function:
 * function solution(A);
 *
 * that, given an array A, returns the value of the missing element.
 *
 * For example, given array A such that:
 * A[0] = 2
 * A[1] = 3
 * A[2] = 1
 * A[3] = 5
 *
 * the function should return 4, as it is the missing element.
 *
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  /**
   * Formula:
   * (Sum of each index + 1) - (Sum of each value in array) = missing element
   */
  if (!A.length) {
    return 1;
  }

  var fullSum = 0;
  var sum = 0;

  for (let i = 0; i <= A.length; i++) {
    fullSum += i + 1;
  }

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  return fullSum - sum;
}
