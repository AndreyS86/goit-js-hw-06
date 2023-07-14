const input = document.getElementById(`validation-input`);
console.log(input);

input.addEventListener("blur", inputBlur);

function inputBlur(evt) {
  if (evt.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");

  }
}
