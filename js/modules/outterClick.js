export default function outterClick(targetElement, events, callback) {
    const html = document.documentElement

    if (!(targetElement.hasAttribute('data-outside'))){
        events.forEach(i => {    
            html.addEventListener(i, handleOutterClick)
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