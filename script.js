const choices = ['rock', 'paper', 'scissor']

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]

}

function playGame(){
    const userscore = 0;
    const computerscore = 0; 
    for(i=0; i<5; i++){
        var computerchoice = getComputerChoice();
        var userchoice = prompt("Enter rock paper or scissor:")

        console.log(computerchoice, userchoice);
    }
    return
}

function round(userchoice, computerchoice){
    userchoice = userchoice.toLowerCase()

    if(userchoice === computerchoice){
        return "Draw";
    }
    else if(userchoice === 'rock' && computerchoice === 'paper'){
        return "You lose";
    }
    else if(userchoice === 'paper' && computerchoice === 'rock'){
        return "You win";
    }
    else if(userchoice === 'paper' && computerchoice === 'scissor'){
        return "You lose";
    }
    else if(userchoice === 'scissor' && computerchoice === 'paper'){
        return "You win";
    }
    else if(userchoice === 'rock' && computerchoice === 'scissor'){
        return "You win";
    }
    else if(userchoice === 'scissor' && computerchoice === 'rock'){
        return "You lose";
    }
    else{
        return "Invalid input"; 
    }
}

playGame()