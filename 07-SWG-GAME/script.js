// INPUT FROM USER
let name = prompt("Enter your name: ")
let hello = document.getElementById('hello')
hello.innerHTML = `Hello ${name}`

//SCORE VARIABLE
let userScore = 0;
let computerScore = 0;

// MAIN GAME FUNCTION
function playGame(user){
    let result = document.getElementById('result');
    let computer = Math.floor(Math.random() * 3);  // Random value input from computer
    
    // DRAW CONDITION
    if(user===computer){
        result.innerHTML = `
        🤝Match Draw <br>
        User: ${user} <br>
        Computer: ${computer}`
    }

    // USER WINS CONDITIONS
    else if(
        (user==0 && computer==1) ||
        (user==1 && computer==2) ||
        (user==2 && computer==0)
    ){
        userScore++         // Score incriment logic
        document.getElementById('userScore').innerText = userScore;
        
        result.innerHTML = `
        🎉${name} Wins! <br>
        User: ${user} <br>
        Computer: ${computer}`
    }

    // COMPUTER WINS 
    else {
        computerScore++    // Score incriment logic
        document.getElementById('computerScore').innerText = computerScore;

        result.innerHTML = `
        💻Computer Wins!<br> 
        User: ${user} <br> 
        Computer: ${computer}`
    }
}
//  GAME RESET FUNCTION
function resetgame(){
    userScore = 0;
    computerScore = 0;

    document.getElementById('userScore').innerText = 0;
    document.getElementById('computerScore').innerText = 0;

    document.getElementById('result').innerHTML = "Reset Game✅"
}

