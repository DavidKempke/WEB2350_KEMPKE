var playerScore = 100;
var comLastChoice = 0;
var comRowCount = 0;
var minBet = 5;
var bet = 0;
var Highscore = 0;
var rockImg = "Image/rock.PNG";
var paperImg = "Image/paper.jpg";
var scissorsImg = "Image/scissors.PNG";
var numOfRounds = 10;



function playGame() {

    
 playerScore = 100;

 comLastChoice = 0;
 comRowCount = 0;
 minBet = 5;
 bet = 0;
 numOfRounds = 10;
}

function round(){
if(numOfRounds>0){
    var player   = playerGuess();
      
    enterbets();
    var computer = computerGuess();
    var result = compareGuesses(player, computer);
    updateScores(result, bet);
    numOfRounds--;
    gameOver();
    document.getElementById("credits").textContent = 'Your Credits: ' + playerScore;
    document.getElementById("RoundWinner").textContent = 'Round Winner: ' + result;
   
    
    
   
}else{

 alert ("Out of rounds Please reset Game");


}
}
function gameOver(){
    
    if(numOfRounds < 1){
       
        if(playerScore > Highscore){
            Highscore = playerScore;
            alert("Congratulations you now hold the top score of: "+ playerScore);
            document.getElementById("highScore").textContent = 'High Score: ' + Highscore;
        }else{
        alert("Game over you ended with: "+playerScore); }
    }else{
        return 0;
    }
}

function playerGuess() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock") {
       document.getElementById("playerImage").src = rockImg;
       return playerChoice;     
   }
      else if(playerChoice === "paper"){
        document.getElementById("playerImage").src = paperImg;
       return playerChoice; 
      } 
    else if (playerChoice === "scissors") {
     document.getElementById("playerImage").src = scissorsImg;
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again!");
  playerChoice = playerGuess();
    return playerChoice;
}
function enterbets() {
 var x = prompt("Enter your bet.", "0");
 var newBet = parseInt(x);

if(newBet >=minBet ) {
     alert("Good job");
     bet = newBet;
     minBet = 5;
   }else {
  alert("Min bet was not placed");
  enterbets();
  }
}

function computerGuess() {
var choice = 0;
if (comRowCount < 1) {
   choice = Math.random();
 comRowCount = 2;
comLastChoice = choice;}
else{
choice = comLastChoice;
comRowCount--;
}
  if(choice <= 0.34) {
      document.getElementById("computerImage").src = rockImg;
    return "rock";
  }
  else if(choice <= 0.67) {
     document.getElementById("computerImage").src = paperImg;
    return "paper";
  }else{
 
 document.getElementById("computerImage").src= scissorsImg;
     return "scissors";
  }
}






function compareGuesses(guess1, guess2) {
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and the computer chose: " + guess2 + "!");
  //First check for equality
  if(guess1 === guess2) {
    alert("You and the computer guessed the same thing! Double Min bet!");
    return "Tie";
  }
  //No check for guess1 winning
  if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
   alert("Player wins the round!");
    return "Player";
    }
   alert("Computer wins the round!");
   return "Computer";
}

function updateScores(result, points) {
    if(result === "Player") {
      playerScore += points;
    }
    if(result === "Computer") {
      playerScore -= points;
    }
    if(result === "Tie") {
    minBet = (bet *2)
      
      playerScore += 0;
      
    }
}