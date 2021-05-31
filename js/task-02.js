const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsListEl = document.querySelector('ul');   /*Получение ссылки на елемент ul для его редактирования*/

/*Создание массива ингредиентов через map*/
const elements = ingredients.map(ingredient => {
    const ingredientsItemEl = document.createElement('li');   /*Создание новых елементов li в памяти*/
    ingredientsItemEl.textContent = ingredient;  /*Добавление текстового контента для новых елементов li в памяти*/
    
    return ingredientsItemEl;   /*Возвращение новых елементов li из .map*/
});

console.log(elements);   /*Выведение в консоль массива елементов li*/
ingredientsListEl.append(...elements);   /*Выведение массива как колекции независимых аргументов*/