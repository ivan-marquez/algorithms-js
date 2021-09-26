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
 * Network Routing
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
