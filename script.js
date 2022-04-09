
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
            cell.addEventListener('click', playO(`${index}`));
            cell.addEventListener('click', playX(`${index}`))
        })
    }

    const test = () => {
        console.log('Helooooo, is anyting working???')
    }
    
    const playX = (indexy) => {
        const cell = document.getElementById(`${indexy}`);
        if(cell.textContent === "*") {
            cell.textContent = "X"
        } 
        if (cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
        }
    }


    const playO = (indexy) => {
        const cell = document.getElementById(`${indexy}`)
        if(cell.textContent === "*") {
            cell.textContent = "O"
            console.log("???")
        }
        if(cell.textContent === "O" || cell.textContent === "X") {
            alert("Spot already selected.")
            console.log("mmhmmm")
        } 
}
    

    return {
        board, displayboard, playO, playX, test
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


