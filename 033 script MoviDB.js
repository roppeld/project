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
    
    const advs = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
       event.preventDefault();

       let newFilm = addInput.value;
       const favorite = checkbox.checked;

        if (newFilm) {

        if (newFilm.length >= 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;   
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
 
            createFilmsList(movieDB.movies, movieList);
        }

       event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        poster.style.backgroundImage = 'url("bg.jpg")';

        genre.textContent = 'драма';
    };

    function createFilmsList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
    films.forEach((film, i) => {
         parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();//splice вырезает определенный
            movieDB.movies.splice(i, 1);// элемент с массива 1 - сколько удалить

            createFilmsList(films, parent);
        });
    });
    }
    
    deleteAdv(advs);
    makeChanges();
    createFilmsList(movieDB.movies, movieList);
});
