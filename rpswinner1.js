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
    return  move || getInput();
}

function getComputerMove(move) {
    return  move || randomPlay();
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


function playToFive(){ 
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        while(playerWins < 5 && computerWins < 5){
        
        var playerMove = getPlayerMove();
        console.log("You chose" + playerMove);

        var computerMove = getComputerMove();
        console.log("While the computer chose" + computerMove);

        var winner = getWinner(playerMove,computerMove);
            if (winner === 'Computer') {
                computerWins +=1;
            }
            else if (winner === 'Player') {
                playerWins +=1;
            }
            console.log("Score is " + [playerWins] + "for the player and" + [computerWins] + "for the computer");
            return [playerWins, computerWins];
        }
}

playToFive();