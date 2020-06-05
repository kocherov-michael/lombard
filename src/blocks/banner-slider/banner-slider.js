import './banner-slider.scss'

bannerSlider('data-banner-slider')

function bannerSlider(attr) {
    const carouselList = document.querySelectorAll(`[${attr}]`)
    carouselList.forEach((elem) => {

        const imgList = elem.querySelectorAll('img')
        const imgCount = imgList.length
        
        
        $(elem).owlCarousel({
            items: imgCount, //Кол-во отображаемых элементов
            loop:true, //Зацикливаем слайдер
            margin:0, //Отступ от элемента справа в 50px
            dots:false,
            nav:true, //Отключение навигации
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:2000, //Время смены слайда
            autoplay: true, //Автоматическое пролистывание
            autoplayTimeout: 5000, //Интервалы между пролистыванием элементов
            autoplayHoverPause: true,//Останавливает автопроигрывание если навести мышкой (hover) на элемент
            items:1,
            
        });

       

        
    })

}