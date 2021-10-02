/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 *
 * LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
 * int get(int key): Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
 * If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 */

/**
 * Approach: Ordered dictionary
 * Pseudocode:
 *   function properties:
 *     capacity, keyMap (Map)
 *
 * get (key):
 * if keyMap doesn't contain key, return -1
 * value variable to retrieve value from keyMap
 * delete key
 * set key and value on keyMap again (at the end) such that
 * is marked as recently used
 *
 * put (key, value):
 * if keyMap contains key
 *   delete key from keyMap
 *   set key and value on keyMap again (at the end)
 * if keyMap size is equal to capacity
 *   evictLRU
 *
 * evictLRU:
 * leastUsedKey variable to retrieve least recently used key
 * delete leastUsedKey from keyMap
 */

/**
 *
 * @param {*} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.keyMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.keyMap.has(key)) {
    return -1;
  }

  const value = this.keyMap.get(key);
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
};

LRUCache.prototype.evictLRU = function () {
  const leastUsedKey = this.keyMap.keys().next().value;
  this.keyMap.delete(leastUsedKey);
};
