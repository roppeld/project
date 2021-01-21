"use script";

const obj = {
   name: 'test',
   width: 1024,
   heigth: 1024,
   colors: {
       border: 'black',
       bg: 'red'
   },
   makeTest: function() {
       console.log("Test");
   }
};

obj.makeTest();

const {border, bg} = obj.colors; //вытаскивание этих частей из объекта
console.log(border); //теперь можно вызвать то, что нужно

console.log(Object.keys(obj));
console.log(Object.keys(obj).length); //узнать количество свойств в объекте
                                     // в одну строку, без перебора со счетчиком

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

