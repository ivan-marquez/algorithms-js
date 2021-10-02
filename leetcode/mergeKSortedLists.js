/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 */

/**
 * Approach: Reduce and Conquer
 * We don't need to traverse most nodes many times repeatedly.
 * Pseudocode:
 * Pair up K lists and merge each pair
 * Repeat procedure until we get the final sorted linked list.
 */
function merge(left, right) {
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else if (left.val < right.val) {
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}

function helper(lists, start, end) {
  if (start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start + end) / 2, 10);
    const left = helper(lists, start, mid);
    const right = helper(lists, mid + 1, end);

    return merge(left, right);
  }
}

const mergeKLists = function (lists) {
  return helper(lists, 0, lists.length - 1);
};
