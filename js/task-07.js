const inputEl = document.getElementById('font-size-control');
const valueEl = document.getElementById('text');


inputEl.addEventListener('input', function () {
    valueEl.style.fontSize = inputEl.value + "px" ;
});