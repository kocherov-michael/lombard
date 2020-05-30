import './img-slider.scss'

imgSlider('data-img-slider')

function imgSlider(attr) {
    const carouselList = document.querySelectorAll(`[${attr}]`)
    carouselList.forEach((elem) => {

        const imgList = elem.querySelectorAll('img')
        const imgCount = imgList.length
        console.log(elem.children.length)
        // const countInnerElem = elem.getAttribute(imgCount)
        // console.log(countInnerElem)
        
        
        
        $(elem).owlCarousel({
            items: imgCount, //Кол-во отображаемых элементов
            loop:false, //Зацикливаем слайдер
            margin:50, //Отступ от элемента справа в 50px
            dots:true,
            nav:true, //Отключение навигации
            autoplay:false, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:2000, //Время смены слайда
            items:1,
            // responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            //     0:{
            //         items:1
            //     },
            //     // 600:{
            //     //     items:2
            //     // },
            //     768:{
            //         items:imgCount
            //     }
            // }
        });

        // получаем список точек
        const dotsList = elem.querySelectorAll('.owl-dot')


        // вставляем в каждую точку по картинке, адрес которой берём у элементов списка картинок
        for (let i = 0; i < dotsList.length; i++ ) {
            const imgSrc = imgList[i].getAttribute('src')
            
            const imgElem = document.createElement('img')
            imgElem.classList.add('owl-dot__img')
            imgElem.setAttribute('src', imgSrc)
            dotsList[i].append(imgElem)
        }

        
    })

}