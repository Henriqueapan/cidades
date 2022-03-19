function tabNavInit(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    const activeClass = 'active'
    
    tabContent.forEach((i, index) => {
        index % 2 == 0 ? i.dataset.anime = "show-right" : i.dataset.anime = "show-down"
    })

    if(tabContent.length && tabMenu.length){
        tabContent[0].classList.add(activeClass, "animate-right")

        function activeTab(index) {
            animateClass = tabContent[index].dataset.anime == "show-right" ? "animate-right" : "animate-down"
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
}tabNavInit();


function accordionListInit(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
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
    const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]')

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
    const toTopButton = document.querySelector('[data-anime="scroll-top"]')
    
    function checkWindowOffset() {
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


function animateScrollInit(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')

    sections[0].classList.add('active')

    function animateScroll(){
        sections.forEach(i => {
            const sectionTopDist = i.getBoundingClientRect().top
            const viewRangeParameter = window.innerHeight*.675
            const isInViewRange = sectionTopDist <= viewRangeParameter

            if (isInViewRange) {
                i.classList.add('active')
                console.log("Passou")
            }
        })
    }

    window.addEventListener('scroll', animateScroll)
};animateScrollInit();


// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)


// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
