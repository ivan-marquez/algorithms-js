/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

/**
 * Approach: Recursion
 * Pseudocode:
 * if no root, return true
 * if min has value and root.val is less than or eq to min.val, return false
 * if max has value and root.val is greater than or eq to max.val, return false
 *
 * return function(root.left, min, root) && function(root)
 */

const isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, root.val, max) &&
    isValidBST(root.right, min, root.val)
  );
};
