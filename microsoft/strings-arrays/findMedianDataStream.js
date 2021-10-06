/**
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value and the median is the mean of the two middle values.
 *
 * For example, for arr = [2,3,4], the median is 3.
 * For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
 *
 * Implement the MedianFinder class:
 *
 * MedianFinder() initializes the MedianFinder object.
 * void addNum(int num) adds the integer num from the data stream to the data structure.
 * double findMedian() returns the median of all elements so far. Answers within
 * 10^-5 of the actual answer will be accepted.
 *
 * Example:
 * Input
 * ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * Output
 * [null, null, null, 1.5, null, 2.0]
 * Explanation
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 */
/**
 * Approach: Binary Search
 * Pseudocode:
 * addNum:
 *
 *
 * findMedian:
 */
class MedianFinder {
  constructor() {
    this.arr = [];
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    if (this.arr.length === 0) {
      this.arr.push(0);
      return;
    }

    var left = 0;
    var right = this.arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (num > this.arr[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.arr.splice(left, 0, num);
  }

  /**
   * @return {number}
   */
  findMedian() {
    // if odd, return mid; if even, return avg of mid and mid - 1
    const mid = Math.floor(this.arr.length / 2);

    return (this.arr.length & 1) === 1
      ? this.arr[mid]
      : Math.floor((this.arr[mid] + this.arr[mid - 1]) / 2);
  }
}
