

//function to return the computer's choice of rock, paper, or scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 4);
    let output;
        choice === 0 ? output = 'rock' :
        choice === 1 ? output = 'scissors' :
        output = 'paper';
    display.textContent = 'Computer: ' + output.toUpperCase();
    return output;
}
//function to run a round of the game
function playRound(playerChoice, computerChoice){
    switch(playerChoice){
        case 'rock':
            if(computerChoice === 'rock')
                return 'tie';
            else if(computerChoice === 'paper')
                return 'lose';
            else if(computerChoice === 'scissors')
                return 'win';
            break;

        case 'paper':
            if(computerChoice === 'rock')
                return 'win';
            else if(computerChoice === 'scissors')
                return 'lose';
            else if(computerChoice === 'paper')
                return 'tie';
            break;

        case 'scissors':
            if(computerChoice === 'rock')
                return 'lose';
            else if(computerChoice === 'scissors')
                return 'tie';
            else if(computerChoice === 'paper')
                return 'win';
            break;
        default:
            alert('error');
    }
}
//function to increment score
function incrementScore(result){
    switch(result){
        case 'win':
            playerScore++;
            scoreboard.textContent = 'You win this round! The score is now ' + playerScore + 
                ' - ' + compScore;
            break;
        case 'lose':
            compScore++;
            scoreboard.textContent = 'You lose this round! The score is now ' + playerScore + 
            ' - ' + compScore;
            break;
        case 'tie':
            scoreboard.textContent = 'Tie! The score is still ' + playerScore + ' - ' + compScore;
            break;
        default:
            console.log('something has gone wrong')
    }
    if(playerScore == 5){
        scoreboard.textContent = 'you win! hooray!';
    } else if(compScore == 5){
        scoreboard.textContent = 'you lose! oh no!';
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreboard = document.querySelector('.scoreboard');
const display = document.querySelector('.display');
let playerScore = 0;
let compScore = 0;


rock.addEventListener('click', () => {
    incrementScore(playRound(rock.value, getComputerChoice()));
});
paper.addEventListener('click', () => {
    incrementScore(playRound(paper.value, getComputerChoice()));
});
scissors.addEventListener('click', () => {
    incrementScore(playRound(scissors.value, getComputerChoice()));
});


