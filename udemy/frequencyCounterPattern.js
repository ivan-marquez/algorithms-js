/**
 * Frequency Counter Pattern
 */

/**
 * Problem:
 * Write a function that accepts two arrays. The function should return true if every
 * value in the array has it's corresponding value squared in the second array. The
 * frequency of values must be the same.
 */
// same([1, 2, 3], [4, 1, 9]) => true
// same([1, 2, 3], [1, 9]) => false
// same([1, 2, 3], [4, 4, 1]) => false (must have 1:1)
function same(arr1, arr2) {
  /**
   * #bruteForce
   * input validation: if the length of arrays is diff, return false.
   * loop through arr1
   *   check if index of arr1[i] ** 2 equals -1
   *     return false
   *   remove squared value from arr2
   * return true
   * complexity: O(n^2)
   */
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let idx = arr2.indexOf(arr[i] ** 2); // square root
    if (idx === -1) {
      return false;
    }
    arr2.splice(idx, 1);
  }

  return true;
}

function samev2(arr1, arr2) {
  /**
   *  input validation: if the length of arrays is diff, return false.
   *  initialize two objects (obj1, obj2) where:
   *    obj1 will store arr1 values as keys and amount of times in arr1 as value
   *    obj2 will store arr2 values as keys and amount of times in arr2 as value
   *  loop through arr1: val
   *    assign val as key or increment amount of times val exists in arr1
   *  loop through arr2: val
   *    assign squared val as key or increment amount of times val exists in arr2
   *  loop through obj1: k
   *    check if k^2 is not a key in obj2
   *      return false
   *    check if obj2[k^2] is not equal to obj[key]
   *      return false
   *  return true
   * complexity: O(3n) => O(n)
   */
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key of obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }

    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

function validAnagram(str1, str2) {
  /**
   * Req:
   * determine if the second string is an anagram of the first.
   * note: there has to be a 1:1 relationship between every char
   *
   * Edge cases:
   * no whitespaces
   * no caps (all lowercase)
   * no alphanumerics
   *
   * Ex:
   * validAnagram('', '') => true
   * validAnagram('aaz', 'azz') => false
   *
   * Flow:
   * input validation: if str1 and str2 don't have the same length, return false
   * initialize lookup object (to track letters and amount of times letter exists)
   * for each letter in str1
   *   either assign as a new key with value 1, or increment value by 1
   * for each letter in str2
   *   if letter doesn't exists in lookup or equal to 0, return false
   *   else, subtract 1 in lookup key
   * return true
   */
  if (str1.length !== str2.length) {
    return false;
  }

  var lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = str1[i];
    // increase or initialize
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

module.exports = {
  same,
  samev2
};
