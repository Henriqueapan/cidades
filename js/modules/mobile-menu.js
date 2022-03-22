import outterClick from "./outterClick.js";

export default function mobileMenuInit() {
    const menuButton = document.querySelector('[data-menu="button"]'),
    uEvents = ['click', 'touch'],
    menuList = document.querySelector('[data-menu="list"]')
    
    function openMenu() {
        [menuButton, menuList].forEach(i => i.classList.toggle('active'))
        outterClick(menuList, uEvents, () => {
            [menuButton, menuList].forEach(i => i.classList.remove('active'))
        })
    }
    
    uEvents.forEach(i => menuButton.addEventListener(i, openMenu))
}
