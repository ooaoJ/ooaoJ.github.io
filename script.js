// script.js

function updateClock() {
  const now = new Date()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  document.getElementById(
    'clock'
  ).textContent = `${hours}:${minutes} UTC -03:00`
}

setInterval(updateClock, 1000)

updateClock()

// hover glow nas stacks

const stackItems = document.querySelectorAll('.stack-item')

stackItems.forEach(item => {

  item.addEventListener('mousemove', e => {

    const rect = item.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    item.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,60,50,0.18),
        rgba(255,255,255,0.02)
      )
    `
  })

  item.addEventListener('mouseleave', () => {
    item.style.background = 'rgba(255,255,255,0.02)'
  })

})

// animação reveal

const revealElements = document.querySelectorAll(
  '.project-card, .mini-card, .stack-item'
)

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = 1
      entry.target.style.transform = 'translateY(0px)'

    }

  })

}, {
  threshold:0.1
})

revealElements.forEach(el => {

  el.style.opacity = 0
  el.style.transform = 'translateY(40px)'
  el.style.transition = '.6s ease'

  observer.observe(el)

})