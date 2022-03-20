export default function tooltipInit() {
    const tooltips = document.querySelectorAll('[data-tooltip]')

    window.addEventListener('load', isTouchDevice)

    function isTouchDevice() {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || 
        (navigator.msMaxTouchPoints > 0))
    }
    
    // If the device is a touch device, there won`t be a tooltip over the map

    if (tooltips && !isTouchDevice()){
        tooltips.forEach(i => {
            i.addEventListener('mouseover', onMouseOver);
        })
        
        function onMouseOver(event) {
            const tooltipBox = createTooltip(this)
            tooltipBox.style.top = event.pageY + 'px'
            tooltipBox.style.left = event.pageX + 'px'
        
            onMouseMove.tooltipBox = tooltipBox
            this.addEventListener('mousemove', onMouseMove)
            
            onMouseLeave.tooltipBox = tooltipBox
            onMouseLeave.targetElement = this
            this.addEventListener('mouseleave', onMouseLeave)
        }
        
        const onMouseLeave = {
            handleEvent(){
                this.tooltipBox.remove()
                this.targetElement.removeEventListener('mouseleave', onMouseLeave)
                this.targetElement.removeEventListener('mousemove', onMouseMove)
            }
        }
        
        const onMouseMove = {
            handleEvent(event){
                this.tooltipBox.style.top = event.pageY + 20 + 'px'
                this.tooltipBox.style.left = event.pageX + 20 + 'px'
            }
        }
        
        function createTooltip(element){
            const tooltipBox = document.createElement('div')
            const text = element.getAttribute('aria-label')
            tooltipBox.classList.add('tooltip')
            tooltipBox.innerText = text
            document.body.appendChild(tooltipBox)
            return tooltipBox
        }
    }
}
