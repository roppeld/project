/* Задания на урок:

1) Реализовать функционал, что после заполнения формы 
и нажатия кнопки "Подтвердить" - новый фильм добавляется в список. 
Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как 
input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой,
 но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его 
и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из 
списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль 
 сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);
    
    const advs = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          filmsList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          addInput = form.querySelector('.adding_input'),
          checkbox = form.querySelector('[type="checkbox"]');
    
    form.addEventListener('submit', (event) => {
       event.preventDefault();

       const newFilm =addInput.value;
       const favorite = checkbox.checked;

       movieDB.movies.push(newFilm);
       sortArr(movieDB.movies);

       createFilmsList(filmsList, movieDB.movies);

       event.target.reset();
    });
    
    function deleteAds(arr) {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    function makeChanges() {
        poster.style.backgroundImage = 'url("bg.jpg")';

        genre.textContent = 'драма';
    }

    function createFilmsList(film, parent) {
        film.innerHTML = "";
    
    parent.forEach((film, i) => {
         parent.innerHTML += `
         <li class="promo__interactive-item">${i +1} ${film}
         <div class="delete"></div>
     </li>
         `;
    });
    }

    createFilmsList(filmsList, movieDB.movies);
    deleteAds(advs);
    makeChanges();
    sortArr(movieDB.movies);
});
