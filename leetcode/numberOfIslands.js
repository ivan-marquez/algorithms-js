/**
 * Given an m x n 2D binary grid which represents a map of '1's
 * (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent
 * lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 */

/**
 * Pseudocode:
 * islandCounter variable with number of islands
 * loop through grid rows
 *   loop through grid columns
 *     if current position is land
 *       increment island counter
 *       DFS(grid, row, column)
 * return islandCounter
 *
 * Declare DFS function (arguments: grid, row, column)
 * check if row or column indices are out of bounds, or
 * if the current position is water
 *   return;
 * mark current position as visited
 * recursion: check on all directions
 * DFS(grid, row - 1, column) // up
 * DFS(grid, row + 1, column) // down
 * DFS(grid, row, column - 1) // left
 * DFS(grid, row, column + 1) // right
 */

var numIslands = function (grid) {
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

function DFS(grid, row, column) {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[0].length ||
    grid[row][column] === "0"
  ) {
    return;
  }

  grid[row][column] = "0";

  DFS(grid, row - 1, column); // up
  DFS(grid, row + 1, column); // down
  DFS(grid, row, column - 1); // left
  DFS(grid, row, column + 1); // right
}
