function tabNavInit(){
    const tabMenu = document.querySelectorAll('.js-tab-menu li')
    const tabContent = document.querySelectorAll('.js-tab-content section')
    const activeClass = 'active'


    if(tabContent.length && tabMenu.length){
        tabContent[0].classList.add(activeClass)

        function activeTab(index) {
            tabContent[index].classList.add(activeClass)
            tabContent.forEach((i, idx) => {
                if (idx !== index) {
                    i.classList.remove(activeClass)
                }
            })
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}tabNavInit();


function accordionListInit(){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'active'

    if(accordionList.length){
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.nextElementSibling.classList.toggle(activeClass)
            this.classList.toggle(activeClass)
        }

        accordionList.forEach(i => {
            i.addEventListener('click', activeAccordion)
        })
    }

};accordionListInit();

function smoothScrollInit(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const targetSection = document.querySelector(href)
        const targetYOffset = targetSection.offsetTop

        window.scrollTo({
            top: targetYOffset,
            behavior: "smooth",
        })
    }

        // scrollIntoView() method

        // targetSection.scrollIntoView({
        //     behaviour: "smooth",
        //     block: "start"
        // })

    linksInternos.forEach(i => {
        i.addEventListener('click', scrollToSection)
    })
};smoothScrollInit();

function scrollToTopInit(){
    const toTopButton = document.querySelector('.js-scroll-top')
    
    function checkWindowOffset() {
        console.log("scrolled")
        if (document.querySelector('html').scrollTop >= 200){
            toTopButton.classList.add('active')
        }
        else{
            toTopButton.classList.remove('active')
        }
    }

    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', checkWindowOffset)

    toTopButton.addEventListener('click', smoothScrollToTop)
};scrollToTopInit();