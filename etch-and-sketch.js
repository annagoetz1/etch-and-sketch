const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const userInput = prompt("How many squares do you need?");
    let numberOfSquares = 16;

    const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML = '';

        if (userInput !== null) {
            while (true) {
                if (!isNaN(userInput)) {
                  numberOfSquares = parseInt(userInput);
                  break;
                } else {
                    alert ("Please enter a valid number.");
                    userInput = prompt ("How many squares do you need?");
                    if (userInput === null) {
                        break;
                    }
                }
            } 
        }
        createGrid(numberOfSquares, gridContainer);       
    });

function createGrid(numberOfSquares, gridContainer) {

for (let j = 0; j < numberOfSquares; j++) {
    const row = document.createElement("div");
    row.className = "grid-row";
    

for (let i = 0; i < numberOfSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
   row.appendChild (gridSquare); }
    gridContainer.appendChild(row);
}
}
function gridHover (){

const gridSquares = document.querySelectorAll ('.grid-square');
gridSquares.forEach((square) => {
square.addEventListener ('mouseover', () => {
    square.style.backgroundColor = 'blue';
});
square.addEventListener ('mouseout', () => {
square.style.backgroundColor = '';
});
});
}