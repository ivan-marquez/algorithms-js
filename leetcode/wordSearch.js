/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
 * horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

/**
 * Pseudo:
 * loop through grid rows
 *   loop through grid columns
 *     check for the first letter match in the board
 *       check if word is completely matched using dfs function
 *         return true
 * return false
 *
 * declare DFS function (arguments: board, word, row, column, wordIndex)
 * check if the word is completely matched
 *   return true
 *
 * check if row and column indices are out bounds or if the letter
 * at the board is not equal to the letter of the given word
 *   return false
 *
 * backtracking:
 * store the current position value in a temp variable
 * mark the current position as visited
 *
 * invoke dfs function on all neighbors
 * result variable to store value from all invocations:
 *   dfs(board, word, row + 1, column, wordIndex + 1) // up
 *   dfs(board, word, row - 1, column, wordIndex + 1) // down
 *   dfs(board, word, row, column + 1, wordIndex + 1) // right
 *   dfs(board, word, row, column - 1, wordIndex + 1) // left
 *
 * backtracking: reset the position value with temp variable
 *
 * return result
 */

const exist = function (board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[0].length; ++column) {
      // check for the first letter match in the board
      if (board[row][column] === word[0]) {
        if (wordSearch(board, row, column, word, 0)) {
          // if word is completely matched
          return true;
        }
      }
    }
  }

  return false;
};

// DFS
function wordSearch(board, row, column, word, wordIndex) {
  // when the word is completely matched
  if (wordIndex === word.length) {
    return true;
  }

  // if indices are out of bounds or if the letter at the board is not
  // equal to the letter of the given word, return false
  if (
    row < 0 ||
    row >= board.length ||
    column < 0 ||
    column >= board[0].length ||
    board[row][column] !== word[wordIndex] ||
    board[row][column] === "$"
  ) {
    return false;
  }

  // storing the value on the board at the indices in a temp variable to reset the value
  const temp = board[row][column];
  // mark position as visited
  board[row][column] = "$";

  // check in all 4 directions
  const result =
    wordSearch(board, row - 1, column, word, wordIndex + 1) || // up
    wordSearch(board, row + 1, column, word, wordIndex + 1) || // down
    wordSearch(board, row, column - 1, word, wordIndex + 1) || // left
    wordSearch(board, row, column + 1, word, wordIndex + 1); // right

  board[row][column] = temp; // backtracking - resetting the value

  return result;
}
