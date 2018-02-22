const Board = require('./board');

class Game {
  constructor() {
    this.click = this.handleClick.bind(this);
    this.winner = this.winner.bind(this);
    this.currentPlayer = 'X';
  }

  handleClick(e) {
    if (!e.target.innerHTML) {
      e.target.innerHTML = this.currentPlayer;
    }
    this.winner(e.target.innerHTML);
    return this.currentPlayer === 'X' ? this.currentPlayer = 'O' : this.currentPlayer = 'X';
  }
  
  winner(targetMark) {
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
      const winner = this.winnerHelper(targetMark, pos);
      console.log(winner);
      if (winner) {
        alert(winner);
      }
    });
  }

  winnerHelper(targetMark, pos) {
    // let current = e.target.dataset.pos.split(',');
    // current = current.map(el => parseInt(el));
    const list = document.getElementsByTagName('li');
    let listItems = Array.from(list).filter(el => {
      return (el.innerHTML === targetMark);
    });
    pos.forEach(position => {
      let winner = true;
      listItems.forEach(el => {
        let position1 = el.dataset.pos.split(",")
        position1 = position1.map(el => parseInt(el));
        if (JSON.stringify(position1) !== JSON.stringify(position)) {
          // console.log('in loop');
          winner = false;
        }
      });
      // console.log(winner);
      if (winner) {
        console.log(targetMark)
        return targetMark;
        // console.log('winner');
      }
    });
    // return null;
    
    // console.log(current);
    // console.log(targetMark);


  }
  run() {
    document.addEventListener('click', this.click);
    const board = new Board();
    board.grid();
  }
}

module.exports = Game;