/**
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 *
 * This matrix has the following properties:
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Example:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Approach: Divide & Conquer (Binary Search)
 * Pseudocode:
 * rows = matrix.length
 * columns = matrix[0].length
 * left = 0
 * right = rows * columns - 1
 *
 * while left is less than or eq to right
 *   midIdx = (left + right) / 2
 *   midElem = matrix[midIdx / columns][midIdx % columns]
 *   if target is eq to midElem
 *     return true
 *   else if target < midElem
 *     right = midIdx - 1
 *   else
 *     left = midIdx + 1
 *
 * return false
 */
const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  var left = 0;
  var right = rows * columns - 1;

  while (left <= right) {
    let midIdx = Math.floor((left + right) / 2);
    let midElement = matrix[Math.floor(midIdx / 2)][midIdx % columns];

    if (target === midElement) {
      return true;
    } else if (target < midElement) {
      right = midIdx - 1;
    } else {
      left = midIdx + 1;
    }
  }

  return false;
};
