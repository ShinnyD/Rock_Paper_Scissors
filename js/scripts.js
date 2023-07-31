//rock paper scissors

let arr = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".btnRock");
const paperButton = document.querySelector(".btnPaper");
const scissorsButton = document.querySelector(".btnScissors");
const resultsDIV = document.querySelector(".results");

function round(playerSelection) {
  resultsDIV.textContent=""
  let getComputerChoice = arr[Math.floor(Math.random() * arr.length)];

  //let playerSelection= buttons.className//prompt("Please input either Rock, Paper, or Scissors.","")

  const div = document.createElement("div");
  div.innerText = "Computer chose " + getComputerChoice;
  const h3 = document.createElement("h3");
  div.innerText = "Player chose " + playerSelection;
  //console.log("Computer chose " + getComputerChoice);
  //console.log("Player chose " + playerSelection);

  console.log(playerSelection, getComputerChoice);
  console.log(playerScore, computerScore);

  if ((playerSelection == "rock" && getComputerChoice == "scissors") ||(playerSelection == "paper" && getComputerChoice == "rock") ||(playerSelection == "scissors" && getComputerChoice == "paper")) {
    const p = document.createElement("p");
    p.innerText = "You win! " + playerSelection + " beats " + getComputerChoice;
    resultsDIV.appendChild(p);
    console.log("You win! " + playerSelection + " beats " + getComputerChoice);
    playerScore = playerScore + 1;

  } else if ((playerSelection == "scissors" && getComputerChoice == "rock") || (playerSelection == "rock" && getComputerChoice == "paper") || (playerSelection == "paper" && getComputerChoice == "scissors")) {
    const p = document.createElement("p");
    p.innerText = "You loose! " + getComputerChoice + " beats " + playerSelection;
    resultsDIV.appendChild(p);
    console.log("You loose! " + getComputerChoice + " beats " + playerSelection);
    computerScore = computerScore + 1;

  } else {
  console.log("Its a tie!");
  const p = document.createElement("p");
  p.innerText = "Its a tie!";
  resultsDIV.appendChild(p);
  }

  if (playerScore < 5 && computerScore < 5) {
  let p = document.createElement("p");
  p.innerText = "player score: " + playerScore;
  resultsDIV.appendChild(p);
  let div = document.createElement("div");
  div.innerText = "computer score: " + computerScore;
  resultsDIV.appendChild(div);
  console.log("player score: " + playerScore);
  console.log("computer score: " + computerScore);
  //repeat round
  //round(playerSelection);
}

 if (playerScore === 5) {
    let div = document.createElement("div");
    div.innerText = "You win! First one to 5!";
    console.log("You win! First one to 5!");
    resultsDIV.appendChild(div)
  } else if (computerScore === 5) {
    let div = document.createElement("div");
    resultsDIV.appendChild(div)
    div.innerText = "You loose! Computer got to 5 first.";
    console.log("You loose! Computer got to 5 first.");
  }

}



 

  


rockButton.addEventListener("click", () => {
  const playerSelection = "rock";
  round(playerSelection);
});

paperButton.addEventListener("click", () => {
  const playerSelection = "paper";
  round(playerSelection);
});

scissorsButton.addEventListener("click", () => {
  const playerSelection = "scissors";
  round(playerSelection);
});


