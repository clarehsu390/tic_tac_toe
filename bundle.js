/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


class Board {
    constructor() {
        this.grid = this.makeGrid.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }
    
  
    resetBoard() {
        const listItems = document.getElementsByTagName('li');
        const listArray = Array.from(listItems);
        console.log('reset board');
        for(let i=0; i < listArray.length; i++) {
            listArray[i].innerHTML = '';
        }
    }

    resetButton() {
        let button = document.createElement('button');
        document.body.appendChild(button);
        button.addEventListener('click', this.resetBoard);
        button.innerHTML = 'Reset board';
    }
    

    makeGrid() {
        const ul = document.createElement('ul');
        for (let i=0; i < 3; i++) {
         for (let j=0; j < 3; j++) {
             let li = document.createElement('li');
             li.dataset.pos = [i, j];
             ul.appendChild(li);
         }
    }
    document.getElementById('board').append(ul);
}
}

module.exports = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);
const Game = __webpack_require__(2);
let newBoard = new Board();
let newGame = new Game();

document.addEventListener('DOMContentLoaded', () => newGame.run());
document.addEventListener('DOMContentLoaded', newBoard.resetButton);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);

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
      // console .log(winner);
      if (winner) {
        document.removeEventListener('click', this.click);
        let body = document.body;
        let div = document.createElement('div');
        body.appendChild(div);
        div.innerHTML = `${winner} won!!`;
      }
    });
  }

  winnerHelper(pos) {
   let marks = ['X', 'O'];
    // const list = document.getElementsByTagName('li');
    // let listItems = Array.from(list).filter(el => {
    //   return (el.innerHTML === targetMark);
    // });
    for (let i=0; i < marks.length; i++){
      let winner = true;
      let targetMark = marks[i];
      for(let j=0; j < pos.length; j++) {
        let position = pos[j];
          const mark = document.querySelector(`[data-pos='${position}']`);
          // console.log(mark.innerHTML);
          if (mark.innerHTML !== targetMark) {
            // console.log('in loop');
            winner = false;
          }
        }
        // console.log(winner);
        if (winner) {
          console.log('in loop');
          return targetMark;
          // console.log('winner');
        }
      }
  // console.log('hello');
    
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map