/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
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
 * @return {boolean}
 * Approach: Recursion (DFS)
 * DFS (p, q)
 * if p is null and q is null, return true
 * if p is null or q is null, return false
 * if p val is not eq to q val, return false
 *
 *  return DFS(q.left, q.right) && DFS(q.right, q.left)
 */
const isSymmetric = function (root) {
  const DFS = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return DFS(p.left, q.right) && (q.left, p.right);
  };

  return DFS(root, root);
};
