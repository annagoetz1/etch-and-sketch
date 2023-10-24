const userButton = document.querySelector('body');
const userPrompt = document.CreateElement ('#btn');
btn.addEventListener('click', () => {
alert = ("How many squares do you need?");
});


const gridContainer = document.querySelector(".grid-container");

for (let j = 0; j <16; j++) {
    const row = document.createElement("div");
    row.className = "grid-row";
    


for (let i = 0; i < 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
   row.appendChild (gridSquare); }

    gridContainer.appendChild(row);
}