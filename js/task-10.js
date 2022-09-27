// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const inputNum = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
let size = 30;
const inputAmount = number => {
  const elements = [];
 const counter = inputNum.value;
  for (let i = 0; i < counter; i++) {
    const div = document.createElement('div');
    div.style.height = `${size += 10}px`;
    div.style.width = `${size}px`;
    div.style.background = getRandomHexColor();
    elements.push(div);
  }
  console.log(elements);
  boxes.append(...elements);
};

const btnCreate = document.querySelector('[data-create]');
btnCreate.addEventListener('click', inputAmount )

const btnDestroy = document.querySelector('[data-destroy]');
btnDestroy.addEventListener('click', destroy);

function destroy() {
  boxes.innerHTML = '';
}


