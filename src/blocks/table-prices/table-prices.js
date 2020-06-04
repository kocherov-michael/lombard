import './table-prices.scss'

chancgeTableCategories()

function chancgeTableCategories() {
    const tableElement = document.querySelectorAll('[data-table-price-wrapper]') 
    tableElement.forEach(table => {
        
        const categoryNumberList = table.querySelectorAll('[data-table-price')
        // список карточек
        const tableItemList = table.querySelectorAll('[data-table-item')

        categoryNumberList.forEach((categoryNumberElement, i, categoryNumberList) => {
            // слушаем нажатия на цифры категорий
            categoryNumberElement.addEventListener('click', (event)=> {
                // если у блока с цифрой есть активный класс, то останавливаем наши действия
                if (categoryNumberElement.classList.contains('table-prices-head__blocks-item--active')) return
                // получаем номер категории
                const categoryNumber = event.target.getAttribute('data-table-price')
                // ставим активный номер обёртке табоицы
                table.setAttribute('data-table-price-wrapper', categoryNumber)
                // обёртка текстовых блоков описания
                const descWrapper = table.querySelector('[data-table-desc-wrapper]')
                // обёртка цен в table-item
                const priceWrapperList = table.querySelectorAll('[data-table-item-price-wrapper]')
                // console.log(priceWrapper)
                let exActiveNumber


                // удаляем активный класс у активного элемента
                categoryNumberList.forEach(elem => {
                    if (elem.classList.contains('table-prices-head__blocks-item--active')) {
                        elem.classList.remove('table-prices-head__blocks-item--active')
                        exActiveNumber = elem.getAttribute('data-table-price')
                    }
                })
                // даём активный класс кликнутому элементу
                event.target.classList.add('table-prices-head__blocks-item--active')
                // передвигаем текст в описании
                descWrapper.classList.remove(`table-prices-head__desc-wrapper--${exActiveNumber}`)
                descWrapper.classList.add(`table-prices-head__desc-wrapper--${categoryNumber}`)

                console.log(table)
                
                // передвигаем цены в карточках
                priceWrapperList.forEach(elem => {
                    elem.classList.remove(`table-item__price-wrapper--${exActiveNumber}`)
                    elem.classList.add(`table-item__price-wrapper--${categoryNumber}`)
                    // получаем цену в зависимости от категории
                    const currPrice = elem.getAttribute(`data-price-${categoryNumber}`)
                    // родительский элемент, в котором лежит данная обёртка с ценами
                    const parentElem = elem.closest('[data-table-item]')
                    if (parentElem.classList.contains('table-item--active')) {
                        // если передвигаем внутри активной карточки
                        // ставим эту цену в аттрибут обёртки
                        table.setAttribute('data-current-price', currPrice)
                        showPrice(currPrice)
                    }
                })
            })
        })

        // слушаем нажатия на карточки
        tableItemList.forEach((tableElem,i,arr) => {
            tableElem.addEventListener('click', (event) => {
                // console.log(event.currentTarget)
                // console.log(event.target)
                
                arr.forEach((elem) => {
                    // проверка, активен ли кликнутый элемент
                    const isSame = event.currentTarget == elem
                    if(elem.classList.contains('table-item--active') && !isSame) {
                        // если активен не кликнутый элемент, то снимаем выделение
                        elem.classList.remove('table-item--active')
                    }
                    else if (isSame) {
                        // выделяем кликнутый элемент
                        elem.classList.add('table-item--active')

                        const categoryNumber = table.getAttribute('data-table-price-wrapper')
                        
                        const priceWrapperElem = elem.querySelector('[data-table-item-price-wrapper]')
                        const currPrice = priceWrapperElem.getAttribute(`data-price-${categoryNumber}`)
                        
                        // ставим эту цену в аттрибут обёртки
                        table.setAttribute('data-current-price', currPrice)
                        showPrice(currPrice)
                    }
                })

                
            })
        })

        // инпут веса 
        const inputWeightElement = document.querySelector('[data-input-weight]').querySelector('input')
        console.log(inputWeightElement.value)
        // инпут суммы
        const inputSummElement = document.querySelector('[data-input-summ]').querySelector('input')
    
        inputWeightElement.addEventListener('input', () => {
            
            const weight = inputWeightElement.value
            console.log(weight)
            const price = table.getAttribute('data-current-price')
            console.log(price)
            showPrice(price)
        })
    })
}

function showPrice(price) {
    // инпут веса 
    const inputWeightElement = document.querySelector('[data-input-weight]').querySelector('input')
    // инпут суммы
    const inputSummElement = document.querySelector('[data-input-summ]').querySelector('input')

    if (price && +price > 0) {
        
        inputSummElement.value = inputWeightElement.value * +price
    }
    else {
        inputSummElement.value = "Выберите пробу"
    }

}