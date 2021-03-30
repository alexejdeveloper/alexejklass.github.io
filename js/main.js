//Variables
const main = document.querySelector('.main').getBoundingClientRect().top
const techs = document.querySelectorAll('.main__icons img')
document
  .querySelector('footer')
  .addEventListener('click', () =>
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  )

const chooseTech = event => {
  const cubes = document.querySelectorAll('div.cube')
  techs.forEach(value => value.classList.remove('active'))
  const visibleCubes = document.querySelectorAll(
    'div.cube.' + event.target.className
  )

  cubes.forEach(value => {
    value.style.display = 'none'
  })
  visibleCubes.forEach(value => {
    value.style.display = 'block'
  })
  event.target.classList.add('active')
}

techs.forEach(value => value.addEventListener('click', chooseTech))

const scroll = event => {
  window.scrollTo({top: main + 80, left: 0, behavior: 'smooth'})
}
const headerDown = document
  .querySelector('.header__down--wrap')
  .addEventListener('click', scroll)

const headerProjects = document
  .querySelector('.header__projects')
  .addEventListener('click', scroll)

function UnCryptMailto(s) {
  var n = 0
  var r = ''
  for (var i = 0; i < s.length; i++) {
    n = s.charCodeAt(i)
    if (n >= 8364) {
      n = 128
    }
    r += String.fromCharCode(n - 1)
  }
  return r
}

function linkTo_UnCryptMailto(s) {
  location.href = UnCryptMailto(s)
}
