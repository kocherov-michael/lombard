import './menu.scss'

showMenu()

function showMenu() {
    const menuElement = document.querySelector('[data-header-menu')
    menuElement.addEventListener('click', () => {
        menuElement.classList.toggle('menu--open')
        console.log('toggle')
    })


}