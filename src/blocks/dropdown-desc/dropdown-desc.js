import './dropdown-desc.scss'

dropdownDescHandler()
// открываем или закрываем раскрывающийся текст
function dropdownDescHandler() {
    const dropdownDescList = document.querySelectorAll('[data-dropdown-desc]')
    const dropdownDescTextList = document.querySelectorAll('[data-dropdown-desc-text]')

    // предотвращаем закрытие при клике на текст
    dropdownDescTextList.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.stopPropagation()
        })
    })
    
    dropdownDescList.forEach((element) => {
        element.addEventListener('click', (event) => {
            if(element.classList.contains('dropdown-desc--open')) {
                element.classList.remove('dropdown-desc--open')
            } else {

                // закрываем у всех текст
                dropdownDescList.forEach((el) => {
                    
                    if (el == element) {
                        // открываем текст только у выбранного
                        element.classList.add('dropdown-desc--open')
                    } else {
                        el.classList.remove('dropdown-desc--open')
                    }
                })
            }


        })
    })
}