/**
 * Given an array of characters chars, compress it using the following algorithm:
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 *
 * The compressed string s should not be returned separately, but instead,
 * be stored in the input character array chars.
 *
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 */
const compress = function (chars) {
  let count = 1;
  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        let countArr = count.toString().split("");
        let deletedElem = chars.splice(i - count + 1, count - 1, ...countArr);
        i = i - deletedElem.length + countArr.length;
      }
      count = 1;
    }
  }
};
