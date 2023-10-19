const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridSquare.textContent = i + 1;
    gridContainer.appendChild(gridSquare); }