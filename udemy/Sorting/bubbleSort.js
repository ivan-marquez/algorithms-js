/**
 * Bubble Sort
 *
 * A sorting algorithm where the largest values bubble up to the top.
 * Example:
 * [5, 3, 4, 1, 2]
 * [3, 5, 4, 1, 2]
 * [3, 4, 5, 1, 2]
 * [3, 4, 1, 5, 2]
 * [3, 4, 1, 2, 5]
 * ...
 */
// Swapping functions
// ES5
function swap(arr, idx1, idx2) {
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * Start looping from with a variable called i from the end of the array
 * towards the beginning.
 * Start an inner loop with a variable called j from the beginning until i - 1.
 * If arr[j] is greater than arr[j+1], swap those two values.
 * Return the sorted array.
 */
function bubbleSort(arr) {
  // optimization to avoid traversing the array when it's already sorted.
  // good for arrays where data is almost sorted from the start.
  var noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

// ES2015
function bubbleSort(arr) {
  // optimization to avoid traversing the array when it's already sorted.
  // good for arrays where data is almost sorted from the start.
  var noSwaps;

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([37, 45, 29, 8]);
