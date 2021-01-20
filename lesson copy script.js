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

const numbers = {
    a: 2,
    b: 5,
    c: {
      x: 4,
      y: 7
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 4,
    f: 8
};

console.log(Object.assign(numbers, add));
const cloneAdd = Object.assign({}, add);

cloneAdd.d = 45;

console.log(add);
console.log(cloneAdd);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sfsfsdfsdf';
console.log(oldArray);
console.log(newArray);
