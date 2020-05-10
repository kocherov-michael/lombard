import './block-accept.scss'

$(document).ready(function() {
    jQuery('#carouselOne').owlCarousel({
        items: 6, //Кол-во отображаемых элементов
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
                items:6
            }
        }
    });
});