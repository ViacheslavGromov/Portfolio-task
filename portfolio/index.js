import i18Obj from './translate.js';

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
   if (event.target.classList.contains('portfolio__button_hidden')) { 
    portfolioImages.forEach((img, index) => img.src = 
    `assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
   }
}

portfolioBtns.addEventListener('click', changeImage);

// portfolio btns

let activePortfolioBtn = document.querySelectorAll('.portfolio__button_hidden');
activePortfolioBtn.forEach(portfolio__button_hidden => {
   portfolio__button_hidden.addEventListener('click', function () {
      activePortfolioBtn.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
   })
})


// change lng

const langRu = document.querySelector('.header__btn-ru');
const langEn = document.querySelector('.header__btn-en');

function getTranslate(lang) {
   const text = document.querySelectorAll('[data-i18');
   text.forEach((elements) => {
      elements.textContent = i18Obj[lang][elements.dataset.i18];
   })

}

langRu.addEventListener('click', () => {
   getTranslate('ru');
 })
 langEn.addEventListener('click', () => {
   getTranslate('en');
 })

 let activeBtn = document.querySelectorAll('.header__btn');
 activeBtn.forEach(header__btn => {
   header__btn.addEventListener('click', function () {
      activeBtn.forEach(btn => btn.classList.remove('active'));
       this.classList.add('active');
    })
 })


//  change theme
