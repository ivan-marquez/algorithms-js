/**
 * Hash Tables
 *
 * Used to store key-value pairs
 *
 * They are like arrays, but the keys aren't ordered
 *
 * Unlike arrays, hash tables are fast for all of the following ops:
 *   finding values
 *   adding new values
 *   removing values
 *
 * Complexity:
 * Insert:    O(1)
 * Deletion:  O(1)
 * Access:    O(1)
 */

/**
 * What makes a good hash?
 *
 * Fast (i.e. constant time)
 * Doesn't cluster outputs at specific indices, but distributes uniformly
 * Deterministic (same input yields same output)
 */

/**
 * Simple hash function
 */

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}

/**
 * Problems with this approach:
 *
 * Only hashes strings (out of scope of this training)
 * Not constant time - linear in key length (0(n))
 * Could be a little more random
 *
 * Hash function v2
 */

function hashV2(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

/**
 * NOTE:
 * The prime number in the hash is helpful in spreading out
 * the keys more uniformly.
 *
 * It's also helpful if the array that you're putting values
 * into has a prime length.
 */

/**
 * Dealing with Collisions
 *
 * Separate Chaining:
 * With separate chaining, at each index in our array we store values using a more
 * sophisticated data structure (e.g. an array or a linked list). This allows us to
 * store multiple key-value pairs at the same index.
 *
 * Linear Probing:
 * With linear probing, when we find a collision, we search through the array to find
 * the next empty slot. Unlike with separate chaining, this allows us to store a single
 * key-value at each index.
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Accepts a key and a value
   * Hashes the key
   * Stores the key-value pair in the hash table
   * array via separate chaining
   */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return index;
  }

  /**
   * Accepts a key
   * Hashes the key
   * Retrieves they key-value pair in the hash table
   * If the key isn't found, returns undefined
   */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  /**
   * Loops through the hash table array and returns an array of
   * keys in the table
   */
  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }

  /**
   * Loops through the hash table array and returns an array of
   * values in the table
   */
  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }
}
