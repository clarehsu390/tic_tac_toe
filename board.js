
class Board {
    constructor() {
        this.grid = this.makeGrid.bind(this);
        this.resetButton = this.resetButton.bind(this);
    }
    
  
    resetBoard() {
        const listItems = document.getElementsByTagName('li');
        const listArray = Array.from(listItems);
        console.log('reset board');
        // for(let i=0; i < listArray.length; i++) {
        //     listArray[i].innerHTML = '';
        // }
        for(let item of listArray) {
            item.innerHTML = '';
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
