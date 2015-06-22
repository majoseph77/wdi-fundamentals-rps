'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

var playerMove= null;
return  playerMove || 'getInput()';

}


function getPlayerMove(move) {

var playerMove= null;
return  playerMove || 'getInput()';

}

function getComputerMove(move) {

var computerMove = null;
return  computerMove || 'randomPlay()';

}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === "rock" && computerMove === "scissors") {
        winner = 'Player';
    }

    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = 'Player';
    }

    else if (playerMove === "paper" && computerMove === "rock") {
        winner = 'Player';
    }

    else if (computerMove === "rock" && playerMove == "scissors") {
        winner = 'Computer';
    }

    else if (computerMove === "scissors" && playerMove === "paper") {
        winner = 'Computer';
    }

    else if (computerMove === "paper" && playerMove === "rock") {
        winner = 'Computer';
    }

    else if (computerMove === playerMove) {
        winner = 'tie';
    }

    return winner;
}

getWinner("rock","paper")

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (x <= 5) {x +=1; console.log(result);
        while(getPlayerMove < 5 || getComputerMove < 5) {
            getWinner();

            if (winner === 'Computer') {
                computerMove +=1;

            else if (winner === 'Player') {
                playerMove+=1;
            }

            
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}