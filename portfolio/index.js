function score(){
    console.log(' Вёрстка соответствует макету 48/48\n Ни на одном из разрешений не появляется горизонтальная полоса прокрутки 15/15\n Адаптивное меню 22/22');
};

score();

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.navigation__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click' , () => {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 768) {
        for (let i=0; i < menuLinks.length; i +=1){
            menuLinks[i].addEventListener('click' , () => {
                menu.classList.remove('header__nav_active');
            })
        }
    }
}());