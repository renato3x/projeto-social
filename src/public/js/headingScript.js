const hamburguerMenu = document.querySelector('.hamburguer-menu')
const mainMenu = document.querySelector('#main-menu')
const headerLogo = document.querySelector('.header-logo')
const pageTitle = document.querySelector('.title')

hamburguerMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('show-main-menu')
})

headerLogo.addEventListener('click', goToMainPage)
pageTitle.addEventListener('click', goToMainPage)

function goToMainPage() {
  location.href = '/'
}
