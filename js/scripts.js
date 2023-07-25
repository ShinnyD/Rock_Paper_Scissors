//rock paper scissors

//create arr with Rock, Paper, Scissors
let arr = ["Rock", "Paper","Scissors"];
//set getComputerChoice to randomly return either "Rock","Paper", or "Scissors"
//////return;

//getComputerChoice();


//set playerSelection


//set playerSelection to randomly return either "Rock", "Paper", or "Scissors"
//function playerSelection(){
    //console.log("Player chose " + arr[(Math.floor(Math.random() * arr.length))]);
   // return;



    //make input case insensitive

//set conditions whether the player wins or loses
function game() {
    let getComputerChoice = arr[(Math.floor(Math.random() * arr.length))]
    let playerSelection= prompt("Please input either Rock, Paper, or Scissors.","")
    // player win condition
    if ((playerSelection == "Rock" && getComputerChoice == "Scissors") || (playerSelection == "Paper" && getComputerChoice == "Rock") || (playerSelection == "Scissors" && getComputerChoice == "Paper")){
        //log in console that you won and show which side chose what
        console.log("You win! " + playerSelection + "beats " + getComputerChoice);
    //player lose condition
} else if ((playerSelection == "Scissors" && getComputerChoice == "Rock") || (playerSelection == "Rock" && getComputerChoice == "Paper") || (playerSelection == "Paper" && getComputerChoice == "Scissors")){
        console.log("You loose! " + getComputerChoice + "beats " + playerSelection);
    //player draw condition
} else 
    console.log("Its a tie!");
}

game();

//game();
 
    //if getComputerChoice = "Rock" & playerSelection = "Paper"
        // log "You Win! Paper beats Rock"
    //if getComputerChoice = Rock & playerSelection = "Scissors"
        // log "You loose! Rock beats scissors."
    //if getComputerChoice = "Rock" & playerSelection = "Rock"
        // log "Its a tie!"
    //if getComputerChoice = "Paper" & playerSelection = "Scissors"
        // log "You win! Scissor beats paper."
    //if getComputerChoice = "Paper" & playerSelection = "Rock"
        // log "You loose! Paper beats rock."
    //if getComputerChoice = "Paper" & playerSelection = "Paper"
        // log "Its a tie!"
    //if getComputerChoice = "Scissors" & playerSelection = "Rock"
        // log "You win! Rock beats scissor."
    //if getComputerChoice = "Scissor" & playerSelectoin = "Paper"
        // log "You loose! Scissor beats paper."
    //if getComputerChoice = "Scissors" & playerSelection = "Scissors"
        // log "Its a tie!"
    
    //compare getComputerChoice to playerSelection
        //reset the game