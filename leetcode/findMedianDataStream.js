/**
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value and the median is the mean of the two middle values.
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
      this.arr.push(num);
      return;
    }

    // left and right pointers for binary search
    var l = 0;
    var r = this.arr.length;

    // keep going until pointers meet
    while (l < r) {
      // get mid point
      const mid = Math.floor((l + r) / 2);
      // check if we can insert at mid
      if (num > this.arr[mid]) {
        // search right half of array
        l = mid + 1;
      } else {
        // search left half of array
        r = mid;
      }
    }

    // we can insert at left pointer
    this.arr.splice(l, 0, num);
  }

  /**
   * @return {number}
   */
  findMedian() {
    // if odd, return middle. If even, return avg of two middle
    const mid = Math.floor(this.arr.length / 2);

    return (this.arr.length & 1) === 1
      ? this.arr[mid]
      : (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
}
