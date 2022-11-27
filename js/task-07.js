// Напиши скрипт, который реагирует на изменение 
// значения input#font - size - control
//   (событие input) и изменяет инлайн - стиль 
//   span#text обновляя свойство font - size.
//   В результате при перетаскивании ползунка будет
//    меняться размер текста.

const fontSizeControlEL = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text');


fontSizeControlEL.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  console.log(event.currentTarget.value);
  textEL.style.fontSize = event.currentTarget.value + 'px';
}