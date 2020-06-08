import './popup-card.scss'

export default class PopUpCard {
    constructor(args = {}) {
        this.listenLookButton()
        this.listenClosePupUp()
        
    }

    // прослушка кнопок показа большой карточки
    listenLookButton(wrapperElement = document) {
        // const goodCardButtonsList = wrapperElement.querySelectorAll('[data-card-look]')
        const goodCardButtonsList = wrapperElement.querySelectorAll('[data-show-popup]')
        if (goodCardButtonsList.length > 0) {

            for(let i = 0; i < goodCardButtonsList.length; i++) {
        
                goodCardButtonsList[i].addEventListener('click', () => {

                    // показываем попап карточку
                    this.showPopUp('.popup-card-wrapper')
                })
            }
        
           
        }
    }

    // прослушка элементов закрытия попап карточек
    listenClosePupUp() {
         // элемениы закрывания попап карточек
         const wrapperElement = document.querySelector('[data-popup-card-wrapper]')
         const closePopupElement = document.querySelector('[data-popup-card-close]')

         // прослушка обёртки попап карточки
         wrapperElement.addEventListener('click', (event) => {
             // если кликнули по затемнённой обёртке - закрыли попап
             if (event.currentTarget === event.target) {
                this.hidePopUp('.popup-card-wrapper')
            }
        })
        // прослушка крестика закрытия
        closePopupElement.addEventListener('click', (event) => {
            
            this.hidePopUp('.popup-card-wrapper')
       })
    }

    // показать всплывающее окно
    showPopUp(selector, timeout = 0) {
        
        const wrapperElement = document.querySelector(selector)
        
        // удаляем точку у класса
        selector = selector.slice(1)
        // console.log(selector + '--translate')
        setTimeout(() => {
            wrapperElement.classList.add(selector +'--translate')
            wrapperElement.classList.add(selector +'--show-card')
            wrapperElement.classList.add(selector +'--opacity-1')
            // console.log(wrapperElement)
            setTimeout(() => {
                wrapperElement.classList.add(selector +'--transition-none')
                // wrapperElement.style = `top: ${pageYOffset}px;`
                
                if (document.documentElement.clientWidth > 768) {
                // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    document.body.style = 'overflow: hidden; padding-right: 18px;'
                }
                wrapperElement.classList.add(selector +'--show')
                setTimeout(() => {
                    wrapperElement.classList.remove(selector +'--transition-none')

                },40)
            },400)
        },timeout)
    }

    // скрыто всплывающее окно
    hidePopUp(selector) {
        const wrapperElement = document.querySelector(selector)
        // удаляем точку у класса
        selector = selector.slice(1)
        
        wrapperElement.classList.remove(selector +'--show-card')
        wrapperElement.classList.remove(selector +'--opacity-1')
        
        setTimeout(() => {

            document.body.style = ''
            wrapperElement.style = ''
            wrapperElement.classList.remove(selector +'--show')
            setTimeout(() => {
                wrapperElement.classList.remove(selector +'--translate')
            },40)
        }, 400)
    }

    
}