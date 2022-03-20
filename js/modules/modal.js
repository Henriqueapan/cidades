export default function modalInit() {
    const openButton = document.querySelector('[data-modal="open"]')
    const closeButton = document.querySelector('[data-modal="close"]')
    const sendButton = document.querySelector('button[type="submit"]')
    const modalContainer = document.querySelector('[data-modal="container"]')

    sendButton ? sendButton.addEventListener('click', e => e.preventDefault()) : 0
    
    if (openButton && closeButton && modalContainer){
        function toggleModal(event) {
            event.preventDefault()
            modalContainer.classList.toggle('active')
        }
    
        function outterClickClose(event) {
            if (event.target === this) { // when handlign an event, `this` will always be the event`s target
                toggleModal(event)
            }
        }

        openButton.addEventListener('click', toggleModal)
        closeButton.addEventListener('click', toggleModal)
        modalContainer.addEventListener('click', outterClickClose)
    }

}
