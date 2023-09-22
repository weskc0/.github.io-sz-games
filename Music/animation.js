function slideIn(element) {
    document.getElementById(element).style.display = 'block'

    document.body.style.overflowX = 'hidden'
    document.getElementById(element).style.animation = 'slideIn 0.8s'
    setTimeout(() => {
        //document.getElementById(element).style.display = 'none'

        document.body.style.overflowX = 'auto'

    }, 800);
}

function slideOut(element) {
    document.getElementById(element).style.display = 'block'

    document.body.style.overflowX = 'hidden'
    document.getElementById(element).style.animation = 'slideOut 0.8s'
    setTimeout(() => {
        document.getElementById(element).style.display = 'none'

        document.body.style.overflowX = 'auto'

    }, 800);
}

function movePage(from, to) {
    slideOut(from)
    slideIn(to)
}