const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEL = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const liEl = document.createElement('li');
  const text = document.createTextNode(ingredient);
  liEl.appendChild(text);
  liEl.className = 'item';
  listEL.appendChild(liEl);
}