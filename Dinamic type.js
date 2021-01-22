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
