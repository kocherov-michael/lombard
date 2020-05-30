import './product-item.scss'

toggleProductBlocks()

// переключаем видимость блоков
function toggleProductBlocks() {
    const toggleDescElem = document.querySelector('[data-product-toggle-desc]')
    const toggleInfoElem = document.querySelector('[data-product-toggle-info]')
    const descWrapElem = document.querySelector('[data-product-desc-wrap]')

    if (toggleDescElem) {
        toggleDescElem.addEventListener('click', () => {
            
            toggleDescElem.classList.add('product-desc__toggle-item--active')
            toggleInfoElem.classList.remove('product-desc__toggle-item--active')
            descWrapElem.classList.remove('product-desc__desc--info')
        })
        toggleInfoElem.addEventListener('click', () => {
            
            toggleDescElem.classList.remove('product-desc__toggle-item--active')
            toggleInfoElem.classList.add('product-desc__toggle-item--active')
            descWrapElem.classList.add('product-desc__desc--info')
        })
    }

    
}