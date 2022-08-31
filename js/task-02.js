const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

(function (ingredients) {
  const listOfIngredients = document.querySelector('#ingredients');

  const listFromArray = [];

  ingredients.forEach((ingredient) => {
    const elem = document.createElement('li');
    elem.classList.add('item');
    elem.textContent = ingredient;
    listFromArray.push(elem.outerHTML);
  });

  listOfIngredients.innerHTML = listFromArray.join('');
})(ingredients);
