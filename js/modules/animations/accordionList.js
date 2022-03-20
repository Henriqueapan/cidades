export default function accordionListInit(){
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
}