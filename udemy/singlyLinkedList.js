/**
 * Singly Linked Lists
 *
 * A data structure that contains a head, tail and length properties.
 *
 * Linked Lists consist of nodes, and each node has a value and a pointer to
 * another node or null.
 *
 * Lists (good for insertion/deletion)
 * Do not have indexes
 * Connected via nodes with a next pointer
 * Random access is not allowed
 *
 * Arrays (good for retrieval)
 * Indexed in order
 * Insertion and deletion can be expensive
 * Can quickly be accessed at a specific index
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Instead of doing this, build a SinglyLinkedList class:
 * var first = new Node('Hi');
 * first.next = new Node('there');
 * first.next.next = new Node('how');
 * first.next.next.next = new Node('are');
 * first.next.next.next.next = new Node('you');
 */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to the end of list ((O(1)))
  push(val) {
    var newNode = new Node(val);

    if (!this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // add to current tail
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // remove from end of list (O(n))
  pop() {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // remove a node from the beginning (O(1))
  shift() {
    if (!this.head) {
      return undefined;
    }

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    // the one that was just removed
    return currentHead;
  }

  // add node to the beginning of list (O(1))
  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // retrieve node by its position in the list (O(n))
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;

    while (counter != index) {
      curret = current.next;
      counter++;
    }

    return current;
  }

  // change value of node based on its position in the list ((O(1)))
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  // insert node at specified position (O(1))
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var tmp = prev.next;

    prev.next = newNode;
    newNode.next = tmp;

    this.length++;

    return true;
  }

  // remove node at specified position (O(1))
  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    var prev = this.get(index - 1);
    var removed = prev.next;

    prev.next = removed.next;

    return removed;
  }

  // reverse list ((O(n)))
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next; // placeholder 1 -> 2 -> 3 -> 4 // node: 1, next: 2, 1.prev: null,
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  // helper method
  print() {
    var arr = [];
    var current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  // helper method
  traverse() {
    var current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}
