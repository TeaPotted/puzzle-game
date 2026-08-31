// function for creating DOM img elements
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

export { createImg, shuffle, createDiv, createH3 };
