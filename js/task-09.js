function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const spanText = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");


colorBtn.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
});

