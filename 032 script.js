// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// // console.log(document.querySelector('[data-current = "3"]'));
// console.log(document.querySelector('[data-current = "3"]').previousSibling);
// console.log(document.querySelector('[data-current = "3"]').nextSibling);
// console.log(document.querySelector('[data-current = "3"]').nextElementSibling);
// console.log(document.querySelector('[data-current = "3"]')
// .previousElementSibling);


// способ перебрать в ноде ребенка элементы, исключив текстовые ноды
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}