const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function getRandomColor() {
  let hexCode = "#",
    randomNumberIndex;
  for (let i = 0; i < 6; i++) {
    randomNumberIndex = Math.floor(16 * Math.random() + 0);
    hexCode += hexArray[randomNumberIndex];
  }
  return hexCode;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = getRandomColor();

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
