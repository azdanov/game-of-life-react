// @flow
import Cell from './Cell';

class GameOfLife {
  constructor(columns: number, rows: number) {
    this.columns = columns;
    this.rows = rows;

    this.init();
  }

  columns = 0;
  rows = 0;
  board = [];

  init() {
    for (let i = 0; i < this.columns; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        if (!this.board[i]) this.board[i] = [];
        this.board[i][j] = new Cell(i, j);
      }
    }
  }

  clear() {
    for (let i = 0; i < this.columns; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        this.board[i][j].newState(0).updatePreviousState();
      }
    }
  }

  generate() {
    for (let i = 0; i < this.columns; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        this.board[i][j].updatePreviousState();
      }
    }

    for (let x = 0; x < this.columns; x += 1) {
      for (let y = 0; y < this.rows; y += 1) {
        // Add up all the states in a 3x3 surrounding grid
        let neighbors = 0;
        for (let i = -1; i <= 1; i += 1) {
          for (let j = -1; j <= 1; j += 1) {
            // modulo is used to  wrap-around the board
            neighbors += this.board[(x + i + this.columns) % this.columns][
              (y + j + this.rows) % this.rows
            ].previousState;
          }
        }

        // subtract the current cell's state since it was added in the above loop
        neighbors -= this.board[x][y].previousState;

        // Apply rules
        if (this.board[x][y].state === 1 && neighbors < 2) {
          // Loneliness
          this.board[x][y].newState(0);
        } else if (this.board[x][y].state === 1 && neighbors > 3) {
          // Overpopulation
          this.board[x][y].newState(0);
        } else if (this.board[x][y].state === 0 && neighbors === 3) {
          // Reproduction
          this.board[x][y].newState(1);
        }
      }
    }
  }
}

export default GameOfLife;
