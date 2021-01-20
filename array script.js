"use strict";

  const arr = [2, 1, 5, 3, 6, 8];
  arr.sort();
  console.log(arr);

//  arr.forEach(function(item, i, arr) { // колбэк функция будет для каждого 
//      console.log(`${i}: ${item} внутри массива ${arr}`); // элемента массива
//  });

// arr.pop();
// arr.push(10);

// //console.log(arr); 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('','');
const products = str.split(", ");
products.sort();
// console.log(products);
console.log(products.join(' - '));
