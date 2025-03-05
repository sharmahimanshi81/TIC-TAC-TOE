let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbutton");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgcontiner = document.querySelector(".msg-container");

let turn0 = true; 

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgcontiner.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations  🎉 🎉, Winner is ${winner}`;
  msgcontiner.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of win) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 !== "" && p1 === p2 && p2 === p3) {
      showWinner(p1);
      return;
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
