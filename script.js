
//function to return the computer's choice of rock, paper, or scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 4);
    let output;
        choice === 0 ? output = 'rock' :
        choice === 1 ? output = 'scissors' :
        output = 'paper';
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
//function to play the game
function game(){
//initialize each player's score at 0
    let playerScore = 0;
    let compScore = 0;

//for 5 rounds, ask the player for an input
    for(let i = 1; i <= 5; i++){
        let input = prompt('Rock, paper, or scissors?','');
        input = input.toLowerCase();

//use playRound() to see if the player won, lost, or tied
        let result = playRound(input, getComputerChoice());

//increment the winner's score, log the winner of the round and the score to the console
        switch(result){
            case 'win':
                console.log('You win Round ' + i + '!');
                playerScore++;
                console.log('The score is now ' + playerScore + ' - ' + compScore);
                break;
            case 'lose':
                console.log('You lose Round ' + i + '!');
                compScore++;
                console.log('The score is now ' + playerScore + ' - ' + compScore);
                break;
            case 'tie':
                console.log('Round ' + i + ' is a tie!');
                console.log('The score is still ' + playerScore + ' - ' + compScore);
                break;
            default:
                console.log('something has gone wrong')
        }
    }
    if(playerScore > compScore)
        console.log('Congrats, you win Rock, Paper, Scissors!');
    else if(playerScore < compScore)
        console.log('Game Over - You lost!');
    else
        console.log('It\'s a tie! Try again!');
    
}

game();