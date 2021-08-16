/**
 * Stack
 * LIFO data structure (last in, first out)
 */

/**
 * Creating a stack with an array
 * Push and pop is more efficient
 * since unshift and shift requires
 * every item to be re-indexed
 */
var stack = [];

// add at end of array
stack.push('google');
stack.push('instagram');
stack.push('youtube');

// remove from end of array
stack.pop();

// add at beginning of array
stack.unshift('create new file');
stack.unshift('resized file');
stack.unshift('cloned out wrinkle');

// remove from beginning of array
stack.shift();

/**
 * Creating a stack from scratch
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the beginning of list (O(1))
  push(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }

    return ++this.size;
  }

  // remove from the beginning of list (O(1))
  pop() {
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
