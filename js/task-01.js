/*Напиши скрипт который:
Посчитает и выведет в консоль количество категорий 
в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories,
найдет и выведет в консоль текст заголовка элемента
(тега < h2 >) и количество элементов в категории
(всех вложенных в него < li >).*/

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const countCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${countCategories}`);

const categoryName = document.querySelectorAll('.item').forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});