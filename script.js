"use strict";

let targetNum = Math.trunc(Math.random() * 20 + 1);

console.log(document.querySelector(".guess").value);
let yourScore = 20;
document.querySelector(".score").textContent = yourScore;
let highScore = 0;

const checkButton = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const geussValue = Number(document.querySelector(".guess").value);
    if (geussValue === targetNum) {
      document.querySelector(".message").textContent = "🏆 you win";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = targetNum;
      if (yourScore > highScore) {
        highScore = yourScore;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (!geussValue) {
      document.querySelector(".message").textContent = "🚫 no number ";
    } else if (geussValue > targetNum) {
      if (yourScore > 1) {
        yourScore--;
        document.querySelector(".message").textContent =
          "your guess is higher than the Number";
        document.querySelector(".score").textContent = yourScore;
      } else {
        document.querySelector(".message").textContent = "you lost";
        document.querySelector(".score").textContent = 0;
        document.querySelector(".number").textContent = targetNum;
      }
    } else if (geussValue < targetNum) {
      if (yourScore > 1) {
        yourScore--;
        document.querySelector(".message").textContent =
          "your guess is lower than the number";
        document.querySelector(".score").textContent = yourScore;
      } else {
        document.querySelector(".message").textContent = "you lost";
        document.querySelector(".score").textContent = 0;
        document.querySelector(".number").textContent = targetNum;
      }
    }
  });
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  targetNum = Math.trunc(Math.random() * 20 + 1);
});
