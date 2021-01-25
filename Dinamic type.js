"use script";

//1) метод typeof(); To String

console.log(typeof(String(null))); //сделает null строкой, подойдет и число  

//2) конкатенация сделает всё строкой

console.log(typeof(5 + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num); //устаревшее

// To Number

//1)

console.log(typeof(Number('4')));

//2) унарный плюс

console.log(typeof(+'5'));

// 3)

console.log(parseInt("15px", 10));

// To Boolean 
//пустота или ничего, всегда будет ложью
// 0, '', null, undefined (что-то но без значения), NaN (специальное
// значение числового типа) и всё это будет превращаться в false

//правдой в логическом контексте будут пустые массивы, пустые объекты
// строки  и все остальное будет правдой в логическом контексте true
// 1)
let swither = null; // заработает с swither = 1

if (swither) { //работать не будет, потому что null - false, а условие
    console.log('Working...'); // нуждается в true
}

//2) 
console.log(typeof(Boolean('4'))); //same, but for boolean

//3) 
console.log(typeof(!!"44444")); // boolean type, very rare method

console.log(typeof(4 && 1));

console.log(3 || 4);
console.log(4 || 3);
console.log(typeof(Infinity));
console.log("ёжик" > "яблоко");

