//rock paper scissors

//create arr with Rock, Paper, Scissors
let arr = ["Rock", "Paper","Scissors"];

const buttons = document.querySelectorAll("button");


function round() {
    
    let getComputerChoice = arr[(Math.floor(Math.random() * arr.length))]
  
    let playerSelection= buttons.className//prompt("Please input either Rock, Paper, or Scissors.","")
    
    console.log("Computer chose " + getComputerChoice);
    console.log("Player chose " + playerSelection);

    getComputerChoice = getComputerChoice.toLowerCase();
    //playerSelection = playerSelection.toLowerCase();

    
    if ((playerSelection == (buttons.className == btnRock) && getComputerChoice == "scissors") || 
        (playerSelection == (buttons.className == btnPaper) && getComputerChoice == "rock") || 
        (playerSelection == (buttons.className == btnScissors) && getComputerChoice == "paper")){
        console.log("You win! " + playerSelection + " beats " + getComputerChoice);
        playerScore = playerScore + 1;
        
    
    } else if ((playerSelection == "scissors" && getComputerChoice == "rock") || (playerSelection == "rock" && getComputerChoice == "paper") || (playerSelection == "paper" && getComputerChoice == "scissors")){
        console.log("You loose! " + getComputerChoice + " beats " + playerSelection);
        computerScore = computerScore + 1;
        
   
    } else 
    console.log("Its a tie!");

}



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


