/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". 
Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных 
из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const advs = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      filmsList = document.querySelector('.promo__interactive-list'),
      films = filmsList.querySelectorAll('.promo__interactive-item');

advs.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

filmsList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
     filmsList.innerHTML += `
     <li class="promo__interactive-item">${i +1} ${film}
     <div class="delete"></div>
 </li>
     `;
});

poster.style.backgroundImage = 'url("bg.jpg")';