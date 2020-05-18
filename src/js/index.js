import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/owl.carousel.js';
import 'owl.carousel';
require("@fancyapps/fancybox");
require('@fancyapps/fancybox/dist/jquery.fancybox.css');

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
import './../blocks/img-card/img-card.js'
// import './../blocks/steps/steps.js'
import './../blocks/map/map.js'
import '../blocks/contact-card/contact-card.js'
import './../blocks/conditions/conditions.js'
import './../blocks/conditions-card/conditions-card.js'
import './../blocks/footer/footer.js'



$(document).ready(function() {
    // console.log(jQuery)
    carouselHandler('data-owl-carousel')

    function carouselHandler(attr) {
        const carouselList = document.querySelectorAll(`[${attr}]`)
        carouselList.forEach((elem) => {
            // console.log(elem)
            const countInnerElem = elem.getAttribute(attr)
            // console.log(countInnerElem)
            
            
            
            $(elem).owlCarousel({
                items: countInnerElem, //Кол-во отображаемых элементов
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
                        items:countInnerElem
                    }
                }
            });

            
        })

    }


    // function owlCarouselCustom(attr) 
});

// const linksElem = document.querySelectorAll('a')
// linksElem.forEach(link => {
//     link.addEventListener('click', () => {
//         console.log('click')
//     })
// })