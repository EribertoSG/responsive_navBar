const openMenu = document.getElementById('open-menu')
const lateralMenu = document.getElementById('lateral-menu')
const menuBackground = document.getElementById('menu-background')

openMenu.addEventListener('click', () => {
    lateralMenu.classList.toggle('show-menu')
    menuBackground.classList.toggle('show-menu')
})