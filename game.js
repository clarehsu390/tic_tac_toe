const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board()
    this.currentPlayer = 'X';
  }
  
  swapTurns() {
    (this.currentPlayer === 'X') ? this.currentPlayer = 'O' : this.currentPlayer = 'X';
  }
  
  run() {
    
  }
}