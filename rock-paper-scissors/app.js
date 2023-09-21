const btns = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};
const game = (user, computer) => {
  let message;
  if (user === computer) {
    // console.log("무승부");
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        // console.log("user 승리");
        message = "user 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        // console.log("computer 승리");
        message = "computer 승리";
        break;
    }
  }
  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  //   console.log("user : " + user, "computer : " + computer);
  game(user, computer);
};
btns.forEach((button) => {
  button.addEventListener("click", play);
});
