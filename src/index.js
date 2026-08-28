import "./styles.css";
import { displayShuffledImages } from "./scripts/display.js";

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

// function for checking if the given tile is allowed to swap with the empty div
function isSwapValid(tile) {
  const [eX, eY] = getTileIndex(puzzleContainer.querySelector("#empty"));
  const targetTileIndex = getTileIndex(tile);
  // create an array of all adjacent tile indexes from div#empty
  let possibleMoves = [
    [eX - 1, eY], // left
    [eX + 1, eY], // right
    [eX, eY - 1], // down
    [eX, eY + 1], // up
  ];

  // filter out the illegal moves (moves that are out of bounds)
  possibleMoves = possibleMoves.filter((index) => {
    if (index[0] >= 1 && index[0] <= 3 && index[1] >= 1 && index[1] <= 3)
      return index;
  });

  // if targetTileIndex exists in possibleMoves then return true, else return false
  return possibleMoves.some((a) => targetTileIndex.every((v, i) => v === a[i]));
}

// function for swapping the given img elem with the empty div in .puzzleContainer
function swapTile(tile) {
  // if it is allowed to swap the given tile with the empty tile, swap the tiles
  if (isSwapValid(tile)) {
    const emptyTile = puzzleContainer.querySelector("#empty");
    const temp = puzzleContainer.insertBefore(
      document.createElement("a"),
      tile,
    );
    puzzleContainer.insertBefore(tile, emptyTile);
    puzzleContainer.insertBefore(emptyTile, temp);
    puzzleContainer.removeChild(temp);
  } else return; // else, do nothing
}

displayShuffledImages();
