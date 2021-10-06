/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 * Example:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Pseudocode:
 * if not head return
 * get length of the list
 * length = getLength()
 * var 2 vars (left and right) referrencing the list
 * left = head
 * right = head
 *
 * loop until k, but use mod for the edge case where
 * length is smaller than k
 * loop until k % length
 *    right = right.next
 *
 * if right !== null
 *   while right.next
 *     left = left.next
 *     right = right.next
 *   right.next = head
 *   head = left.next
 *   left.next = null
 *
 * return head
 *
 *
 */
const rotateRight = function (head, k) {
  if (!head) return;

  const length = getLength(head);
  var left = head;
  var right = head;

  for (let i = 0; i < k % length; i++) {
    right = right.next;
  }

  if (right) {
    while (right.next) {
      left = left.next;
      right = right.next;
    }

    right.next = head;
    head = left.next;
    left.next = null;
  }

  return head;
};

const getLength = function (node) {
  var length = 0;

  while (node) {
    length++;
    node = node.next;
  }

  return length;
};
