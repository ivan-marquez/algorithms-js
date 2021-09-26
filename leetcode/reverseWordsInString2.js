/**
 * Given a character array s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s
 * will be separated by a single space.
 *
 * Your code must solve the problem in-place, i.e. without allocating extra space.
 */

/**
 * Pseudocode:
 * reverse the array
 * var start to store position starting at 0
 * while start is less than the array's length
 *   end variable to store the last index of each word using findWordEnd function (args: idx)
 *   call reverseWord function (args: start, end - 1) to reverse each word
 *   assign end + 1 to start
 *
 * findWordEnd function (idx)
 * if idx of array is empty or if idx is equal to string length
 *   return idx
 * else
 *   return findWordEnd(idx + 1)
 *
 * reverseWord function (left, right)
 * if left is >= right, return
 * swap left and right values
 * call reverseWord(left + 1, right + 1)
 */

const reverseWords = function (str) {
  str.reverse();

  const findWordEnd = (idx) => {
    return str[idx] === " " || idx === str.length ? idx : findWordEnd(idx + 1);
  };

  const reverseWord = (left, right) => {
    if (left >= right) return;

    const tmp = str[left];
    str[left] = str[right];
    str[right] = tmp;

    reverseWord(left + 1, right - 1);
  };

  let start = 0;

  while (start < str.length) {
    const end = findWordEnd(start);
    reverseWord(start, end - 1);
    start = end + 1;
  }
};
