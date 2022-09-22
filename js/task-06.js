/*Напиши скрипт, который при потере фокуса 
на инпуте (событие blur), проверяет его 
содержимое на правильное количество введённых 
символов.
Сколько символов должно быть в инпуте, 
указывается в его атрибуте data-length.
Если введено подходящее количество символов, 
то border инпута становится зелёным, если 
неправильное - красным.
Для добавления стилей, используй CSS-классы 
valid и invalid, которые мы уже добавили в 
исходные файлы задания.*/

const passwordInput = document.querySelector('#validation-input');

passwordInput.addEventListener('blur', checkInputLength);

function checkInputLength(event) {
  if (event.currentTarget.value.length == passwordInput.dataset.length) {
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
  } else {
    passwordInput.classList.remove('valid');
    passwordInput.classList.add('invalid');
  }
}