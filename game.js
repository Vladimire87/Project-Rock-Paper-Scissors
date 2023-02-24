// Define the game options and convert them to lowercase
const options = ["rock", "paper", "scissors"];

// Function to get the player's selection
function getPlayerSelection() {
  let selection;
  do {
    selection = prompt("Choose Rock, Paper, or Scissors").toLowerCase().trim();
  } while (!options.includes(selection));
  return selection;
}

// Function to get the computer's selection
function getComputerSelection() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Buttons
const buttonRock = document.getElementById("buttonrock");
const buttonPaper = document.getElementById("buttonpaper");
const buttonScissors = document.getElementById("buttonscissors");

// Button to choose and play
function handleButtonClick() {
  console.log("Player selected", selection);
  console.log("Computer selected", getComputerSelection());
}

buttonRock.addEventListener("click", () => {
  selection = "rock";
  handleButtonClick();
  console.log(playRound(selection));
});

buttonPaper.addEventListener("click", () => {
  selection = "paper";
  handleButtonClick();
  console.log(playRound(selection));
});

buttonScissors.addEventListener("click", () => {
  selection = "scissors";
  handleButtonClick();
  console.log(playRound(selection));
});

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = selection;
  computerSelection = getComputerSelection();
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

// Function to play the game
// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i <= 5; i++) {
//     const playerSelection = getPlayerSelection();
//     const computerSelection = getComputerSelection();
//     console.log(`Round ${i}:`);
//     console.log(
//       `Player chose ${playerSelection}, Computer chose ${computerSelection}:`
//     );
//     const result = playRound(playerSelection, computerSelection);
//     console.log(`Result: ${result}`);

//     if (result === "Player Wins") {
//       playerScore++;
//     } else if (result === "Computer Wins") {
//       computerScore++;
//     }
//   }

//   console.log(`Player Score: ${playerScore}`);
//   console.log(`Computer Score: ${computerScore}`);

//   if (playerScore > computerScore) {
//     console.log("Player Wins the Game!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer Wins the Game!");
//   } else {
//     console.log("The Game is a Tie!");
//   }
// }

// Play the game
// playGame();

// buttonpaper.addEventListener("click", () => {
//   console.log("Button Paper was clicked");
// });

// buttonscissors.addEventListener("click", () => {
//   console.log("Button Scissors was clicked");
// });
