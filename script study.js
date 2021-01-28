'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

const circles = document.getElementsByClassName('circle');

console.log(circles);

hearts.forEach(item => {
   console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

