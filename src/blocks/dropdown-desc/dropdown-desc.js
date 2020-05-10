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
            // закрываем у всех текст
            dropdownDescList.forEach((element) => {
                element.classList.remove('dropdown-desc--open')
            })
            // открываем текст только у выбранного
            element.classList.add('dropdown-desc--open')


        })
    })
}