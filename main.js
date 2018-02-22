const Board = require('./board');
const Game = require('./game');
let newBoard = new Board();
let newGame = new Game();

document.addEventListener('DOMContentLoaded', () => newGame.run());
document.addEventListener('DOMContentLoaded', newBoard.resetButton);
