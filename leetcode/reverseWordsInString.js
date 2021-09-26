/**
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will
 * be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between
 * two words. The returned string should only have a single space separating the
 * words. Do not include any extra spaces.
 */

/**
 * Pseudocode:
 * Split the string by space
 * Filter words not equal to empty
 * Reverse array
 * Join array with space character
 */

var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ");
};
