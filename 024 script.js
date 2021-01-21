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

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyBD() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        count++;
        const a = prompt(`Ваш любимый жанр под номером ${count}`, '');
        personalMovieDB.genres[i] = a;
    }

}

function filmsDB() {
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
}

filmsDB();

function identefitionStatus() {
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

identefitionStatus();

writeYourGenres();
showMyBD();