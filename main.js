const btns = document.querySelectorAll('.choice');



let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// Start Game when user clicks on a button (and makes a choice)
btns.forEach((button) =>
    button.addEventListener('click', () => {
      if (playerScore >= 5 || computerScore >= 5) {
        return determineWinner();
          }
    else {
        return game(button.dataset.choice);
    }
}
)
);

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


// play a round
function playRound(playerSelection, computerSelection) {
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
}

function game(playerSelection) {
            roundNumber++;
            computerSelection = computerPlay();
            console.log('Round ' + roundNumber);
            console.log(playRound(playerSelection, computerSelection));
            console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
        }
        

function determineWinner() {
    if (playerScore > computerScore) {
        console.log('YOU WON THE GAME!');
    }
    else {
        console.log('COMPUTER WON THE GAME!');
    }
}