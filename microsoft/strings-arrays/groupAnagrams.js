/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 * Approach: Categorize by sorted string
 * Pseudocode:
 * var map to store hash table
 * for each str in strings (i):
 *   var curr to store current string (strs[i])
 *   var sort with curr sorted
 *
 *   if map has sort key:
 *     map[sort].push(curr)
 *   else:
 *     map[sort] = [curr]
 *
 * var result = []
 * for every val in map
 *   result.push(map[val])
 * return result
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

  var result = [];
  for (let val in map) {
    result.push(map[val]);
  }

  return result;
};
