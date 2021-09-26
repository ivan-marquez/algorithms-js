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
 */
var goodNodes = function (root) {
  /*
   * Approach: DFS
   * Visit each node once and compare with max num using recursion.
   *
   * Pseudocode:
   * goodNodesCount variable to store amount of good nodes.
   * Define DFS function that takes a node and a number representing the
   * greatest value from root node to current node (maxNum).
   * In DFS function:
   * if max <= node.val:
   *  goodNodesCount++
   * Call DFS function passing child node and maximum between node.val
   * and max (for all node's children).
   * Call DFS(root, root.val)
   * Return goodNodesCount.
   */
  var goodNodesCount = 0;

  let dfs = (node, maxNum) => {
    if (maxNum <= node.val) {
      goodNodesCount++;
    }

    node.left && dfs(node.left, Math.max(node.val, maxNum));
    node.right && dfs(node.right, Math.max(node.val, maxNum));
  };

  dfs(root, root.val);

  return goodNodesCount;
};
