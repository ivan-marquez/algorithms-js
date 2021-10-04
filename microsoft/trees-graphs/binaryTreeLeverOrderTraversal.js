/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Example:
 * Input: [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * Approach: Breadth First Search
 * Pseudocode:
 * if root null, return []
 * var queue to store queue
 * var result to return result
 *
 * while queue is not empty
 *   var qlen to store queue.length
 *   var node to store first item in queue
 *   var row to store node val
 *
 *   loop qlen times:
 *     if node left has value, push node left to queue
 *     if node right has value, push node right to queue
 *   push row into result
 *
 * return result
 */
const levelOrder = function (root) {
  if (!root) return [];

  var queue = [root];
  var result = [];

  while (queue.length) {
    let qLen = queue.length;
    let node = null;
    let row = [];

    for (let i = 0; i < qLen; i++) {
      console.log(qLen);
      node = queue.shift();
      row.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(row);
  }

  return result;
};
