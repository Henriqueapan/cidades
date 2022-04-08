export default function timesInit(){
    const times = document.querySelector('[data-week]'),

    // Calling the Number constructor as the callback for a map
    // loop (in this case) will parse each object in the array
    // as a number type object.

    openDays = times.dataset.week.split(',').map(Number),
    openTime = times.dataset.times.split(',').map(Number),

    currDate = new Date(),
    currWeekDay = currDate.getDay(),
    currHour = currDate.getHours()

    openDays.includes(currWeekDay) ?
    ((currHour < openTime[1] && currHour >= openTime[0]) ? handleOpen(true, times) : handleOpen(false, times)) :
    handleOpen(false, times)

    function handleOpen(open, element){
        // open ? element.classList.add('open') : element.classList.add('closed')
        if (open) {
            element.classList.add('open');
            element.setAttribute('aria-label', 'Aberto')
        } else {
            element.classList.add('closed');
            element.setAttribute('aria-label', 'Fechado')
        }
    }
}
