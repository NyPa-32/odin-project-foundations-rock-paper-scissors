let Choices = ["Rock", "Paper", "Scissors"];

const computerSelection = getComputerChoice();
const playerSelection = "Scissors";


function getComputerChoice() {
    let random = Math.floor(Math.random() * Choices.length);

    return Choices[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return ("Computer Wins!");
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return ("You Win!");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return ("You Win!");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return ("Computer Wins!");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return ("Computer Wins!");
    }
    else {
        return ("You Win!");
    }
}

console.log(playRound(playerSelection, computerSelection))

//(playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") 