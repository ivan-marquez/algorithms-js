/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Approach: Basic math with carry
 * Pseudocode:
 * newNode (ListNode())
 * curr = newNode
 * carry = 0
 *
 * while there's an l1 or an l2, or carry greater than 0
 *   a = l1 ? l1.val : 0
 *   b = l2 ? l2.val : 0
 *
 *   Compute new digit
 *   sum = a + b + carry
 *   carry = Math.floor(sum / 10)
 *   curr.next = ListNode(sum % 10)
 *
 *   Update pointers
 *   curr = curr.next
 *   if (l1) l1 = l1.next
 *   if (l2) l2 = l2.next
 *
 * return newNode.next
 *
 */
const addTwoNumbers = function (l1, l2) {
  var newNode = new ListNode();
  var curr = newNode;
  var carry = 0;

  while (l1 || l2 || carry > 0) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    // compute new digit
    let sum = v1 + v2 + carry; // = 39
    carry = Math.floor(sum / 10); // 3
    curr.next = new ListNode(sum % 10); // 9

    // update pointers
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return newNode.next;
};
