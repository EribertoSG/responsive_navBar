const openMenu = document.getElementById('open-menu')
const lateralMenu = document.getElementById('lateral-menu')
const menuBackground = document.getElementById('menu-background')

const openAndClose = () => {
    lateralMenu.classList.toggle('show-menu')
    menuBackground.classList.toggle('show-menu')
}
openMenu.addEventListener('click', () => {
    openAndClose()
})

window.addEventListener('click', e => {
    if (e.target == menuBackground) {
        openAndClose()
    }
})