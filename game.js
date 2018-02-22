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
    this.winner();
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
      if (winner) {
        // console.log(winner);
      }
    });
  }

  winnerHelper(pos) {
   let marks = ['X', 'O'];
    // const list = document.getElementsByTagName('li');
    // let listItems = Array.from(list).filter(el => {
    //   return (el.innerHTML === targetMark);
    // });
    marks.forEach(target => {
      let winner = true;
      pos.forEach(position => {
          const mark = document.querySelector(`[data-pos='${position}']`);
          console.log(mark.innerHTML)
          if (mark.innerHTML !== target) {
            // console.log('in loop');
            winner = false;
          }
        });
        console.log(winner);
        if (winner) {
          console.log(target);
          return target;
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
    // this.winner();
  }
}

module.exports = Game;