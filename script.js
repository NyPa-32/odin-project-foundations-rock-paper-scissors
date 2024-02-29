const computerSelection = getComputerChoice();
const playerSelection = "Rock";


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    
}

console.log(getComputerChoice())