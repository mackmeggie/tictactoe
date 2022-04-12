
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
            cell.addEventListener('click', playO);
            cell.addEventListener('click', playX)
        })
    }

    const test = () => {
        console.log('Helooooo, is anyting working???')
    }
    
    const playX = (event) => {
        const cell = event.target;
        if(cell.textContent === "*") {
            cell.textContent = "X"
        } 
        if (cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
        }
    }


    const playO = (event) => {
        const cell = event.target
        if(cell.textContent === "*") {
            cell.textContent = "O"
        }
        if(cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
            console.log("mmhmmm")
        } 
}
    

    return {
        board, displayboard, playX, playO, test
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

})();

gameboard.displayboard();


