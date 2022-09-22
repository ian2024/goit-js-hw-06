/*Счетчик состоит из спана и кнопок, которые, при клике, 
должны увеличивать и уменьшать его значение на единицу.
Создай переменную counterValue в которой будет храниться текущее 
значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай 
или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

const refs = {
  value: document.querySelector('#value'),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
};

let counterValue = Number(refs.value.textContent);

refs.decrement.addEventListener('click', function () {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});

refs.increment.addEventListener('click', function () {
  counterValue += 1;
  refs.value.textContent = counterValue;
});