
//Gameboard module
const gameboard = (() => {
    const board = [
        "X", "O", "X",
        "O", "X", "O",
        "X", "O", "X",
    ];

    

    //display gameboard function
    const displayboard = () => {
        
        board.forEach((item, string, index) => {
            let gamegrid = document.querySelector('.gameboard');
            let cell = document.createElement('div');
            cell.classList.add('gamecell');
            cell.textContent=board[string];
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

    const playMarker = () => 

    return {
        name, marker,
    }
}

//Gameflow module
const gameplay = (() => {

})();

gameboard.displayboard();


