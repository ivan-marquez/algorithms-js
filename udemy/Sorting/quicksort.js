/**
 * Quick Sort
 *
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
 * Works by selecting one element (called the pivot) and finding the index where the pivot
 * should end up in the sorted array.
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of
 * the pivot.
 */

/**
 * Pivot Helper
 *
 * In order to implement quick sort, it's useful to first implement a function responsible of arranging
 * elements in an array on either side of a pivot.
 * Given an array, this helper function should designate an element as the pivot.
 * It should then rearrange elements in the array so that all values less than the pivot are moved to the
 * left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
 * The order of elements on either side of the pivot doesn't matter.
 * The helper should do this in place, that is, it should not create a new array.
 * When complete, the helper should return the index of the pivot.
 *
 * Pseudocode:
 * It will help to accept three arguments: an array, a start index, and an end index (these can default to 0
 * and the array length minus 1, respectively).
 * Grab the pivot from the start of the array.
 * Store the current pivot index in a variable (this will keep track of where the pivot should end up).
 * Loop through the array from the start until the end:
 *   If the pivot is greater than the current element, increment the pivot index variable and then swap the
 *   current element with the element at the pivot index.
 * Swap the starting element (i.e. the pivot) with the pivot index.
 * Return the pivot index.
 */
function pivotHelper(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;

  const swap = (array, i, j) => {
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  };

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));

/**
 * Quicksort Pseudocode:
 *
 * Call the pivot helper on the array.
 * When the helper returns to you the updated pivot index, recursively call the pivot
 * helper on the subarray to the left of that index, and the subarray to the right of that
 * index.
 * Your base case occurs when you consider a subarray with less than 2 elements.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
