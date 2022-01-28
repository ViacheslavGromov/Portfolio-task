function score(){
    console.log('Вёрстка валидная 10/10\n Вёрстка семантическая 20/20\n Вёрстка соответствует макету 48/48\n Требования к css 12/12\n Интерактивность, реализуемая через css 20/20');
};

score();

// new version burger

     const burger = document.querySelector('.burger');
     const nav = document.querySelector('.header__navigation');
     const body = document.querySelector('.body__menu-active');

     burger.addEventListener('click', () => {
        nav.classList.toggle('header__nav_active');
        burger.classList.toggle('open');
        body.classList.toggle('.navigation__shadow');
     });

     const navLinks = document.querySelectorAll('.navigation__link');

     function closeMenu(event){
        if (event.target.classList.contains('navigation__link')) {
           nav.classList.remove('header__nav_active');
           burger.classList.remove('open');
           body.classList.remove('navigation__shadow');
        }
     }

     navLinks.forEach((el) => el.addEventListener('click', closeMenu));


// portfolio func
const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.portfolio__image');

function changeImage(event) {
   if (event.target.classList.contains('main__button_hidden')) { 
    portfolioImages.forEach((img, index) => img.src = 
    `assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
   }
}

portfolioBtns.addEventListener('click', changeImage);






// commited working version burger  (function () {
//     const burgerItem = document.querySelector('.burger');
//     const menu = document.querySelector('.header__navigation');
//     const menuCloseItem = document.querySelector('.header__nav-close');
//     const menuLinks = document.querySelectorAll('.navigation__link');
//     burgerItem.addEventListener('click', () => {
//         menu.classList.add('header__nav_active');
//     });
//     menuCloseItem.addEventListener('click' , () => {
//         menu.classList.remove('header__nav_active');
//     });
//     if (window.innerWidth <= 768) {
//         for (let i=0; i < menuLinks.length; i +=1){
//             menuLinks[i].addEventListener('click' , () => {
//                 menu.classList.remove('header__nav_active');
//             })
//         }
//     }
// }());
