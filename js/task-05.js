// Напиши скрипт который, при наборе текста 
// в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name
//   - output.Если инпут пустой, в спане должна 
//     отображаться строка "Anonymous".

const inputEL = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEL.addEventListener("input", entryName);



function entryName(event) {

  if (event.currentTarget.value === '') {
   return outputEl.textContent = 'Anonymous';
}
  outputEl.textContent= event.currentTarget.value;
 
};




