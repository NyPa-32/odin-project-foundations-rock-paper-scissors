function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

console.log(getComputerChoice())