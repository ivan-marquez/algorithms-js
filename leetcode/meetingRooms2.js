/**
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of conference rooms required.
 * Cleaner solution: https://leetcode.com/problems/meeting-rooms-ii/discuss/1332379/JavaScript-Two-Solutions-Fast-and-Easy-(Chronological-Ordering-MinHeap)
 */

/**
 * Approach: Min heap
 * Instead of manually iterating on every room that's been allocated and checking if the room
 * is available or not, we can keep all the rooms in a min heap where the key for the min heap
 * would be the ending time of the meeting.
 *
 * So, every time we want to check if any room is free or not, simply check the topmost
 * element of the min heap as that would be the room that would get free the earliest out
 * of all the other rooms currently occupied.
 *
 * If the room we extracted from the top of the min heap isn't free, then no other room is.
 * So, we can save time here and simply allocate a new room.
 *
 * Pseudocode:
 * Sort meetings by start time (asc)
 * maxRooms variable to keep track of required rooms
 * if min heap size > 0 and there's a root value, and this root value is <= meeting start time:
 *   remove min from heap
 * insert meeting's end time to the min heap
 * assign to maxRooms the max between maxRooms and min heap size
 * return maxRooms
 */
class MinHeap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.unshift(val);
    this.heap.sort(this.compareFunc);
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
  const compareFunc = (a, b) => a - b;
  const minHeap = new MinHeap(compareFunc);

  intervals.sort((a, b) => a[0] - b[0]);

  var maxRooms = 0;

  intervals.forEach((interval) => {
    if (minHeap.size > 0 && minHeap.peek() <= interval[0]) {
      minHeap.extract();
    }

    minHeap.insert(interval[1]);
    maxRooms = Math.max(maxRooms, minHeap.size);
  });

  return maxRooms;
};
