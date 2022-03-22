export default function outterClick(targetElement, events, callback) {
    const html = document.documentElement

    if (!(targetElement.hasAttribute('data-outside'))){
        events.forEach(i => {    
            // setTimeout will add the listener to the call queue,
            // therefore, if the activation button of the targetElement
            // is effectively outside of it, clicking it to activate
            // the targetElement will not trigger the html eventListener,
            // which would then deactivate it once again.
            setTimeout(() => html.addEventListener(i, handleOutterClick))
        })
        targetElement.setAttribute('data-outside', '')
    }

    function handleOutterClick(e) {
        if(!targetElement.contains(e.target)){
            callback()
            events.forEach(i => {    
                html.removeEventListener(i, handleOutterClick)
            })
            targetElement.removeAttribute('data-outside')
        }
    }
}