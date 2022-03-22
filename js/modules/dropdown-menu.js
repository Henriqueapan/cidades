import outterClick from "./outterClick.js"

export default function dropDownMenuInit() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]')
    
    if(dropDownMenus){
        dropDownMenus.forEach(i => {
            ['touch', 'click'].forEach(eName => i.addEventListener(eName, handleClick))
        })
        
        function handleClick(e) {
            e.preventDefault()
            this.classList.add('active')
            outterClick(this, ['click', 'touch'],() => {
                this.classList.remove('active')
            })
        }
    }
}

