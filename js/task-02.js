const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById(`ingredients`);

const listEl = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join(" ");
console.log(listEl);

ingredientsList.insertAdjacentHTML(`afterbegin`, listEl);
console.log(ingredientsList);

// listEl.textContent = `Potatoes`;
// listEl.classList.add(`item`);
// console.log(listEl);

// const ingredientsEl = document.getElementById(`ingredients`);
// ingredientsEl.append(listEl)
// console.log(ingredientsEl);
