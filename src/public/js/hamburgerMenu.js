const hamburguerMenu = document.querySelector('.hamburguer-menu')
const mainMenu = document.querySelector('#main-menu')

hamburguerMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('show-main-menu')
})
