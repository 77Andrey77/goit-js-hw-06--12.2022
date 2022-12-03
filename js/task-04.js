
// Создай переменную counterValue в которой будет 
// храниться текущее значение счетчика и 
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри 
// которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  valueOut: document.querySelector('#value'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener('click', onDecrement);

function onDecrement() {
  counterValue -= 1;
  refs.valueOut.textContent = counterValue;

}

refs.btnIncrement.addEventListener('click', onIncrement);

function onIncrement() {
  counterValue += 1;
  refs.valueOut.textContent = counterValue;
}