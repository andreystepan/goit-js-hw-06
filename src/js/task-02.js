const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredients = arrayIngredients => {
  return arrayIngredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;


    return itemEl;
  })
}

const element = makeIngredients(ingredients);

ingredientsEl.append(...element)
