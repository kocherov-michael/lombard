import './menu.scss'

showMenu()

function showMenu() {
    const menuElement = document.querySelector('[data-header-menu]')
    const menuIconElement = document.querySelector('[data-header-menu-icon]')


    menuIconElement.addEventListener('click', () => {
        menuElement.classList.toggle('menu--open')
        // console.log('toggle')
      })
      // const defaultTopX = menuElement.getBoundingClientRect().top;
      // const menuHeight = menuElement.clientHeight
      // window.addEventListener('scroll', () => {
      //   const topX = menuElement.getBoundingClientRect().top;
      //   console.log(topX)
      //   console.log('высота', menuElement.clientHeight)
      //   console.log('Текущая прокрутка сверху: ' + window.pageYOffset)

      //   if (topX < 0 - menuHeight) {
      //     menuElement.classList.add('menu--fixed')
      //     // menuPlugElement.style = `height: ${menuHeight}px`
      //   }
      //   if (window.pageYOffset < defaultTopX - menuHeight ) {
      //     menuElement.classList.remove('menu--fixed')
      //     // menuPlugElement.style = ''
      //   }
      // })

}
