
//Gameboard stored as array inside factory function
const gameboard = (() => {

    const board = [
    {a:1}, {a:2}, {a:3},
    {b:1}, {b:2}, {b:3},
    {c:1}, {c:2}, {c:3}
    ];


//function creates gameboard
    const displayboard = () => {
        
        board.forEach((object, index) => {
        let gamegrid = document.querySelector('.gameboard');
           let cell = document.createElement('div');
           cell.classList.add('gamecell');
           cell.setAttribute('id',`${index}`);
           gamegrid.appendChild(cell);
           gamegrid.style.gridTemplateRows=`repeat(3, 1fr)`
           gamegrid.style.gridTemplateColumns=`repeat(3, 1fr)` 
        })
    }

    return {
        board, displayboard,
    };
})();


//Player factory function
const player = (name, marker) => {
    const name = () => name;
    const marker = () => marker;

    const playMarker = () => {
        let cell = document.querySelectorAll('.cell');
        
    }
}

gameboard.displayboard();