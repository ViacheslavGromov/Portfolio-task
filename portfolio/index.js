import i18Obj from './translate.js';



// burger

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
   toggleActivePortfolioBtn(event);
}

portfolioBtns.addEventListener('click', changeImage);

// portfolio btns
const activePortfolioBtn = [...document.querySelectorAll('.portfolio__button_hidden')];

const toggleActivePortfolioBtn = (event) => {
   activePortfolioBtn.forEach((elements) => {
      elements.classList.remove('active');
   });
   event.target.classList.add('active')
}

// change lng

const langRu = document.querySelector('.header__btn-ru');
const langEn = document.querySelector('.header__btn-en');

function getTranslate(lang) {
   const text = document.querySelectorAll('[data-i18');
   text.forEach((elements) => {
      elements.textContent = i18Obj[lang][elements.dataset.i18];
   })
   toogleActiveLangBtn(event)
}

langRu.addEventListener('click', () => {
   getTranslate('ru');
 })
 langEn.addEventListener('click', () => {
   getTranslate('en');
 })
 
// lang btn

const activeLangBtn = [...document.querySelectorAll('.header__btn')];

const toogleActiveLangBtn = (event) => {
   activeLangBtn.forEach((elements) => {
      elements.classList.remove('active');
   });
   event.target.classList.add('active');
}

//  change theme
