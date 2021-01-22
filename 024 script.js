/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. 
Представьте, что перед вами стоит задача переписать его так, чтобы все 
функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода 
к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять
 свойство privat. Если оно false - он переключает его в true, если 
 true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку 
"отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, 
как все жанры введены - при помощи метода forEach вывести в консоль 
сообщения в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) 
- это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");

      while(personalMovieDB.count == null || personalMovieDB.count == '' || 
                                        isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
      }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == true) {
            console.log(personalMovieDB);
        }
    },   
    toggleVisibleMyDB: function(hidden) {
         if (!hidden) {
             personalMovieDB.privat = true;
         } else {
             personalMovieDB.privat = false;
         }
    },
    writeGenres: function() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            count++;
            const a = prompt(`Ваш любимый жанр под номером ${count}`, '');
            if (a != '' && a != null) {
                personalMovieDB.genres[i] = a;
            } else {
                i--;
                count--;
            }

            //  const genre = prompt('Введите ваши любимые жанры через запятую')
            // .toLowerCase();
            // if (genre != '' && genre != null) {
            //     personalMovieDB.genres = genre.split(', ');
            // } else {
            //     i--;
            // }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`); 
        });
    },
    filmsDB: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцените его?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                personalMovieDB.movies[a] = b; 
            } else {
                console.log("error");
                i--;
            }
        }
    },
    identefitionStatus: function() {
        if(personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
         } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
             console.log("Вы классический зритель");
         } else if(personalMovieDB.count >= 30) {
             console.log("Вы киноман");
         } else {
             console.log("Произошла ошибка");
         }
    }
};