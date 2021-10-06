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
 * Approach: Sorting
 * Pseudocode:
 * if lists is null or empty, return null
 * place all values in an array
 * result = new ListNode()
 * curr = result
 * sort the array (asc)
 * for each item in array
 *   create new node with item value
 *   curr.next = new node
 *
 * return result.next;
 */
const mergeKLists = function (lists) {
  if (!lists || !lists.length) return null;

  var arr = [];

  for (let list of lists) {
    let curr = list;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
  }

  arr.sort((a, b) => a - b);

  var newNode = new ListNode();
  var curr = newNode;

  for (let val of arr) {
    curr = new ListNode(val);
    curr = curr.next;
  }

  return curr.next;
};
