// Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//   найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//    и количество элементов в категории(всех вложенных в него < li >).


const categoriesEl = document.querySelector('#categories');


console.log(`Number of categories: ${categoriesEl.children.length}`);
console.log('');

// const itemElements = document.querySelectorAll('.item');

for (const item of categoriesEl.children) {
  console.log(`Category:  ${item.firstElementChild.textContent}`);
  console.log(`Elements:  ${item.lastElementChild.children.length}`);
console.log('');

}