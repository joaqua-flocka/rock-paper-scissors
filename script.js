

//function to return the computer's choice of rock, paper, or scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 4);
    let output;
        choice === 0 ? output = 'rock' :
        choice === 1 ? output = 'scissors' :
        output = 'paper';
    let string = 'Computer: ' + output.toUpperCase();
    appendText(display,string);
    return output;
}
//function to run a round of the game
function playRound(playerChoice, computerChoice){
    display.lastChild.textContent += "      Player: " + playerChoice.toUpperCase();
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
    let string = '';
    switch(result){
        case 'win':
            playerScore++;
            string += 'You win this round! The score is now ' + playerScore + 
                ' - ' + compScore;
            appendText(display,string);
            break;
        case 'lose':
            compScore++;
            string += 'You lose this round! The score is now ' + playerScore + 
            ' - ' + compScore;
            appendText(display,string);
            break;
        case 'tie':
            string += 'Tie! The score is still ' + playerScore + ' - ' + compScore;
            appendText(display,string);
            break;
        default:
            alert('something has gone wrong')
    }
    if(playerScore == 5 && compScore < 5 && playerScore > compScore){
        clearText(display);
        appendText(display,'you win! hooray!');
        display.firstChild.classList.add('gameover');
    } else if(compScore == 5 && playerScore < 5 && compScore > playerScore){
        clearText(display);
        appendText(display,'you lose! oh no!');
        display.firstChild.classList.add('gameover');

    }
}

function appendText(div, string){
    const para = document.createElement('p');
    para.textContent = string;
    if(div.childNodes.length > 10){
        div.removeChild(div.firstChild);
        div.style.paddingTop = '3rem';
        console.log(div.style.height);
    }
    div.appendChild(para);
}

function clearText(div){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
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


