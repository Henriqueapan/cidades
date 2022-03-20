export default function smoothScrollInit(){
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
}