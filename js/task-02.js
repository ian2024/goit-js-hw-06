/*Напиши скрипт, который для каждого элемента массива ingredients:
Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients.*/



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let newItemCreate = ingredients.map(ingredient => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  
  return newItem;
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...newItemCreate);