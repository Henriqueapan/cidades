export default function animateNumbersInit() {
    function animateNumbers(){
        const numbers = document.querySelectorAll('[data-number]')
    
        numbers.forEach(i => {
            const num = +i.innerText,
            div = ((Math.random() * 50) + (50)),
            step = parseInt(num/div)
    
            let current = 0
            const timer = setInterval(() => {
                current += step
                if(current > num){
                    clearInterval(timer)
                    i.innerText = num
                }
                else i.innerText = current
            }, 30)
        })
    }
    
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('active')) {
            observer.disconnect()
            animateNumbers()
        }
    }
    
    const observer = new MutationObserver(handleMutation),
    observerTarget = document.querySelector('.numeros')
    observer.observe(observerTarget, {attributes: true})
}
