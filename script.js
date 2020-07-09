const message = document.querySelector('.message');
const reset = document.getElementById('reset');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let compScore = document.getElementById('compscore').value;
let userScore = document.getElementById('userscore').value;

compScore = 0;
userScore = 0;

let comp = 0;

const computer = () => {
  comp = Math.floor(Math.random() * 3) + 1;
};

const playerChooseRock = () => {
  computer();
  if (rock.value == '1') {
    player = 1;
    if (player == 1 && comp == 1) {
      message.textContent = 'Rock vs Rock -- Draw 🤜🤛';
    } else if (player == 1 && comp == 2) {
      compScore++;
      compscore.textContent = compScore;
      message.textContent =
        'Paper covers Rock -- You lost...☠️ ';
    } else if (player == 1 && comp == 3) {
      userScore++;
      userscore.textContent = userScore;
      message.textContent =
        'Rock beats Scissors -- You Win 💪';
    }
  }
};

const playerChoosePaper = () => {
  computer();
  if (paper.value == '2') {
    player = 2;
    if (player == 2 && comp == 1) {
      userScore++;
      userscore.textContent = userScore;
      message.textContent =
        'Paper covers Rock -- You Win 💪';
    } else if (player == 2 && comp == 2) {
      message.textContent =
        'Paper vs Paper -- Draw 🤜🤛';
    } else if (player == 2 && comp == 3) {
      compScore++;
      compscore.textContent = compScore;
      message.textContent =
        'Paper loses to Scissors -- You lost...☠️ ';
    }
  }
};

const playerChooseScissors = () => {
  computer();
  if (scissors.value == '3') {
    player = 3;
    if (player == 3 && comp == 1) {
      compScore++;
      compscore.textContent = compScore;
      message.textContent =
        'Scissors loses to Rock -- You lost...☠️ ';
    } else if (player == 3 && comp == 2) {
      userScore++;
      userscore.textContent = userScore;
      message.textContent =
        'Scissors cut Paper -- You Win 💪';
    } else if (player == 3 && comp == 3) {
      message.textContent =
        'Scissors vs Scissors -- Draw 🤜🤛';
    }
  }
};

const resetGame = () => {
  location.reload()
};


rock.addEventListener('click', playerChooseRock);
paper.addEventListener('click', playerChoosePaper);
scissors.addEventListener('click', playerChooseScissors);
reset.addEventListener('click', resetGame);
