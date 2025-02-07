// Valid Sudoku / medium
// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Example 1:
// Input: board = 
// [["1","2",".",".","3",".",".",".","."],
// ["4",".",".","5",".",".",".",".","."],
// [".","9","8",".",".",".",".",".","3"],
// ["5",".",".",".","6",".",".",".","4"],
// [".",".",".","8",".","3",".",".","5"],
// ["7",".",".",".","2",".",".",".","6"],
// [".",".",".",".",".",".","2",".","."],
// [".",".",".","4","1","9",".",".","8"],
// [".",".",".",".","8",".",".","7","9"]]

// Output: true

class Solution {
	/**
	 * @param {character[][]} board
	 * @return {boolean}
	 */
	isValidSudoku(board) {
			for (let row = 0; row < 9; row++) {
					let seen = new Set();
					for (let i = 0; i < 9; i++) {
							if (board[row][i] === '.') continue;
							if (seen.has(board[row][i])) return false;
							seen.add(board[row][i]);
					}
			}
			
			for (let col = 0; col < 9; col++) {
					let seen = new Set();
					for (let i = 0; i < 9; i++) {
							if (board[i][col] === '.') continue;
							if (seen.has(board[i][col])) return false;
							seen.add(board[i][col]);
					}
			}
			
			for (let square = 0; square < 9; square++) {
					let seen = new Set();
					for (let i = 0; i < 3; i++) {
							for (let j = 0; j < 3; j++) {
									let row = Math.floor(square / 3) * 3 + i;
									let col = (square % 3) * 3 + j;
									if (board[row][col] === '.') continue;
									if (seen.has(board[row][col])) return false;
									seen.add(board[row][col]);
							}
					}
			}
			
			return true;
	}
}