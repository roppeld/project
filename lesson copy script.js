"use strict";

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let copyObj = {};

    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}

const numbers = {//при копировании ключей и значений объектов, что происходит через цикл for in
    //где каждая итерация создает новый ключ, в который копируется ключ копируемого объекта
    a: 2,//из которого подтягивается его значение, так и рабоатет процесс копирования значения объектов
    b: 5,
    c: {//доходя до этого места, проихсодит сохранение не значений клюса с, а ссылки на этот ключ 
      x: 4,//у объекта ,который нужно скопировать, т.е. новый объект будет содержать не значения
      y: 7//а тупо ссылку на старый объект и любые манипуляции будут уже над этим старым объектом 
    }//и при этом новый объект просто будет сожержать в себе ссылку на старый, просто покажет его содержимое
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;//манипулиции с ключом с объекта numbers

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 4,
    f: 8,
    g: {
        v: 5,
        b: 0,
        e: {
            r: 5555,
            eee: 43543534
        }
    }
};

const numbersUpgrade = Object.assign(numbers, add);//метод Object.assign копирует один массив в другой, но точно также не копирует глубже первого уровня, а создает ссылку

console.log(numbersUpgrade);

numbersUpgrade.g.e.eee = 1;
console.log(numbersUpgrade);
console.log(add);

const cloneAdd = Object.assign({}, add);

cloneAdd.d = 45;


console.log(add);
console.log(cloneAdd);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sfsfsdfsdf';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook', 'github'];//здесь участвует оператор spread (три точки перед именем переменной), он разбирает на отдельные части массив/объект, все элементы 
      //по кусочкам переместит в новый (или куда укажут)

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 7];

log(...num);

const array = ['a', 'b', 'c'];
const newAaray = [...array];

console.log(newAaray);

const q = {
  one: 1,
  two: 2
};

const newObbj = {...q};

