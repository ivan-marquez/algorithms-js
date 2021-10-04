// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.val = value;
//     this.next = this.prev = null;
//     this.freq = 1;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = new Node(null, null);
//     this.tail = new Node(null, null);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }

//   insertHead(node) {
//     node.prev = this.head;
//     node.next = this.head.next;
//     this.head.next.prev = node;
//     this.head.next = node;
//   }

//   removeNode(node) {
//     let prev = this.head;
//     node.next = this.head.next;
//     this.head.next.prev = node;
//     this.head.next = node;
//   }

//   removeTail() {
//     let node = this.tail.prev;
//     this.removeNode(node);
//     return node.key;
//   }

//   isEmpty() {
//     return this.head.next.val === null;
//   }
// }

// var dll = new DoublyLinkedList();
// console.log(dll);

// class Solution {
//   //Function to find maximum of each subarray of size k.
//   max_of_subarrays(arr, n, k) {
//     if (n > arr.length) return null;

//     var max = -Infinity;
//     var windowStart = 0;
//     var result = [];

//     for (let windowEnd = 0; windowEnd < n; windowEnd++) {
//       max = Math.max(...arr.slice(windowStart, windowEnd + 1));

//       if (windowEnd >= k - 1) {
//         result.push(max);
//         windowStart += 1;
//       }
//     }

//     return result;
//   }
// }

// var sol = new Solution();
// console.log(sol.max_of_subarrays([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 10, 4));
// console.log(sol.max_of_subarrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 9, 3));

var sortColors = function (nums) {
  var map = {};
  var result = [];

  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  for (let key in map) {
    while (map[key] > 0) {
      map[key] = map[key] - 1;
    }
  }

  return result;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
