'use strict';

/*=====================================
  generate random number between 1-20
=====================================*/
const randomNumber = Math.trunc(Math.random() * 20) + 1;

/*========================================
  set player's starting score & Highscore
========================================*/
let score = 20;
let highScore = 0;

/*===============
  Game elements
===============*/
const numberBox = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body');
const guessButton = document.querySelector('.guess');

/*=====================
  Change Game message
=====================*/
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/*===================================
  handle user click on check button
===================================*/
document.querySelector('.check').addEventListener('click', function () {
  /*=============================
    get player's Guessed number
  =============================*/
  const guessedNumber = Number(guessButton.value);

  /*===========================================
    Compare Random number with Guessed number
  ===========================================*/
  if (guessedNumber === randomNumber) {
    displayMessage('🏆 You win!');
    numberBox.textContent = guessedNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberBox.style.width = '25rem';

    /*==============================
      Implement high score feature
    ==============================*/
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (!guessedNumber) {
    displayMessage('👻 No Number');
  } else if (guessedNumber != randomNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > randomNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('😿 You Lose!');
      scoreElement.textContent = 0;
    }
  }
});

/*==================
  Restart the game
==================*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guessButton.value = null;
  numberBox.textContent = '?';
  numberBox.style.width = '15rem';
  scoreElement.textContent = score;
  displayMessage('Start guessing...');
  bodyElement.style.backgroundColor = '#222';
});
