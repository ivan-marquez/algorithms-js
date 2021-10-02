/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 * Approach: Recursion
 * Pseudocode:
 * var result to store result and return
 * traverse(root)
 * return result
 *
 * traverse(node)
 * if node is null, return
 * traverse(node.left)
 * result.push(node)
 * traverse(node.right)
 */
const inorderTraversal = function (root) {
  const result = [];

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };

  traverse(root);
  return result;
};
