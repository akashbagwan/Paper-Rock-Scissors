let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");
const reset = document.querySelector("#resetBtn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw game conditions
const drawGame = () => {
  console.log("Draw Game ");
  message.innerText = "Game Was Draw. Play Again...";
  message.style.backgroundColor = " #081b31";
};

// Show Winner Code
const showWinner = (userWin) => {
  if (userWin) {
    console.log("You Win");
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = "You Win";
    message.style.backgroundColor = "green";
  } else {
    console.log("Computer Win");
    computerScore++;
    computerScorePara.innerText = computerScore;
    message.innerText = "Computer Win";
    message.style.backgroundColor = "red";
  }
};

// play game and calling show winner
const playGame = (userChoise) => {
  console.log("user Choice", userChoise);
  const computerChoice = genCompChoice();
  console.log("computer choice", computerChoice);

  if (userChoise === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoise === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choices);
  choice.addEventListener("click", () => {
    const userChoise = choice.getAttribute("id");
    console.log("choice was  clicked", userChoise);

    playGame(userChoise);
  });
});

// reset btn code
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  userScorePara.innerText = userScore;
  computerScorePara.innerText = computerScore;
  message.innerText = "Game Reset. Start Again!";
  message.style.backgroundColor = "#081b31";
};

reset.addEventListener("click", resetGame);

// reset.addEventListener("click", () => {
//   userScore = 0;
//   computerScore = 0;
//   userScorePara.innerText = userScore;
//   computerScorePara.innerText = computerScore;
//   message.innerText = "Game Reset. Start Again!";
//   message.style.backgroundColor = "#081b31";
// });
