/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
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
 * @return {ListNode}
 * Approach: Iterative:
 * var curr to store head initially
 * var prev to store prev node (null initially)
 *
 * while there's a current node:
 *   tmp = curr.next
 *   curr.next = prev
 *   prev = curr
 *   curr = tmp
 *
 */
const reverseList = function (head) {
  var curr = head;
  var prev = null;

  while (curr) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
};

const reverseListV2 = function (head) {
  var prev = null;

  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Approach: Recursion:
 *
 *
 */
const reverseListV3 = function (head) {
  if (!head) return null;

  const reverse = (node, prev) => {
    const next = node.next;
    node.next = prev;
    if (!next) return node;
    return reverse(next, node);
  };

  return reverse(head, null);
};
