function score(){
    console.log('Вёрстка валидная 10/10\n Вёрстка семантическая 20/20\n Вёрстка соответствует макету 48/48\n Требования к css 12/12\n Интерактивность, реализуемая через css 20/20');
};

score();

(function () {
    const burgerItem = document.querySelector('.burger');
    burgerItem.addEventListener('click', () =>{
        console.log(123);
    })
}());