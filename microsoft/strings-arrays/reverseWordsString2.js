/**
 * Given a character array s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.
 * Your code must solve the problem in-place, i.e. without allocating extra space.
 */

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify s in-place instead.
 * Pseudocode:
 * Reverse array
 * var start to store the start of a word (default: 0)
 * while start < str length:
 *   var endIdx to store end word index (findWordEnd(idx))
 *   reverseWord(start, endIdx - 1)
 *   start = endIdx + 1
 *
 * findWordEnd(idx)
 * if idx is eq to " " or s.length
 *   return idx
 * else
 *   return FindWordEnd(idx + 1)
 *
 * reverseWord(left, right)
 * if left is greater than or eq to right
 *   return
 * swap s[left] and s[right] values
 * reverseWord(left + 1, right - 1)
 */
const reverseWords = function (str) {
  str.reverse();

  const findWordEnd = (idx) => {
    return str[idx] === " " || idx === str.length ? idx : findWordEnd(idx + 1);
  };

  const reverseWord = (left, right) => {
    if (left >= right) return;

    // const tmp = str[left];
    // str[left] = str[right];
    // str[right] = tmp;
    [str[left], str[right]] = [str[right], str[left]];

    reverseWord(left + 1, right - 1);
  };

  var start = 0;
  while (start < str.length) {
    let endIdx = findWordEnd(start);
    reverseWord(start, endIdx - 1);
    start = endIdx + 1;
  }
};
