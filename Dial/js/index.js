import {
   tabs,
   burgerOpen,
   burgerTggle,
   burgerClose,
   openModal,
   closeModal,
} from './module.js';

window.tabs = tabs;
window.burgerOpen = burgerOpen;
window.burgerTggle = burgerTggle;
window.burgerClose = burgerClose;
window.openModal = openModal;
window.closeModal = closeModal;

new Swiper("#prices__slider", {
   slidesPerView: 1,
   spaceBetween: 20,
   touchRatio: 1,
   navigation: {
     nextEl: "#pricesNext ",
     prevEl: "#pricesPrev",
   },
   breakpoints: {
      900: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   },
 });

 new Swiper("#workUs__slider", {
   slidesPerView: 1,
   spaceBetween: 30,
   touchRatio: 1,
   navigation: {
     nextEl: "#workUsNext ",
     prevEl: "#workUsPrev",
   },
   breakpoints: {
      500: {
         slidesPerView: 2,
      },
      600: {
         slidesPerView: 3,
      },
      800: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
      1200: {
         slidesPerView: 6,
      },
      1400: {
         slidesPerView: 8,
         spaceBetween: 40,
      },
      1500: {
         spaceBetween: 60,
      },
      1600: {
         spaceBetween: 80,
      },
   },
 });
