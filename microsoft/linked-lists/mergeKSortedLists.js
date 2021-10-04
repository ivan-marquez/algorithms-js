/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 *
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * Approach: Divide and Conquer (we don't need to traverse most nodes many times repeatedly)
 * Pseudocode:
 *
 */
const mergeKLists = function (lists) {
  if (!lists || !lists.length) return null;

  var arr = [];
  var result = new ListNode(-1);

  lists.forEach((list) => {
    let curr = list;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
  });

  var curr = result;
  arr
    .sort((a, b) => a - b)
    .forEach((n) => {
      let temp = new ListNode(n);
      curr = curr.next;
    });

  return result.next;
};
