/**
 * Graphs
 *
 * https://cs.slides.com/colt_steele/graphs
 *
 * Description:
 * Collection of nodes and connections between those nodes.
 *
 * Uses:
 * Social Networks
 * Location / Mapping
 * Routing Algorithms
 * Visual Hierarchy
 * File System Optimizations
 * Recommendation Engines (People also watched.., People you might know..)
 *
 * Terminology:
 * Vertex - a node
 * Edge - connection between nodes
 * Weighted / Unweighted - values assigned to distances (edges) between vertices
 * Directed / Undirected - directions assigned to distances (edges) between nodes
 *   Directed: Instagram
 *   Undirected: Facebook (two-way connections)
 */

/**
 * Representing a Graph programmatically
 *
 * Adjacency Matrix / Adjacency List
 *
 * Comparison:
 *
 * Adjacency List:
 * Can take up less space (in sparse graphs - graphs with not too many edges)
 * Faster to iterate over all edges
 * Can be slower to lookup specific edge
 *
 * Ex.
 * {
 *   A: ["B", "F"],
 *   B: ["A", "C"],
 *   C: ["B", "D"],
 *   D: ["C", "E"],
 *   E: ["D", "F"],
 *   F: ["E", "A"]
 * }
 *
 * Adjacency Matrix:
 * Takes up more space (in sparse graphs - graphs with not too many edges) - O(v^2)
 * Slower to iterate over all edges
 * Faster to lookup specific edge
 */

/**
 * Adjacency List (Undirected (two-way) graph)
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adding a Vertex
   *
   * It should add a key to the adjacency list with the name of the vertex
   * and set its value to be an empty array.
   */
  addVertex(vertex) {
    // validation to avoid key override
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * Adding an Edge
   *
   * This function accepts two vertices (v1, v2).
   *
   * The function should find in the adjacency list the key
   * of vertex1 and push vertex2 to the array.
   *
   * Also, it should find in the adjacency list the key of vertex2 and
   * push vertex1 to the array.
   */
  addEdge(v1, v2) {
    // ignoring input validation and checks for simplicity
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  /**
   * Removing an Edge
   *
   * Inputs: v1, v2
   *
   * This function should reassign the key of v1 to be an array that doesn't
   * contain v2.
   *
   * It should also reassign the key of v2 to be an array that doesn't contain
   * v1.
   */
  removeEdge(v1, v2) {
    // ignoring input validation and checks for simplicity
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  /**
   * Removing a Vertex
   *
   * Input: vertex
   *
   * The function should loop as long as there are any other vertices in the adjacency list
   * for that vertex.
   *
   * Inside the loop, call our removeEdge method with the vertex we are removing and any values
   * in the adjacency list for that vertex.
   *
   * Delete the key in the adjacency list for that vertex.
   */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * Graph Traversal
   *
   * https://cs.slides.com/colt_steele/graphs#/44
   *
   * Uses
   * Peer to peer networking
   * Web Crawler
   * Finding closest matches/recommendations
   * Shortest path problems
   *   GPS Navigation
   *   Solving mazes
   *   AI (shortest path to win the game)
   *
   * Approaches:
   * Depth First Search (children first, going deep)
   * Breadth First Search (siblings first, going wide)
   */

  /**
   * DFS Flow:
   * DFS(vertex)
   *   if vertex is empty
   *     return (this is base case)
   *   add vertex to results list
   *   mark vertex as visited
   *   for each neighbor in vertex's neighbors:
   *     if neighbor is not visited:
   *       recursively call DFS on neighbor
   *
   * DFS Flow (detailed):
   * The function accepts a starting node
   * Create list result to be returned at end
   * Create object to keep track of visited nodes
   * Create helper function which accepts a vertex
   *   This helper function should return early if the vertex is empty
   *   The helper function should place the vertex it accepts into the
   *   visited object and push that vertex in result array
   *   Loop over all of the values in the adjacencyList for that vertex
   *     If any of those values have not been visited, recursively Invoke
   *     helper function with that vertex
   * Invoke the helper function with the starting vertex
   */
  DFSRecursive(start) {
    var result = [];
    var visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList.forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });

      return result;
    })(start);
  }

  /**
   * Flow:
   * let S be a stack
   * S.push(start)
   * while S is not empty
   *   vertex = S.pop();
   *   if vertex is not labeled as discovered:
   *     visit vertex (add to result list)
   *     label vertex as discovered
   *     for each of vertex's neighbors, N do S.push(N)
   *
   * Flow (detailed):
   * Function accepts starting node
   * Create a stack to keep track of vertices
   * Create list result to be returned at end
   * Create an object to keep track of visited vertices
   * Add starting vertex to stack, and mark as visited
   * While the stack has something in it:
   *   Pop the next vertex from the stack
   *   If that vertex hasn't been visited yet:
   *      Mark as visited
   *      Add to result list
   *      Push all of its neighbors into the stack
   * Return result array
   */
  DFSIterative(start) {
    var visited = {};
    var result = [];
    var stack = [start];

    visited[start] = true;

    var currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * BFS Flow:
   * This function should accept a starting vertex
   * Create a queue and enqueue the starting vertex
   * Create array to store the nodes visited
   * Create an object to keep track of nodes visited
   * Mark starting vertex as visited
   * Loop while there is anything in the queue
   *   dequeue from queue and push it into the nodes visited array
   *   loop through each vertex in the adjacency list of current vertex
   *     if it's not inside the object that stores nodes visited:
   *       mark as visited
   *       enqueue vertex
   *   return visited nodes array
   */
  BFS(start) {
    var queue = [start];
    var visited = {};
    var result = [];

    visited[start] = true;

    var currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Sample code
var g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

/**
 *     A
 *   /   \
 *  /     \
 * B       C
 *  \     /
 *   D---E
 *    \ /
 *     F
 */
