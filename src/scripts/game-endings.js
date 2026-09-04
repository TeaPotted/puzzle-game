import img2_2 from "../images/uhm-2-2.jpg";
import { createImg, stopTimer } from "./functions.js";
import { displayWinScreen, displayLoseScreen } from "./display.js";
const puzzleContainer = document.querySelector(".puzzle-container");

// function for when the player loses the game
function loseGame() {
  // remove all onlcick functions in puzzleContainer.children and call loseGame()
  [...puzzleContainer.children].map((el) => (el.onclick = ""));
  setTimeout(() => {
    displayLoseScreen();
  }, 1500);
}

// function for when player solves the game
function winGame() {
  stopTimer();
  // replace the empty div with the missing img
  const lastImg = createImg(img2_2);
  lastImg.id = "last-piece";

  // remove onclick function on all children in puzzleContainer
  [...puzzleContainer.children].map((el) => {
    el.onclick = "";
  });
  puzzleContainer.querySelector("#empty").replaceWith(lastImg);

  setTimeout(() => {
    displayWinScreen();
  }, 1500);
}

export { winGame, loseGame };
