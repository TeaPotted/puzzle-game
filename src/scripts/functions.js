// function for creating DOM img elements
import { isPuzzleSolved } from "./tiles.js";
import { loseGame } from "./game-endings.js";
import { displayStartScreen } from "./display.js";

function createImg(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

// function for creating a div
function createDiv(cls) {
  const div = document.createElement("div");
  div.classList.add(cls);
  return div;
}

// function for creating a p element
function createH3(cls, text) {
  const h3 = document.createElement("h3");
  h3.classList.add(cls);
  h3.textContent = text;
  return h3;
}

// shuffles the given array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let timer;
// function that starts the timer
function startTimer() {
  let sec = 44;

  timer = setInterval(() => {
    document.querySelector(".timer").textContent =
      `00:${sec < 10 ? "0" + sec : sec}`;
    sec--;
    // if sec reached 0, stop the timer and call loseGame()
    if (sec === -1) {
      clearInterval(timer);
      if (!isPuzzleSolved()) loseGame();
    }
  }, 100);
}

// function to stop timer
function stopTimer() {
  clearInterval(timer);
  timer = undefined;
}

// function that resets the game
function reset() {
  // remove win-div / lose-div from body
  document.body.removeChild(document.body.children[1]);
  // reset p.timer textContent
  document.querySelector(".timer-container > p.timer").textContent = "00:45";
  // remove puzzleContainer's children
  document.querySelector(".puzzle-container").textContent = "";
  displayStartScreen();
}

export {
  createImg,
  shuffle,
  createDiv,
  createH3,
  startTimer,
  stopTimer,
  reset,
};
