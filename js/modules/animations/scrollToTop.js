export default function scrollToTopInit(){
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
}