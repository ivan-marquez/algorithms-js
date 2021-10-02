/**
 * Group Anagrams
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = this.prev = null;
    this.freq = 1;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    let prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeTail() {
    let node = this.tail.prev;
    this.removeNode(node);
    return node.key;
  }

  isEmpty() {
    return this.head.next.val === null;
  }
}

var dll = new DoublyLinkedList();
console.log(dll);
