// Min Heap
class Heap {
  constructor(compareFunc) {
    this.heap = [];
    this.compareFunc = compareFunc;
  }

  get size() {
    return this.heap.length;
  }

  insert(val) {
    this.heap.shift(val);
    this.heap.sort(this.compareFunc);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.unshift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }
}

// Binary Search (insert)
class BS {
  constructor() {
    this.arr = [];
  }

  get size() {
    return this.arr.length;
  }

  insert(num) {
    if (this.size === 0) {
      this.arr.push(num);
      return;
    }

    // pointers
    var l = 0;
    var r = this.size;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      if (num < this.arr[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    this.arr.splice(l, 0, num);
  }

  findMedian() {
    const mid = Math.floor(this.size / 2);

    return (this.size & 1) === 1
      ? this.arr[mid]
      : (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
}

// Linked List
// https://sebhastian.com/linked-list-javascript/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to the end of list ((O(1)))
  push(value) {
    this.length++;
    var newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }

    // When the value of tail is null, it means that the linked list is still empty,
    // so you need to assign the newNode object to the head and tail pointers.
    this.head = this.tail = newNode;
  }

  print() {
    var current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // remove from end of list (O(n))
  pop() {
    if (this.tail) {
      this.length--;

      const tailNode = this.tail;
      let currentNode = this.head;

      while (currentNode !== tailNode) {
        currentNode = currentNode.next;
      }

      const beforeTail = currentNode;
      this.tail = beforeTail;
      this.tail.next = null;

      return tailNode;
    }

    return undefined;
  }

  // add node to the beginning of list (O(1))
  unshift(value) {}

  // remove a node from the beginning (O(1))
  shift() {}
}

// Binary Search (rotated sorted search)
const binarySearchRS = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= target && target <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // target is on the left
      right = mid - 1;
    }
  }

  return -1;
};

// Binary Search (sorted array): O(logn) => n is the number of elements in the array
const binarySearch = function (sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (sortedArray[mid] === key) {
      return mid;
    } else if (sortedArray[mid] < key) {
      // continue searching to the right
      start = mid + 1;
    } else {
      // continue searching to the left
      end = mid - 1;
    }
  }

  // key not found
  return -1;
};
