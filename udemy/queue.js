/**
 * Queue
 *
 * FIFO data structure (first in, first out)
 */

/**
 * Building a queue with an array
 */

var q = [];

// add to the end of array
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

// remove from the beginning of array
q.shift();

// add to the beginning of array
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

// remove from the end of array
q.pop();

/**
 * Building a queue with a Linked List
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end (O(1))
  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // remove from beginning (O(1))
  dequeue() {
    if (!this.first) {
      return null;
    }

    var tmp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return tmp.value;
  }
}
