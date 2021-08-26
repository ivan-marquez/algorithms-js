/**
 * Built-in JavaScript Sorting
 *
 * The built-in sort method accepts an optional comparator function.
 * You can use this comparator function to tell JavaScript how you want it to sort.
 * The comparator looks at pairs of elements (a and b), determines their sort order based
 * on the return value.
 *   If it returns a negative number, a should come before b
 *   If it returns a positive number, a should come after b
 *   If it returns 0, a and b are the same as far as the sort is concerned
 */
function numberCompare(num1, num2) {
  return num1 - num2; // ascending order
}

[6, 4, 15, 10].sort(numberCompare);

function compareByLength(str1, str2) {
  return str1.length - str2.length; // compare by length ascending
}

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLength);

// array with random numbers for sorting practice
var data = Array.apply(null, { length: 10 }).map(Function.call, Math.random);

// Sorting Algorithms Animations
// https://www.toptal.com/developers/sorting-algorithms
// https://visualgo.net/en/sorting
