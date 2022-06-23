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
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ) ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) 
     {
         return 'You won!';
    } else {
        return 'You lose! '+ computerSelection + ' beats ' + playerSelection;
}
}

// hardcode player's choice
const playerSelection = 'ROCK';

//announce player's choice
console.log('You chose ' + playerSelection);

//announce computer's choice
const computerSelection = computerPlay();
console.log('Computer chose '+computerSelection);

//who is the winner?
console.log(playRound(playerSelection, computerSelection)); 