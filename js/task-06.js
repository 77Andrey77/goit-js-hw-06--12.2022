
const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', validation);


function validation(event) {
  if (event.currentTarget.value.length=== Number(validationInputEl.dataset.length)) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
// console.log(event.currentTarget.value.length);
}