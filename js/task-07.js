/*Напиши скрипт, который реагирует на изменение значения
input#font-size-control (событие input) и изменяет 
инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться
размер текста.*/

const refs = {
  sizeInput: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.sizeInput.addEventListener('input', function () {
  const sizeValue = refs.sizeInput.value;
  refs.text.style.fontSize = sizeValue + 'px';
});