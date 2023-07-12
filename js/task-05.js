const input = document.getElementById(`name-input`)
const span = document.getElementById(`name-output`)

input.addEventListener("input", (event)=> {
    span.textContent=event.currentTarget.value ===
    ""?"Anonymous":event.currentTarget.value});
    