"use strict";

const message = document.querySelector(".message");
const resetButton = document.querySelector(".btnreset");
const box = document.querySelector(".number");
const checkButton = document.querySelector(".btncheck");
const guessNumber = document.querySelector(".guess");

const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

let scores = 20;
let highestScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

checkButton.addEventListener("click", function () {
  if (Number(guessNumber.value) === randomNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    message.textContent = "Correct answer!";
    box.textContent = randomNumber;
    if (scores > highestScore) {
      highestScore = scores;
      message.textContent = "Correct answer!";
      highScore.textContent = scores;
      box.textContent = randomNumber;
      document.querySelector("body").style.backgroundColor = "green";
    }
  } else {
    scores -= 1;
    score.textContent = scores;
    message.textContent = "Wrong Answer...";
   
  }
});

resetButton.addEventListener("click", function () {
  checkButton.disabled = false;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  scores = 20;
  score.textContent = scores;
  message.textContent = "Start guessing...";
  box.textContent = "?";
  document.querySelector("body").style.backgroundColor = "brown";
  guessNumber.value = "";
});
