const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const userInput = prompt("How many squares do you need?");
    let numberofSquares = 16;

    const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML = '';

        if (!isNaN(userInput)) {
        const numberOfSquares = parseInt (userInput);
    }
    createGrid(numberofSquares);
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