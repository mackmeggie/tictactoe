
//Gameboard module
const gameboard = (() => {
    const board = [
        "*", "*", "*",
        "*", "*", "*",
        "*", "*", "*",
    ];

    

    //display gameboard function
    const displayboard = () => {
        
        board.forEach((item, index) => {
            let gamegrid = document.querySelector('.gameboard');
            let cell = document.createElement('div');
            cell.classList.add('gamecell');
            cell.setAttribute('id', `${index}`)
            cell.textContent="*"
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

    return {
        name, marker,
    }
}

//Gameflow module
const gameplay = (() => {

    const player1 = player('player1', 'O')
    const player2 = player('player2', 'X')

    let currentPlayer = player1

    const switchPlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2
        } else {
            currentPlayer = player1
        }
    }
    
    const playMarker = (event) => {
        const cell = event.target
        if(cell.textContent === "*") {
            cell.textContent = currentPlayer.marker
        } 
        if(cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
        } }

    const applyevent = () => {
        gamegrid = document.querySelector('.gameboard');
        gamegrid.addEventListener('click', playMarker);
} 


    return {
        playMarker, applyevent, switchPlayer, 
    };


})();

gameboard.displayboard();
gameplay.applyevent();


