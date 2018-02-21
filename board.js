
class Board {
    constructor() {
        this.grid = this.makeGrid.bind(this);
        this.click = this.handleClick.bind(this);
        this.currentPlayer = 'X'
    }
    
    handleClick(e) {
      if (!e.target.innerHTML) {
        e.target.innerHTML = this.currentPlayer;
      }
      return this.currentPlayer === 'X' ? this.currentPlayer = 'O' : this.currentPlayer = 'X';
    }
    
    

    makeGrid() {
        const ul = document.createElement('ul');
        for (let i=0; i < 3; i++) {
         for (let j=0; j < 3; j++) {
             let li = document.createElement('li');
             li.dataset.pos = [i, j];
              ul.addEventListener('click', this.click);
             ul.appendChild(li);
         }
    }
    document.getElementById('board').append(ul);
  
    
  
     
}
}

module.exports = Board;
