// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент < li >.Обзательно используй
//  метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrey = [];

for (const ingr of ingredients) {
  const liNewElement = document.createElement('li');
  liNewElement.textContent = ingr;
  liNewElement.classList.add('item');
  arrey.push(liNewElement);
}

  
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...arrey);

