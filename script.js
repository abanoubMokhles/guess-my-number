"use strict";

/*=========================
  Selecting Game Elements
=========================*/
const guessedNumberBox = document.querySelector(".number");
const numberInputElement = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

/*=========================
  Game Initial State
=========================*/
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

/*=========================
    Starting the Game
=========================*/
guessedNumberBox.textContent = secretNumber;
checkButton.addEventListener("click", function () {
  const guessedNumber = +numberInputElement.value;
  if (!guessedNumber) {
    message.textContent = "⛔ Enter a valid number";
    return;
  }
  if (guessedNumber === secretNumber) {
    message.textContent = "🏆 You Win";
  }
  if (guessedNumber > secretNumber) {
    if (score > 1) {
      message.textContent = "☝ High Number";
      score--;
      scoreElement.textContent = score;
    } else {
      message.textContent = "💥 Game Over";
      score = 0;
      scoreElement.textContent = score;
    }
  }
  if (guessedNumber < secretNumber) {
    if (score > 1) {
      message.textContent = "👇 Low Number";
      score--;
      scoreElement.textContent = score;
    } else {
      message.textContent = "💥 Game Over";
      score = 0;
      scoreElement.textContent = score;
    }
  }
});
