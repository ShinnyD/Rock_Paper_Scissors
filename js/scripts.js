//rock paper scissors

//create arr with Rock, Paper, Scissors
let arr = ["Rock", "Paper","Scissors"];

// one round of rock paper scissors
function round() {
    //getComputerChoice();
    let getComputerChoice = arr[(Math.floor(Math.random() * arr.length))]
    //set playerSelection
    let playerSelection= prompt("Please input either Rock, Paper, or Scissors.","")
    
    console.log("Computer chose " + getComputerChoice);
    console.log("Player chose " + playerSelection);
//make input case insensitive
    getComputerChoice = getComputerChoice.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // player win condition
    if ((playerSelection == "rock" && getComputerChoice == "scissors") || (playerSelection == "paper" && getComputerChoice == "rock") || (playerSelection == "scissors" && getComputerChoice == "paper")){
        console.log("You win! " + playerSelection + " beats " + getComputerChoice);
        playerScore = playerScore + 1;
        
    //player lose condition
    } else if ((playerSelection == "scissors" && getComputerChoice == "rock") || (playerSelection == "rock" && getComputerChoice == "paper") || (playerSelection == "paper" && getComputerChoice == "scissors")){
        console.log("You loose! " + getComputerChoice + " beats " + playerSelection);
        computerScore = computerScore + 1;
        
    //player draw condition
    } else 
    console.log("Its a tie!");

}

//start a round

let playerScore = 0;
let computerScore = 0;
while (playerScore < 5 && computerScore < 5){
    //show current score count
    console.log("player score: " + playerScore);
    console.log("computer score: " + computerScore);
    //repeat round
    round();
}

if (playerScore === 5){
    console.log("You win! First one to 5!")
} else {
    console.log("You loose! Computer got to 5 first.")
}


