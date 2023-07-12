function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.body;
const spanText = document.querySelector('.color');
const colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  spanText.textContent = colorEl;