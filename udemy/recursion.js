/**
 * Recursion
 *
 * A process (function) that calls itself.
 * Two essential parts ofa recursive function:
 * Base case (to break recursion)
 * Different Input
 */

/**
 * Examples
 */
function countDown(num) {
  // base case to break recursion loop
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num); // different input (after num--)
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/**
 * Factorial iteratively
 */
function factorialV1(num) {
  var total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

/**
 * Factorial recursively
 */
function factorialV2(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}

/**
 * Helper Method Recursion
 */

/**
 * Example
 */
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

function collectOddValues(arr) {
  var result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

/**
 * Pure Recursion
 */

/**
 * Examples
 */
function collectOddValuesV2(arr) {
  var newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesV2(arr.slice(1))); // slice removes 1st item

  return newArr;
}
