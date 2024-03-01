let Choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        computerScore++;
        return ("Computer Wins!");
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return ("You Win!");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        playerScore++;
        return ("You Win!");
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return ("Computer Wins!");
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return ("Computer Wins!");
    }
    else {
        playerScore++;
        return ("You Win!");
    }
}

function getPlayerChoice() {
    let choice = prompt("Rock, paper, scissors?");
    choice = choice.toLowerCase();
    return choice;
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * Choices.length);

    return Choices[random];
}

function playGame() {
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You got more points than the computer, congratulations!");
    }
    else if (computerScore > playerScore) {
        console.log("You just got beat by a NPC...");
    }
    else {
        console.log("Seems like we have a tie!")
    }
}

console.log(playGame());