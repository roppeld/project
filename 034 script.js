//мобильное событие 
'use script';

window.addEventListener('DOMContentLoaded', () => {
    
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        // console.log(e.touches); 
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); //обращаясь к первому пальцу
                                              //на конкретном элементе просим
                                              //у него координаты
    });
    
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });


}); 