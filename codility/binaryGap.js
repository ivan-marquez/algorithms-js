function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  /**
   * Approach: Sliding Window
   * Complexity: O(n)
   *
   * Workflow:
   * var bin: Convert input number (N) to binary
   * var maxGap: stores maximum Gap (default: -Infinity)
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
    if (i == 0) {
      currentGap += 1;
    }

    if (i == 1) {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    }
  }

  return maxGap;
}
