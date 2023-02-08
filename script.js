function getComputerChoice() {
  choicesArr = ["rock", "paper", "scissors"];

  randomChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];

  return randomChoice;
}

function capitalizeFirstLetter(text) {
  let firstLetter = text.charAt(0);
  let remainder = text.slice(1);
  return firstLetter.toUpperCase() + remainder;
}

function decapitalizeNonFirstLetters(text) {
  let firstLetter = text.charAt(0);
  let remainder = text.slice(1);
  return firstLetter + remainder.toLowerCase();
}

function decapitalizeAll(text) {
  return text.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = decapitalizeAll(playerSelection);
  computerSelection = decapitalizeAll(computerSelection);

  if (playerSelection == computerSelection) {
    console.log("Draw!");
    return 0;
  } else {
    switch (true) {
      case playerSelection == "rock" && computerSelection == "scissors":
      case playerSelection == "scissors" && computerSelection == "paper":
      case playerSelection == "paper" && computerSelection == "rock":
        console.log(
          `You win! ${capitalizeFirstLetter(
            playerSelection
          )} beats ${computerSelection}!`
        );
        return 1;
      case playerSelection == "scissors" && computerSelection == "rock":
      case playerSelection == "rock" && computerSelection == "paper":
      case playerSelection == "paper" && computerSelection == "scissors":
        console.log(
          `You lose! ${capitalizeFirstLetter(
            computerSelection
          )} beats ${playerSelection}!`
        );
        return -1;
    }
  }
}

function game() {
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, Scissors!");
    computerSelection = getComputerChoice();
    outcome = playRound(playerSelection, computerSelection);
    playerScore += outcome;
  }
  if (playerScore > 0) {
    console.log("You won!");
  } else if (playerScore < 0) {
    console.log("You lost!");
  } else {
    console.log("Draw!");
  }
}

game();
