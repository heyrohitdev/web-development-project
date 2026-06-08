let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newBtn = document.getElementById("new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {

        if (turnO) {
            box.innerText = "O";
            box.style.color = " #3b82f6";   // 🔵 O
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#ef4444";    // 🔴 X
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulation! Player ${winner} Wins!`;
    msgContainer.classList.remove("hide");

}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val)
                showWinner(pos1Val);
                disableBox();
            }
            else {
                msg.innerText = "DRAW";
            }
        }

    }
}

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const disableBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);