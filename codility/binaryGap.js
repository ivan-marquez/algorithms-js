/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive
 * zeros that is surrounded by ones at both ends in the binary representation of N.
 * For example, number 9 has binary representation 1001 and contains a binary gap of
 * length 2. The number 529 has binary representation 1000010001 and contains two
 * binary gaps: one of length 4 and one of length 3. The number 20 has binary
 * representation 10100 and contains one binary gap of length 1. The number 15 has
 * binary representation 1111 and has no binary gaps. The number 32 has binary
 * representation 100000 and has no binary gaps.
 *
 * Write a function:
 *
 * function solution(N);
 *
 * that, given a positive integer N, returns the length of its longest binary gap. The
 * function should return 0 if N doesn't contain a binary gap.
 */

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  /**
   * Approach: Sliding Window
   * Complexity: O(n)
   *
   * Workflow:
   * var bin: Convert input number (N) to binary
   * var maxGap: stores maximum Gap count (default: -Infinity)
   * var currentGap: stores substring gap
   * loop through string: i
   *   if char == 0
   *     currentGap +=1
   *   if char == 1
   *     compare maxGap with currentGap and assign max to maxGap
   *     reset currentGap to 0
   *
   * return maxGap
   */
  var bin = Math.abs(N).toString(2);
  var maxGap = 0;
  var currentGap = 0;

  for (let i of bin) {
    if (parseInt(i) === 0) {
      currentGap += 1;
    }

    if (parseInt(i) === 1) {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    }
  }

  return maxGap;
}
