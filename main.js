/* Grab all the box divs so we can manipulate them */
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    /* we set the trigger for the animation to 80% of the viewports innerheight. It's like a line. If a box can fit above that line, then it shows. If it can't, then it is hidden */
    const triggerBottom = window.innerHeight * 0.8

    boxes.forEach(box => {
        /* get the position for the top of the box */
        const boxTop = box.getBoundingClientRect().top

        /* if the box can fit above the trigger */
        if (boxTop < triggerBottom) {
            /* then show it */
            box.classList.add('show')
        } else {
            /* otherwise, hide it */
            box.classList.remove('show')
        }
    })
}

checkBoxes()