
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
           // cell.addEventListener('click', playMarkerO)
        })
    }

    

    return {
        board, displayboard, //playMarkerO
    };
})();





//Player factory function
const player = (name, marker) => {

   // name = prompt("Name please:");
   // marker = prompt("X or O?")

const playMarkerO = (event, marker) => {
        
        const cell = event.target
        if(cell.textContent === "*") {
            cell.textContent = `${player1.marker}`
        }
        if(cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
        } }

const playMarkerX = (event, marker) => {
        
        const cell = event.target
        if(cell.textContent === "*") {
                cell.textContent = `${player2.marker}`
            }
        if(cell.textContent === "O" || cell.textContent === "X") {
                alert("Spot already selected.")
            } }
    
const applyeventO = () => {
    gamegrid = document.querySelector('.gameboard');
    gamegrid.addEventListener('click', playMarkerO);
}
    
const applyeventX = () => {
    gamegrid = document.querySelector('.gameboard');
    gamegrid.addEventListener('click', playMarkerX);
}

    return {
        name, marker, playMarkerO, playMarkerX, applyeventO, applyeventX
    }
}

//Gameflow module
const gameplay = (() => {

    

    const begingame = () => {

    }
    

    return {
        
    };


})();

gameboard.displayboard();

const player1 = player("Meeg", "O");
const player2 = player("Max", "X");

player1.applyeventO()
player2.applyeventX();




