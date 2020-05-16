import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/owl.carousel.js';
import 'owl.carousel';

import './../blocks/header/header.js'
import './../blocks/logo/logo.js'
import './../blocks/menu/menu.js'
import './../blocks/input/input.js'
import './../blocks/checkbox/checkbox.js'
import './../blocks/button/button.js'
import './../blocks/textarea/textarea.js'
import './../blocks/table-gold/table-gold.js'
import './../blocks/slider/slider.js'
import './../blocks/blocks-row/blocks-row.js'
import './../blocks/card-link/card-link.js'
import './../blocks/banner/banner.js'
import './../blocks/evaluation/evaluation.js'
import './../blocks/calculator/calculator.js'
import './../blocks/dropdown-desc/dropdown-desc.js'
import './../blocks/calc-item/calc-item.js'
import './../blocks/info-main-block/info-main-block.js'
import './../blocks/block-accept/block-accept.js'
// import './../blocks/steps/steps.js'
import './../blocks/conditions/conditions.js'
import './../blocks/conditions-card/conditions-card.js'
import './../blocks/footer/footer.js'

$(document).ready(function() {
    jQuery('#carouselSteps').owlCarousel({
        items: 3, //Кол-во отображаемых элементов
        loop:false, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        dots:true,
        nav:true, //Отключение навигации
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            // 600:{
            //     items:2
            // },
            768:{
                items:3
            }
        }
    });
});

$(document).ready(function() {
    jQuery('#carouselExamples').owlCarousel({
        items: 3, //Кол-во отображаемых элементов
        loop:false, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        dots:true,
        nav:true, //Отключение навигации
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            // 600:{
            //     items:2
            // },
            768:{
                items:3
            }
        }
    });
});

$(document).ready(function() {
    jQuery('#carouselAdvantage').owlCarousel({
        items: 8, //Кол-во отображаемых элементов
        loop:false, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        dots:true,
        nav:true, //Отключение навигации
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            // 600:{
            //     items:2
            // },
            768:{
                items:8
            }
        }
    });
});