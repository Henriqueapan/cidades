export default function animateOnViewInit(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')

    sections[0].classList.add('active')

    function animateScroll(){
        sections.forEach(i => {
            const sectionTopDist = i.getBoundingClientRect().top
            const viewRangeParameter = window.innerHeight*.675
            const isInViewRange = sectionTopDist <= viewRangeParameter

            if (isInViewRange) {
                i.classList.add('active')
            }
        })
    }

    window.addEventListener('scroll', animateScroll)
}