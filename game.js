// Define the game OPTIONS and convert them to lowercase
const OPTIONS = ["rock", "paper", "scissors"];

let selection;
let count = 1;

// Buttons
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");

// Function to get the computer's selection
function getComputerSelection() {
  const randomIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[randomIndex];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === computerSelection) {
    roundResult = "Draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundResult = "Player Wins";
    playerCounter++;
  } else {
    roundResult = "Computer Wins";
    computerCounter++;
  }

  const playerCounterSpan = document.getElementById("spanplayer");
  const computerCounterSpan = document.getElementById("spancomputer");
  playerCounterSpan.textContent = `${playerCounter}`;
  computerCounterSpan.textContent = `${computerCounter}`;

  return roundResult;
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
}

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
