/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Approach: Sorting
 * Pseudocode:
 * sort list of intervals by start point in asc order
 * var result to store final intervals (default: intervals[0])
 * loop through intervals:
 *   var mostRecentInterval = result[result.length - 1]
 *   if mostRecentInterval[1] >= interval[0]
 *     mostRecentInterval[1] = max between mostRecentInterval[1] and interval[1]
 *   else
 *     result.push(interval)
 *
 * return result
 */
const merge = function (intervals) {
  if (intervals.length === 0) return [];
  else if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  var result = [intervals[0]];

  for (let interval of intervals) {
    let mostRecentInterval = result[result.length - 1];
    if (mostRecentInterval[1] >= interval[0]) {
      mostRecentInterval[1] = Math.max(mostRecentInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
};
