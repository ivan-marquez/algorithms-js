/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or
 * vertically. You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * Approach: DFS
 * Pseudocode:
 * var islandCounter to store amount of islands
 * loop through every row
 *   loop through every column
 *     if grid[row][column] is land
 *        islandCounter++
 *        DFS(grid, row, column)
 *
 * DFS(grid, row, column)
 * if row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || grid[row][column] is water
 *   return false
 *
 * mark current position as visited by assigning "0"
 * grid[row][column] = "0"
 *
 * DFS() // up
 * DFS() // down
 * DFS() // left
 * DFS() // right
 */
const numIslands = function (grid) {
  const DFS = (grid, row, column) => {
    if (
      row < 0 ||
      row >= grid.length ||
      column < 0 ||
      column >= grid[0].length ||
      grid[row][column] === "0"
    ) {
      return false;
    }

    grid[row][column] = "0";

    DFS(grid, row + 1, column); // up
    DFS(grid, row - 1, column); // down
    DFS(grid, row, column - 1); // left
    DFS(grid, row, column + 1); // right
  };

  var islandCounter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "1") {
        islandCounter++;
        DFS(grid, row, column);
      }
    }
  }

  return islandCounter;
};
