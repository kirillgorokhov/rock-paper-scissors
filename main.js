const buttons = document.querySelectorAll(".choice");

let playerScore = 0;
let computerScore = 0;



function gameOver() {
    buttons.forEach(element => {
        element.disabled = true
    })
}

// Start Game when user clicks on a button (and makes a choice)
buttons.forEach(button =>
    button.addEventListener('click', () => {
        playGame(button.dataset.choice);
    }
));

const WON = 1;
const TIE = 0;
const LOST = -1;
let gameRules={
    'rock':
        {'scissors':WON,
        'paper':LOST,
        'rock':TIE},
    'paper':
        {'scissors':LOST,
        'paper':TIE,
        'rock':WON},
    'scissors':
        {'scissors':TIE,
        'paper  ': WON,
        'rock': LOST}
    }

 // Generate computer's choice
 function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
    }


// play the game
function playGame(playerSelection) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(gameRules);
    let result = "";

    if (gameRules[playerSelection][computerSelection] == TIE)
    {
        result = 'Tie!';
    } 
    else if (gameRules[playerSelection][computerSelection] == WON) 
     {
        playerScore++; 
        result = ('You won! ' + playerSelection + ' beats ' + computerSelection);
        if (playerScore == 5) {
            result += ' You won the game! Reload the page to play another one.'
            gameOver();
        }
    } else if (gameRules[playerSelection][computerSelection] == LOST) 
    {
        computerScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        if (computerScore == 5) {
            result += ' Computer won the game! Reload the page to play another one.'
            gameOver();
        }
}
document.getElementById('results').textContent = result;
document.getElementById('playerScore').textContent = playerScore;
document.getElementById('computerScore').textContent = computerScore;
return
}