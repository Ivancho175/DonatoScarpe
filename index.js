function imgSlider(anything) {
    document.querySelector('.donatoScarpe').src = anything
}

const colors = document.querySelectorAll('.thumb__item')

let i;
for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changeColor)
}

function changeColor() {
    let color = this.getAttribute('data-color')
    document.documentElement.style.setProperty('--clr-accent', color)
}