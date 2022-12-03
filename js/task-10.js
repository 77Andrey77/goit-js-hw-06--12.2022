// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько указано
//  в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestory: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.buttonCreate.addEventListener('click', getNumberBoxes);
refs.buttonDestory.addEventListener('click', destroyBoxes);

function getNumberBoxes() {
  let amount = Number(refs.input.value);
  createBoxes(amount);
}
  let array = [];


function createBoxes(amount) {
  // console.log(Number(refs.input.value));
  const baseSize = 30;

  for (let i = 0; i < amount; i++){
    const divEl = document.createElement('div');
    let size = baseSize + 10 * i;
    divEl.style.width = `${size}px`;
    divEl.style.height =`${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    array.push(divEl);
  }

  refs.boxes.append(...array);
  refs.input.value='';
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
array = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}