
// Создай переменную counterValue в которой будет 
// храниться текущее значение счетчика и 
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри 
// которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


const increment = () => {
  counterValue -= 1;
  // console.log(counterValue);
valueEl.textContent = counterValue;
  
}

const decrement = () => {
  counterValue += 1;
  // console.log(counterValue);
valueEl.textContent = counterValue;
  
}

decrementEl.addEventListener('click', increment);

incrementEl.addEventListener('click', decrement);
