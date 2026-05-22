const cards = document.querySelectorAll(
  '.card, .project, .contact-item'
)

cards.forEach(card => {

  card.addEventListener('mousemove', e => {

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.background = `
      radial-gradient(
      circle at ${x}px ${y}px,
      rgba(255,45,32,.15),
      #111114 55%)
    `
  })

  card.addEventListener('mouseleave', () => {
    card.style.background = '#111114'
  })

})