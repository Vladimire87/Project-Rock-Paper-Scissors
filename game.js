// computer randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
console.log(rockPaperScissors);

let computerChoice = [];
console.log(computerChoice);

function getComputerChoice(i) {
  return i[Math.floor(Math.random() * i.length)];
}

computerChoice = getComputerChoice(rockPaperScissors);
console.log(computerChoice);
