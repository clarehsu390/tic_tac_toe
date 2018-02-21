
class Board {
    constructor() {
        this.grid = this.makeGrid.bind(this);
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
