import './slider.scss'

// import './main-slider.scss'

mainSlider ('[data-slider]')

// {data-slider: {data-arrow-left, data-arrow-right, data-slider-wrapper:[data-slider-item, data-slider-item, ...]}}
function mainSlider (attr) {
    const sliderList = document.querySelectorAll(attr)
    
    sliderList.forEach((slider) => {
        const leftArrowElement = slider.querySelector('[data-arrow-left]')
        const rightArrowElement = slider.querySelector('[data-arrow-right]')
        const slidersWrapperElement = slider.querySelector('[data-slider-wrapper]')
        // получаем список слайдов
        const sliderElementsList = slider.querySelectorAll('[data-slider-item]')
        // считаем количество активных слайдов
        // const count = sliderElementsList.length - 1
        const count = sliderElementsList.length
        // позиция обёртки
        let translatePosition = 0
        // копируем первый элемент
        const lastElement = sliderElementsList[0].cloneNode(true)
        // вставляем клон первого элемента в конец, для плавности прокрутки по кругу
        slidersWrapperElement.append(lastElement)
        
        // стрелка влево
        leftArrowElement.addEventListener('click', () => {
            if (translatePosition > -100 * count) {
                slidersWrapperElement.style = `transform: translateX(${translatePosition -= 100}%);`
                
                if (translatePosition === -100 * count) {
                    setTimeout(() => {
                        slidersWrapperElement.style = `transition: none;`
                        setTimeout (() => {
    
                            slidersWrapperElement.style += `transform: translateX(${translatePosition = 0}%);`
                        }, 100)

                    }, 400)
                }
            }
        })

        // стрелка вправо
        rightArrowElement.addEventListener('click', () => {
            
            if (translatePosition < 0) {
                slidersWrapperElement.style = `transform: translateX(${translatePosition += 100}%);`
            }
            else if (translatePosition === 0){

                slidersWrapperElement.style = `transition: none; transform: translateX(${translatePosition = -100 * count}%);`
                setTimeout(() => {
                    slidersWrapperElement.style = `transform: translateX(${translatePosition += 100}%);`
                },10)

            }
        })
    })
}

// console.log($.owlCarousel())

// $(document).ready(function() {
//     jQuery('#carouselOne').owlCarousel({
//         loop:true, //Зацикливаем слайдер
//         margin:50, //Отступ от элемента справа в 50px
//         nav:true, //Отключение навигации
//         autoplay:false, //Автозапуск слайдера
//         smartSpeed:1000, //Время движения слайда
//         autoplayTimeout:2000, //Время смены слайда
//         responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
//             0:{
//                 items:1
//             },
//             600:{
//                 items:2
//             },
//             1000:{
//                 items:4
//             }
//         }
//     });
// });
