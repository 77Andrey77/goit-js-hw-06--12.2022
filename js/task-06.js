// Напиши скрипт, который при потере фокуса на
// инпуте(событие blur), проверяет его содержимое 
// на правильное количество введённых символов.

// Сколько символов должно быть в инпуте,
//   указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border 
// инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и
// invalid, которые мы уже добавили в исходные файлы задания.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onBlurValidation);

function onBlurValidation(event) {
  // const lengtData = Number(validationInput.getAttribute('data-length'));
    const lengtData = Number(validationInput.dataset.length);

  
  if (event.currentTarget.value.length ===lengtData) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}