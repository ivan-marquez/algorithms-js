/**
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 *
 * Implement the LFUCache class:
 * LFUCache(int capacity) Initializes the object with the capacity of the data structure.
 * int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
 * void put(int key, int value) Update the value of the key if present, or inserts the key if not already
 * present. When the cache reaches its capacity, it should invalidate and remove the least frequently used
 * key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the
 * same frequency), the least recently used key would be invalidated.
 *
 * To determine the least frequently used key, a use counter is maintained for each key in the cache. The key
 * with the smallest use counter is the least frequently used key.
 *
 * When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use
 * counter for a key in the cache is incremented either a get or put operation is called on it.
 *
 * The functions get and put must each run in O(1) average time complexity.
 *
 * https://leetcode.com/problems/lfu-cache/
 * https://leetcode.com/problems/lfu-cache/discuss/1449558/JS-Using-two-HashMaps-and-DLL-672ms-100
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
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
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

const LFUCache = function (capacity) {
  this.capacity = capacity;
  this.currentSize = 0;
  this.leastFreq = 0;
  this.nodeHash = new Map();
  this.freqHash = new Map();
};

/**
 *
 * @param {*} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {};

LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;
  let node = this.nodeHash.get(key);

  if (!node) {
    this.currentSize++;
    if (this.currentSize > this.capacity) {
      let tailKey = this.freqHash.get(this.leastFreq).removeTail();
      this.nodeHash.delete(tailKey);
      this.currentSize--;
    }

    let newNode = new Node(key, value);
    if (this.freqHash.get(1) === null) this.freqHash.set(1, DoublyLinkedList());
    this.freqHash.get(1).insertHead(newNode);

    this.nodeHash.set(key, newNode);
    this.leastFreq = 1;
  }
};
