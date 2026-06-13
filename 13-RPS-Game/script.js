let name = prompt("Enter your name: ");
let hello = document.querySelector(".Hello");
hello.innerHTML = `Hii!  ${name}`



let userScore = 0;
let computerScore = 0;

function playGame(user) {
    let result = document.querySelector(".result");
    let computer = Math.floor(Math.random() * 3)
    const choices = ["✊ Rock", "✋ Paper", "✌️ Scissors"];

    result.classList.remove("win", "lose", "draw");
    result.classList.add("hide")

    if (user === computer) {
        result.innerHTML = `
        Draw Match 👋🏻 <br>
        User: ${choices[user]} <br>
        Computer: ${choices[computer]}`;

        result.classList.add("draw");
        result.classList.remove("hide");
    }

    else if (
        user === 0 && computer === 2 ||
        user === 1 && computer === 0 ||
        user === 2 && computer === 1
    ) {
        result.innerHTML = `
        ${name} Wins 🎉 <br>
        User: ${choices[user]} <br>
        Computer: ${choices[computer]}
        `;

        result.classList.add("win");
        result.classList.remove("hide");

        userScore++
        document.getElementById("userScore").innerText = userScore;
    }

    else {
        result.innerHTML = `
        Computer Wins 🎉 <br>
        User: ${choices[user]} <br>
        Computer: ${choices[computer]}
        `;

        result.classList.add("lose");
        result.classList.remove("hide");
        

        computerScore++
        document.getElementById("computerScore").innerText = computerScore;
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;

    document.getElementById("result").innerHTML = "Reset Game";
}

