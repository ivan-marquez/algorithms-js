/**
 * Convert a non-negative integer num to its English words representation.
 */
const numberToWords = function (num) {
  let result = "";

  const billion = Math.floor(num / 1000000000);
  const million = Math.floor((num - billion * 1000000000) / 1000000);
  const thousand = Math.floor(
    (num - billion * 1000000000 - million * 1000000) / 1000
  );
  const rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

  if (num === 0) return "Zero";

  if (num < 20) return map[num];

  if (billion) {
    result += map[billion] + "Billion";
  }

  if (million) {
    result += getHundreds(million) + "Million";
  }

  if (thousand) {
    result += getHundreds(thousand) + "Thousand";
  }

  if (rest) {
    result += getHundreds(rest);
  }

  return result.match(/[A-Z][a-z]+/g).join(" ");
};

function getHundreds(num) {
  let hundred = Math.floor(num / 100);
  let rest = num - hundred * 100;
  let result = "";
  if (hundred !== 0) {
    result += numberToText(hundred) + "Hundred";
  }
  if (rest !== 0) {
    result += numberToText(rest);
  }

  return result;
}

function numberToText(num) {
  if (!map[num]) {
    return getTens(num);
  }
  return map[num];
}

function getTens(num) {
  let tens = Math.floor(num / 10);
  let rest = num - tens * 10;
  return map[tens * 10] + " " + map[rest];
}

let map = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety"
};
