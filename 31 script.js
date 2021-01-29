const btns = document.querySelectorAll('button');


// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hi'); 
// });

// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });

 //let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.addEventListener('click', deleteElement);

