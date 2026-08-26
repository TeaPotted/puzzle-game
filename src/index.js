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
