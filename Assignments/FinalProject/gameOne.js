var playerScore = 0;
var playerGuess = "paper";
var computer ="paper";
var Highscore = 0;
var rockImg = "Image/rock.PNG";
var paperImg = "Image/paper.jpg";
var scissorsImg = "Image/scissors.PNG";
var winLose = 0;
var Intime = 1;


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
   var myVar = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent ="Timer: "+ minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            Intime =0;
            gameOver();
            clearInterval(myVar);
            
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

function startIt() {
    winLose = computerOutCome();
 computer = computerGuess();
    var time = 60; // your time in seconds here
    var    display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
}

function playGame() {
playerScore = 0;
playerGuess = "paper";
Highscore = 0;
 winLose = 0;
 Intime = 1;
document.getElementById("credits").textContent = 'Your Score: ' + playerScore;


}

function submit(){
if(Intime === 1){
    
    var result = compareGuesses(playerGuess, computer);
    updateScores(result);
    document.getElementById("credits").textContent = 'Your Score: ' + playerScore;
    winLose = computerOutCome();
 computer = computerGuess();
    
   
    
    
   
}else{

 alert ("Out of Time Please reset Game:");


}
}

function gameOver(){
       
        if(playerScore > Highscore){
            Highscore = playerScore;
            alert("Congratulations you now hold the top score of: "+ playerScore);
            document.getElementById("highScore").textContent = 'High Score: ' + Highscore;
        }else{
        alert("Game over you ended with: "+playerScore); }
}
function paper(){
    playerGuess = "paper";
    document.getElementById("playerImage").src = paperImg;
}
function rock(){
    playerGuess = "rock";
     document.getElementById("playerImage").src = rockImg;
}
function scissors(){
    playerGuess = "scissors";
     document.getElementById("playerImage").src = scissorsImg;
}


function computerGuess() {
var choice = 0;
   choice = Math.random();
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

function computerOutCome() {
var choice = 0;
   choice = Math.random();
  if(choice <= 0.34) {
   document.getElementById("Sit").textContent = 'You need to: TIE';
    return 0;
  }
  else if(choice <= 0.67) {
document.getElementById("Sit").textContent = 'You need to: WIN';
    return 1;
  }else{
 document.getElementById("Sit").textContent = 'You need to: LOSE';
     return 2;
  }
}




function compareGuesses(guess1, guess2) {
    switch(winLose){
        case 0:

  if(guess1 === guess2) {
    return "Player";
  }else {return "Computer";}
break;
    
    case 1:
    if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
    return "Player";
    }
   return "Computer";
break;
    default: 
    if(
    (guess1 === "rock" && guess2 === "scissors") 
                       ||
    (guess1 === "paper" && guess2 === "rock")
                       ||
    (guess1 === "scissors" && guess2 === "paper"))
    {
    return "Computer";
    }

   return "Player";
break;
    }
}

function updateScores(result) {
    
    if(result === "Player") {
      playerScore += 1;
        document.getElementById("result").textContent = "Player Won last round";
    }
    if(result === "Computer") {
      playerScore -= 2;
        document.getElementById("result").textContent = "Computer Won last round";
    }
    
}