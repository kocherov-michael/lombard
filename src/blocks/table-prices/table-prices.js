import './table-prices.scss'

chancgeTableCategories()

function chancgeTableCategories() {
    const tableElement = document.querySelectorAll('[data-table-price-wrapper]') 
    tableElement.forEach(table => {
        const categoryNumberList = table.querySelectorAll('[data-table-price')
        categoryNumberList.forEach((categoryNumberElement, i, categoryNumberList) => {
            // слушаем нажатия на цифры категорий
            categoryNumberElement.addEventListener('click', (event)=> {
                // если у блока с цифрой есть активный класс, то останавливаем наши действия
                if (categoryNumberElement.classList.contains('table-prices-head__blocks-item--active')) return
                // получаем номер категории
                const categoryNumber = event.target.getAttribute('data-table-price')
                console.log(categoryNumber)
                // обёртка текстовых блоков описания
                const descWrapper = table.querySelector('[data-table-desc-wrapper]')
                let exActiveNumber

                // удаляем активный класс у активного элемента
                categoryNumberList.forEach(elem => {
                    if (elem.classList.contains('table-prices-head__blocks-item--active')) {
                        elem.classList.remove('table-prices-head__blocks-item--active')
                        exActiveNumber = elem.getAttribute('data-table-price')
                    }
                })
                // даём активный класс кликнотому элементу
                event.target.classList.add('table-prices-head__blocks-item--active')
                descWrapper.classList.remove(`table-prices-head__desc-wrapper--${exActiveNumber}`)
                descWrapper.classList.add(`table-prices-head__desc-wrapper--${categoryNumber}`)

            })
        })
    })
}