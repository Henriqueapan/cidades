export default function tabNavInit(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    const activeClass = 'active'
    
    tabContent.forEach((i, index) => {
        index % 2 == 0 ? i.dataset.anime = "show-right" : i.dataset.anime = "show-down"
    })

    if(tabContent.length && tabMenu.length){
        tabContent[0].classList.add(activeClass, "animate-right")

        function activeTab(index) {
            const animateClass = tabContent[index].dataset.anime == "show-right" ? "animate-right" : "animate-down"
            tabContent[index].classList.add(activeClass, animateClass)
            tabContent.forEach((i, idx) => {
                if (idx !== index) {
                    i.classList.remove(activeClass, "animate-right", "animate-down")
                }
            })
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}