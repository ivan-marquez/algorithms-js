/**
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the
 * minimum number of conference rooms required.
 *
 * Example 1:
 * Input: intervals = [[0,30],[5,10],[15,20]]
 * Output: 2
 *
 * Example 2:
 * Input: intervals = [[7,10],[2,4]]
 * Output: 1
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 * Approach: Min Heap
 */
class MinHeap {
  constructor(sortFunc) {
    this.sortFunc = sortFunc;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.unshift(val);
    this.heap.sort(this.sortFunc);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }
}

const minMeetingRooms = function (intervals) {
  const sortFunc = (a, b) => a - b;
  const heap = new MinHeap(sortFunc);

  var maxRooms = 0;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let interval of intervals) {
    if (heap.size > 0 && heap.peek() <= interval[0]) {
      heap.extract();
    }

    heap.insert(interval[1]);
    maxRooms = Math.max(maxRooms, heap.size);
  }

  return maxRooms;
};
