import "./styles.css";
import { createImg, shuffle } from "./functions.js";
import img0_0 from "./images/uhm-0-0.jpg";
import img0_1 from "./images/uhm-0-1.jpg";
import img0_2 from "./images/uhm-0-2.jpg";
import img1_0 from "./images/uhm-1-0.jpg";
import img1_1 from "./images/uhm-1-1.jpg";
import img1_2 from "./images/uhm-1-2.jpg";
import img2_0 from "./images/uhm-2-0.jpg";
import img2_1 from "./images/uhm-2-1.jpg";
import img2_2 from "./images/uhm-2-2.jpg";

const puzzleContainer = document.querySelector(".puzzle-container");
// array to keep all the images
const images = [
  { pos: 0, elem: createImg(img0_0) },
  { pos: 1, elem: createImg(img1_0) },
  { pos: 2, elem: createImg(img2_0) },
  { pos: 3, elem: createImg(img0_1) },
  { pos: 4, elem: createImg(img1_1) },
  { pos: 5, elem: createImg(img2_1) },
  { pos: 6, elem: createImg(img0_2) },
  { pos: 7, elem: createImg(img1_2) },
  { pos: 8, elem: createImg(img2_2) },
];

// function that shuffles images array then appends each image to puzzleContainer
function displayShuffledImages() {
  let imagesCopy = [].concat(images);
  // remove the last img from imagesCopy
  imagesCopy.pop();
  // shuffle imagesCopy
  shuffle(imagesCopy);

  // append all imgs from imagesCopy to puzzleContainer
  imagesCopy.forEach((img) => {
    const imgElem = img.elem;
    imgElem.dataset.position = img.pos;
    puzzleContainer.append(imgElem);
  });

  let fifthChild = puzzleContainer.children[4];
  // append an empty div to puzzleContainer and swap the empty div with the fifth child
  puzzleContainer.append(document.createElement("div"));
  let emptyChild = puzzleContainer.lastChild;
  emptyChild.setAttribute("id", "empty");

  fifthChild.replaceWith(emptyChild);
  puzzleContainer.insertBefore(fifthChild, emptyChild.nextSibling);
}

// function for getting the row and col of the given tile in puzzleContainer
function getTileIndex(tile) {
  // create two vars: row and col for keeping track of the row and column
  let row = 1;
  let col = 1;

  // create a var currTile, that is used to loop through puzzleContainer.children
  let i = 0;
  let currTile = puzzleContainer.children[i];

  // loop through puzzleContainer.children until currTile matches the given tile
  while (i < 9) {
    // if currTile matches the given tile, return [row, col]
    if (currTile == tile) {
      return [row, col];
    }

    // if col is 3 increment row and reset col, else just increment col
    if (col === 3) {
      row++;
      col = 1;
    } else col++;

    // move to the next child element in puzzleContainer
    i++;
    currTile = puzzleContainer.children[i];
  }
}

displayShuffledImages();
