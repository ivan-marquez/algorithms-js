/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The most significant digit comes first and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: l1 = [7,2,4,3], l2 = [5,6,4]
 * Output: [7,8,0,7]
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
 */
const addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  var newNode = new ListNode();
  var curr = newNode;
  var carry = 0;

  while (l1 || l2 || carry > 0) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    let sum = v1 + v2 + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);

    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return reverseList(newNode.next);
};

const reverseList = (head) => {
  if (!head) return null;
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
