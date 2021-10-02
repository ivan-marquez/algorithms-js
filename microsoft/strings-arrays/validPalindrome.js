/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 */

/**
 * @param {string} s
 * Pseudocode:
 * remove non-alphanumeric chars from s
 * lowercase s
 * compare with reversed string
 *
 * To reverse string:
 * split s into array
 * reverse it
 * join it back with ""
 */
var isPalindrome = function (s) {
  s.replace(/^a-z0-9/gi, "").toLowerCase();

  return s === s.split("").reverse().join("");
};
