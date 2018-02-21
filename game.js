const Board = require('./board');

class Game {
  constructor() {
    this.click = this.handleClick.bind(this);
    this.currentPlayer = 'X';
  }

  handleClick(e) {
    if (!e.target.innerHTML) {
      e.target.innerHTML = this.currentPlayer;
    }
    this.winnerHelper(e);
    return this.currentPlayer === 'X' ? this.currentPlayer = 'O' : this.currentPlayer = 'X';
  }
  
  winner() {
    const positions = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // verticals
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];
    positions.forEach(pos => {
      const winner = this.winnerHelper(pos);
      if (winner != null) {
        return winner;
      }
    });
  }

  winnerHelper(e, pos) {
    let targetMark = e.target.innerHTML;
    let current = e.target.dataset.pos.split(',');
    current = current.map(el => parseInt(el));
    const list = document.getElementsByTagName('li');
    let listItems = Array.from(list);
   
    pos.forEach(position => {
      let winner = true;

      listItems.forEach(el => {
        if (el.innerHTML !== targetMark) {
          winner = false;
        }
      })
    })
    
    console.log(current);
    console.log(targetMark);


  }
  run() {
    document.addEventListener('click', this.click);
    const board = new Board();
    board.grid();
  }
}

module.exports = Game;