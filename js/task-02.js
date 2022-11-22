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


const ingredEl = document.querySelector('#ingredients');

const brrr = [];

for (const ing of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ing;
  liEl.classList.add('item');
  // ingredEl.append(liEl);
  brrr.push(liEl);
}

  ingredEl.append(...brrr);
