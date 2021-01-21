"use script";

const obj = {
   name: 'test',
   width: 1024,
   heigth: 1024,
   colors: {
       border: 'black',
       bg: 'red'
   }
};

console.log(Object.keys(obj));

let counter = 0;
for (let key in obj) {
    if (typeof(obj[key] === 'object')) {
        for (let i in obj[key]) {
            console.log(`Свойство ${i}: имеет значение ${obj[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key}: имеет значение ${obj[key]}`);
        counter++;
    }
}
console.log(counter);

