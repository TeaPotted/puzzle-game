import img0_0 from "../images/uhm-0-0.jpg";
import img0_1 from "../images/uhm-0-1.jpg";
import img0_2 from "../images/uhm-0-2.jpg";
import img1_0 from "../images/uhm-1-0.jpg";
import img1_1 from "../images/uhm-1-1.jpg";
import img1_2 from "../images/uhm-1-2.jpg";
import img2_0 from "../images/uhm-2-0.jpg";
import img2_1 from "../images/uhm-2-1.jpg";
import img2_2 from "../images/uhm-2-2.jpg";
import { createImg, shuffle } from "./functions.js";

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
  // make each child in puzzleContainer call swapTile() when clicked
  Array.from(puzzleContainer.children).map((el) => {
    el.onclick = () => swapTile(el);
  });
}

export { displayShuffledImages };
