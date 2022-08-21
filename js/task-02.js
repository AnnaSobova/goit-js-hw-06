const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navEl = document.querySelector("#ingredients");
const IngredientsEl = ingredients.map(ingredient =>{
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent= ingredient;
  return element; 
})

console.log(navEl);
console.log(IngredientsEl);

navEl.append(...IngredientsEl);


