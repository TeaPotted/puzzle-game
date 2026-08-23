// function for creating DOM img elements
function createImg(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

// shuffles the given array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [array[i], array[j]] = [array[j], array[i]]
  }
}


export { createImg, shuffle };
