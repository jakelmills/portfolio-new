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

console.log(slides);

nextButton.addEventListener("click", function(){
  nextSlide()
})

prevButton.addEventListener("click", function(){
  prevSlide()
})

document.addEventListener("keydown", function(e){
  console.log(e.keyCode);
  const keyCode = e.keyCode


  if (keyCode == 37) {
    prevSlide()
  }

  if (keyCode == 39) {
    nextSlide()
  }
})