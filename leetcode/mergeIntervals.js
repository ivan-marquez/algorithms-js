/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * https://leetcode.com/problems/merge-intervals/discuss/1367823/Javascript-easyandclean-solution
 */

/**
 * approach: sorting
 * pseudocode:
 * sort the list of intervals in asc order
 * var result to store intervals (default: first interval)
 * for each interval of intervals:
 *   retrieve last interval stored in result
 *   if the ending position of last interval is greater than or equal to
 *     the starting position of the current interval
 *     update last interval ending position with max between last
 *     interval ending position and current interval's ending position
 *   else
 *     add interval to result array
 *
 * return result
 */
const merge = function (intervals) {
  if (intervals.length === 0) return [];
  else if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  var result = [intervals[0]];

  for (let interval of intervals) {
    let recentInterval = result[result.length - 1];
    if (recentInterval[1] >= interval[0]) {
      recentInterval[1] = Math.max(recentInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
};
