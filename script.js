let containerSelect = document.querySelector(".game-board");
let buttonSelector = document.querySelector(".clear");

//function to create the total amt of grids
function populateGrid(numOfSquares) {
  let totalSquares = numOfSquares * numOfSquares;
  console.log(totalSquares);

  for (let i = 0; i < totalSquares; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-square");
    containerSelect.appendChild(div);
  }
}

populateGrid(16);

//event listener for the clear/resize option of the screen
buttonSelector.addEventListener("click", clearScreen);

function clearScreen() {
  //want to remove grids when user clicks the button
  while (containerSelect.firstChild) {
    containerSelect.removeChild(containerSelect.lastChild);
  }

  let newSize = prompt("How many squares on a side do you want?");
  //update grid template col for the game board.
  containerSelect.style.gridTemplateColumns = `repeat(${newSize}, auto)`;

  populateGrid(newSize);

  gridEventListener();
}

function changeColor() {
  this.style.backgroundColor = "black";
}

//An event listener to change the color of the squares when mouse hovers
function gridEventListener() {
  document.querySelectorAll(".grid-square").forEach((square) => {
    square.addEventListener("mouseover", changeColor);
  });
}

gridEventListener();
