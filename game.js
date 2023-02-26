// Define the game options and convert them to lowercase
const options = ["rock", "paper", "scissors"];

let selection;

// Buttons
const buttonRock = document.getElementById("buttonrock");
const buttonPaper = document.getElementById("buttonpaper");
const buttonScissors = document.getElementById("buttonscissors");

// Function to get the computer's selection
function getComputerSelection() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}

function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

let playerCounter = 0;
let computerCounter = 0;

// Button to choose and play
function handleButtonClick() {
  const tableBody = document.getElementById("tablebody");
  const playerSelection = selection;
  const playerSelectionCapitalized = capitalizeFirstLetter(playerSelection);
  const computerSelection = getComputerSelection();
  const computerSelectionCapitalized = capitalizeFirstLetter(computerSelection);
  const roundResult = playRound(playerSelection, computerSelection);
  const playerCounterSpan = document.getElementById("spanplayer");
  const computerCounterSpan = document.getElementById("spancomputer");
  playerCounterSpan.textContent = `${playerCounter}`;
  computerCounterSpan.textContent = `${computerCounter}`;
  const newTrScope = document.createElement("tr");
  const newTh1Row = document.createElement("th");
  const newTh2Row = document.createElement("th");
  const newTh3Row = document.createElement("th");
  const newTh4Row = document.createElement("th");
  newTh1Row.textContent = `${count}`;
  newTh2Row.textContent = `${playerSelectionCapitalized}`;
  newTh3Row.textContent = `${computerSelectionCapitalized}`;
  newTh4Row.textContent = `${roundResult}`;
  newTrScope.appendChild(newTh1Row);
  newTrScope.appendChild(newTh2Row);
  newTrScope.appendChild(newTh3Row);
  newTrScope.appendChild(newTh4Row);

  // tableBody.textContent = `Player selected: ${playerSelection}, Computer selected: ${computerSelection}, Result: ${roundResult}`;
  tableBody.appendChild(newTrScope);

  if (playerCounter == 5) {
    alert(`Player wins wins this Round with ${playerCounter}`);
  } else if (computerCounter == 5) {
    alert(`Computer wins wins this Round with ${computerCounter}`);
  }
}

let count = 1;

buttonRock.addEventListener("click", () => {
  selection = "rock";
  handleButtonClick();
  count++;
});

buttonPaper.addEventListener("click", () => {
  selection = "paper";
  handleButtonClick();
  count++;
});

buttonScissors.addEventListener("click", () => {
  selection = "scissors";
  handleButtonClick();
  count++;
});
