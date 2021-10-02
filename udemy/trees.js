/**
 * Trees
 *
 * Description
 * Data structure that consists of nodes in a parent / child relationship
 *
 * List comparison
 * Unlike lists, trees are nonlinear
 *
 * Terminology
 * Root - the top node in a tree
 * Child - a node directly connected to another ode when mobing away from the Root
 * Parent - the converse notion of a child
 * Siblings - a group of nodes with the same parent
 * Leaf - a node with no children
 * Edge - the connection between one node and another
 *
 * Uses
 * HTML DOM
 * Network Routingd
 * Abstract Sintax Tree (programming languages)
 * Artificial Intelligence
 * Folders in Operating Systems
 * Computer File Systems
 * JSON
 */

/**
 * Binary Trees
 *
 * Description
 * A tree that can have at most two children
 */

/**
 * Binary Search Trees
 * A binary tree that are sorted in a particular way
 *
 * How BSTS Work
 * Every parent node has at most two children
 * Every node to the left of a parent node is always less than the parent
 * Every node to the right of a parent node is always greater than the parent
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Complexity: O(log n)
  insert(val) {
    var newNode = new Node(val);

    if (this.root == null) {
      this.root = newNode;

      return this;
    }

    var current = this.root;

    while (true) {
      // avoid duplicates
      if (val === current.value) {
        return undefined;
      }
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Complexity: O(log n)
  find(val) {
    if (this.root === null) {
      return false;
    }

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return !found ? undefined : current;
  }

  // Complexity: O(log n)
  contains(val) {
    if (this.root === null) {
      return false;
    }

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * Breadth First Search
   * Go wide. Traverse across same level children before going down.
   *
   * Steps:
   * Create a queue and a variable to store the values of nodes visited.
   * Place the root node in the queue.
   * Loop as long as there is anything in the queue.
   *   Dequeue a node from the queue and push the value of the node into the
   *   variable that stores the nodes
   *   If there is a left property on the node dequeued - add it to the queue.
   *   If there is a right property on the node dequeued - add it to the queue.
   * Return the variable that stores the values.
   *
   *         10
   *       6    15
   *     3   8     20
   *
   * queue: []
   * visited: [10, 6, 15, 3, 8, 20]
   */
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;

    queue.push(node);

    while (queue.length) {
      // dequeue (take from the beginning)
      node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /**
   * Depth First Search
   * Go deep. Go down to the end of each branch.
   *
   * Approaches:
   *
   * In-order (left, node, right)
   * Pre-order (node, left, right)
   * Post-order (left, right, node)
   *
   * Pre-order Steps:
   * Create a variable to store the values of nodes visited
   * Store the root of the BST is a variable called current
   * Write a helper function which accepts a node
   *   Push the value of the node to the variable that stores the values
   *   If the node has a left property, call the helper function with the left property on the node
   *   If the node has a right property, call the helper function with the right property on the node
   * Invoke the helper function with the current variable
   * Return the array of values
   *
   *         10
   *      6      15
   *    3   8        20
   *
   * Pre-order: [10, 6, 3, 8, 15, 20]
   */
  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }

  /**
   * Post-order Steps:
   * Create a variable to store the values of nodes visited
   * Store the root of the BST is a variable called current
   * Write a helper function which accepts a node
   *   If the node has a left property, call the helper function with the left property on the node
   *   If the node has a right property, call the helper function with the right property on the node
   *   Push the value of the node to the variable that stores the values
   * Invoke the helper function with the current variable
   * Return the array of values
   *
   *         10
   *      6      15
   *    3   8       20
   *
   * Post-order: [3, 8, 6, 20, 15, 10]
   */
  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  /**
   * In-order Steps:
   * Create a variable to store the values of nodes visited
   * Store the root of the BST is a variable called current
   * Write a helper function which accepts a node
   *   If the node has a left property, call the helper function with the left property on the node
   *   Push the value of the node to the variable that stores the values
   *   If the node has a right property, call the helper function with the right property on the node
   * Invoke the helper function with the current variable
   * Return the array of values
   *
   *         10
   *      6      15
   *    3   8       20
   *
   * In-order: [3, 6, 8, 10, 15, 20]
   */
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }
}

/**
 * BFS / DFS Use Cases:
 *
 * Which is better? It depends
 *
 * If the tree has lots of nodes, the queue in BFS would grow significantly.
 * It's better to use DFS to have fewer nodes to keep track of.
 *
 * DFS In-order: used commonly with BST's because you get all nodes in the tree
 * in their underlying order:
 *
 *
 *         10
 *      6      15
 *    3   8       20
 *
 * In-order: [3, 6, 8, 10, 15, 20]
 *
 * DFS Pre-order: can be used to "export" a tree structure so that it is easily
 * reconstructed or copied.
 */

/**
 * Trees Recap:
 *
 * Trees are non-linear data structures that contain a root and child nodes.
 *
 * Binary Trees can have values of any type, but at most two children for each parent.
 *
 * Binary Search Trees are a more specific version of binary trees where every node to
 * the left of a parent is less that it's value and every node to the right is greater.
 * In other words, Binary Search Trees contain comparable data.
 *
 * We can search through Tees using BFS and DFS (Pre-order, In-order, Post-order)
 */

/**
 * Binary Heap
 * Similar to binary search tree, but with some different rules.
 *
 * In a Max Binary Heap, parent nodes are always larger than child nodes. In a
 * Min Binary Heap, parent nodes are always smaller than child nodes.
 */

/**
 * Max Binary Heap
 * Each parent has at most two child nodes
 * The value of each parent node is always greater than its child nodes
 * In a max binary heap the parent is greater than the children, but ther are
 * no guarantees between sibling nodes.
 * A binary heap is as compact as possible. All the children of each node are as full
 * as they can be and left children are filled out first.
 *
 * Storing Heaps
 * For any index of an array n, the left child is stored at 2n + 1 and the right child is at 2n + 2!!
 *
 * Similarly, for any child node at index n, its parent is at index (n-1)/2 floored (remove decimal)
 */
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Insert
   * Push the value into the values property on the heap
   * Bubble up:
   *   Create avariable called index which is the length of the values property - 1
   *   Create a variable called parentIndex which is the floor of (index - 1)/2
   *   Keep looping as long as the values element at the parentIndex is less than the
   *   values element at the child index
   *     Swap the value of the values element at the parentIndex with the value of the element property
   *     at the child index
   *     Set the index to be the parentIndex, and start over
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    var idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  /**
   * ExtractMax (remove)
   * Swap the first value in the values property with the last one
   * Prop from the values property, so you can return the value at the end
   * Have the new root "sink down" to the correct spot
   *   Your parent index starts at 0 (the root)
   *   Find the index of the left child: 2 * index + 1 (make sure it's not out of bounds)
   *   Find the index of the right child: 2 * index + 2 (make sure it's not out of bounds)
   *   If the left or right child is greater than the element, swap. If both left and right
   *   children are larger, swap with the largest child
   *   The child index you swapped to now becomes the new parent index
   *   Keep looping and swapping until neither child is larger than the element
   *   Return the old root
   */
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

/**
 * Priority Queue
 * Data structure where each element has a priority assigned to it. Elements with higher
 * priorities are served before elements with lower priorities.
 *
 * Pseudocode:
 *
 */
class Nodev2 {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Nodev2(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    var idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
