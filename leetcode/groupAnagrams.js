/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

/**
 * Approach: Categorize by sorted string
 * Pseudocode:
 * var map to store hash table
 * for each string in strings:
 *   var current to get current string (strings[i])
 *   var sort with sorted string
 *   if sorted string key is already present
 *     push curr in map[sort]
 *   else
 *     assign [curr] to map[sort]
 *
 * var arr to store result array
 * for each value in map
 * push map[value] in arr
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  var map = [];

  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let sort = curr.split("").sort().join("");

    if (map[sort] !== undefined) {
      map[sort].push(curr);
    } else {
      map[sort] = [curr];
    }
  }

  var a = [];
  for (let val in map) {
    a.push(map[val]);
  }

  return a;
};
