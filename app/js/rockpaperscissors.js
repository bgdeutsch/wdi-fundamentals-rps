////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(computerMove,playerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        console.log ("You have tied.");
    }

    else if (playerMove === "scissors" && computerMove === "paper"){
        winner = "player";
    }

    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }

    else if (playerMove === "paper" && computerMove === "rock")     {
        winner = "player";
    }

    else {
        winner="computer";
    }

    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    return winner;
    }  //end getWinner function.

function playToFive(move) {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
   
        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();
        //After we get the player and computer moves, we determine who wins the round. 
        var winner = getWinner(computerMove, playerMove);

    return winner;
}

var playerWins = 0;
var computerWins = 0;
var winner = "";
var gameOver = false;


while (gameOver === false) {
    winner = playToFive();
    
    if (winner === "player"){
        playerWins += 1;
    } 
    else if (winner === "computer"){
        computerWins += 1;
    } 
    else{
        playerWins += 0;
        computerWins += 0;
    }

    if(playerWins === 5 ) {
        gameOver = true;
    } else if(computerWins === 5) {
        gameOver = true;
    }

    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
}

if(playerWins > computerWins) {
    console.log("The player wins the game!");
} 
else if(playerWins < computerWins) {
    console.log("Computer wins the game!");
}
