const { performance } = require('perf_hooks');

const { insertionSort, printArray } = require('./insertionSort')();
const binarySearch = require('./binarySearch');
const { addUpToV1, addUpToV2 } = require('./timingCode');
const { root, traverse } = require('./breadthFirstSearch');
const {
  findAverageOfSubArrayV1,
  findAverageOfSubArrayV2,
  maxSubArrayOfSizeKV1,
  maxSubArrayOfSizeKV2,
  smallestSubArrayWithGivenSum
} = require('./slidingWindow');

var arr = [7, 6, 5, 4, 3];
insertionSort(arr);
printArray(arr);

arr = [1, 3, 4, 6, 7, 101, 1009];
console.log(binarySearch(0, arr.length - 1, 1009, arr));
console.log(binarySearch(0, arr.length - 1, -1009, arr));
console.log(binarySearch(0, arr.length - 1, 5, arr));
console.log(binarySearch(0, arr.length - 1, 6, arr));

console.log(findAverageOfSubArrayV1(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
console.log(findAverageOfSubArrayV2(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));

console.log(maxSubArrayOfSizeKV1(3, [2, 1, 5, 1, 3, 2]));
console.log(maxSubArrayOfSizeKV2(3, [2, 1, 5, 1, 3, 2]));

console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 8]));
console.log(smallestSubArrayWithGivenSum(8, [3, 4, 1, 1, 6]));

var t1 = performance.now();
addUpToV1(1000000000);
var t2 = performance.now();

console.log(`V1 time elapsed: ${(t2 - t1) / 1000} seconds.`);

t1 = performance.now();
addUpToV2(1000000000);
t2 = performance.now();

console.log(`V2 time elapsed: ${(t2 - t1) / 1000} seconds.`);

function nestedLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log([arr[i], arr[j]]);
    }
  }
}

nestedLoop([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
