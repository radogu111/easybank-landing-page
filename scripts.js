const toggledElement = document.querySelectorAll('.toggled')
const menuBtns = document.querySelectorAll('.menu-btn')

const onClicked = (elements, className) => {
  elements.forEach(el => {
    el.classList.toggle(className)
  })
}

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => onClicked(toggledElement, 'hidden'))
})
