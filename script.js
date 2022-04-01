
//Gameboard stored as array inside module
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
           cell.textContent=""
           gamegrid.appendChild(cell);
           gamegrid.style.gridTemplateRows=`repeat(3, 1fr)`
           gamegrid.style.gridTemplateColumns=`repeat(3, 1fr)` 
           cell.addEventListener('click', () => {
               cell.textContent=player.marker;
            });
        })
    }

    return {
        board, displayboard,
    };
})();



//Player factory function
const player = (name, marker) => {
    name = prompt("Please enter your name");
    marker = prompt("Please select a marker");
    

    //Why doesn't this work???
    
    
    
    

    return {
        name, marker, 
    }
}

const gameflow = () => {

    
}






gameboard.displayboard();

player();



