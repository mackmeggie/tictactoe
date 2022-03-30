
//Gameboard stored as array inside factory function
const gameboard = (() => {

    const board = [{
    a:1, a:2, a:3,
    b:1, b:2, b:3,
    c:1, c:2, c:3
    }];


//function creates gameboard
    const displayboard = () => {
        let gameboard = document.querySelector('gameboard');
        board.forEach((Object, index) => {
           const cell = document.createElement('div');
           cell.setAttribute('id',`${index}`);
           gameboard.appendChild(cell); 
        })
    }

    return {
        board, displayboard,
    };
})();