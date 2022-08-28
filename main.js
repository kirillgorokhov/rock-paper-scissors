const btns = document.querySelectorAll(".choice");



let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;


function disableButtons() {
    btns.forEach(elem => {
        elem.disabled = true
    })
}

// Start Game when user clicks on a button (and makes a choice)
btns.forEach(button =>
    button.addEventListener('click', () => {
        console.log(button.dataset.choice);
        playRound(button.dataset.choice);
    }
));

 // Generate computer's choice
 function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[Math.floor(Math.random() * choices.length)];
    }


// play a round
function playRound(playerSelection) {
    computerSelection = computerPlay();
    let result = ""

    if (playerSelection == computerSelection)
    {
        result = 'Tie!';
    } 
    else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ) ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) 
     {
        playerScore++; 
        result = ('You won! ' + playerSelection + ' beats ' + computerSelection);
        if (playerScore == 5) {
            result += ' You won the game! Reload the page to play another one.'
            disableButtons();
        }
    } else if (
    (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) ||
    (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'ROCK' && computerSelection === 'PAPER')) 
    {
        computerScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        if (computerScore == 5) {
            result += ' Computer won the game! Reload the page to play another one.'
            disableButtons();
        }
}
document.getElementById('results').textContent = result;
document.getElementById('playerScore').textContent = playerScore;
document.getElementById('computerScore').textContent = computerScore;
return
}