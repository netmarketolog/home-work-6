const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const listNew = document.querySelector("#ingredients");
const ingredientsRef = ingredient => {
    const elLi = document.createElement("li")
    elLi.classList = "item"
    elLi.textContent = ingredient
    return elLi
}

const elm = ingredients.map(ingredientsRef)
console.log(...elm);
listNew.append(...elm)