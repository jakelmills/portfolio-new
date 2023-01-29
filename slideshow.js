const slides = document.querySelectorAll('.holder > div')
const holder = document.querySelector('.holder')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

const numberOfSlides = slides.length
let currentSlide = 0

const moveSlide = () => {
  const leftPosition = (-currentSlide * 100) + 'vw'
  holder.style.left = leftPosition
}

const nextSlide = () => {
  currentSlide ++
  if (currentSlide >= numberOfSlides) {
    currentSlide = 0
  }
  moveSlide(currentSlide)
}

const prevSlide = () => {
  currentSlide --
  if (currentSlide < 0) {
    currentSlide = numberOfSlides -1
  }
  moveSlide(currentSlide)
}

nextButton.addEventListener("click", function(){
  nextSlide()
})

prevButton.addEventListener("click", function(){
  prevSlide()
})

document.addEventListener("keydown", function(e){
  const keyCode = e.keyCode


  if (keyCode == 37) {
    prevSlide()
  }

  if (keyCode == 39) {
    nextSlide()
  }
})

// mobile swipe

let touchStartX = 0
let touchEndX = 0
    
function checkDirection() {

  if (touchEndX < touchStartX && (touchEndX - touchStartX) < -75 ) {
    nextSlide()
  }
  if (touchEndX > touchStartX && (touchEndX - touchStartX) > 75) {
    prevSlide()
  }
}

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX
  checkDirection()
})