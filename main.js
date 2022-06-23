 // Generate computer's choice
 function computerPlay() {
    let number = Math.floor(Math.random()*3);
    if (number === 0) {
        return 'ROCK'
    } else if (number === 1) {
        return 'PAPER'
    }
    else {
        return 'SCISSORS'
    }
}

//declare the score
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection){
        return 'Tie!';
    } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ) ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) 
     {
        playerScore++; 
        return 'You won! ' + playerSelection + ' beats ' + computerSelection;
    } else if (
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) ||
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'ROCK' && computerSelection === 'PAPER')) 
    {
        computerScore++;
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
}
else {
    return 'Choose between rock, paper and scissors!';
}
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = computerPlay();
        roundNumber++;
        console.log('Round ' + roundNumber);
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
     }  
     if (roundNumber===5) {
         console.log(determineWinner());
     }
}

function determineWinner() {
    if (playerScore > computerScore) {
        return 'YOU WON THE GAME!';
    }
    else {
        return 'COMPUTER WON THE GAME!';
    }
}

function getPlayerChoice() {
    return prompt('What is your choice?');
}

game();