/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 *
 * LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
 * int get(int key): Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
 *   If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 *
 * The functions get and put must each run in O(1) average time complexity.
 *
 * Example:
 * Input
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * Explanation
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3
 * lRUCache.get(4);    // return 4
 */

/**
 * @param {number} capacity
 * Approach: Ordered Dictionary
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.keyMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.keyMap.has(key)) return -1;

  var value = this.keyMap.get(key);
  this.keyMap.delete(key);
  this.keyMap.set(key, value);

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.keyMap.has(key)) {
    this.keyMap.delete(key);
    this.keyMap.set(key, value);
    return;
  }

  if (this.keyMap.size === this.capacity) {
    this.evictLRU();
  }

  this.keyMap.set(key, value);
};

/**
 * @return {void}
 */
LRUCache.prototype.evictLRU = function () {
  var key = this.keyMap.keys().next().value;
  this.keyMap.delete(key);
};
