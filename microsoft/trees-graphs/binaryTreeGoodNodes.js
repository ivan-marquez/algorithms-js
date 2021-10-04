/**
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X
 * there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
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
 * @return {number}
 * Approach: DFS
 * Visit every node and compare with max num using recursion
 *
 * Pseudocode:
 * var goodNodesCount
 *
 * dfs(node, maxNum)
 * if maxNum <= node.val
 * goodNodesCount++
 *
 * if (node.left) dfs(node.left, max between node.val and maxNum)
 * if (node.righ) dfs(node.right, max between node.val and maxNum)
 *
 * dfs(root, root.val)
 * return goodNodesCount
 */
const goodNodes = function (root) {
  var goodNodesCount = 0;

  const dfs = (node, maxNum) => {
    if (maxNum <= node.val) goodNodesCount++;

    node.left && dfs(node.left, Math.max(maxNum, node.val));
    node.right && dfs(node.right, Math.max(maxNum, node.val));
  };

  dfs(root, root.val);
  return goodNodesCount;
};
