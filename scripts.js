import { Gradient } from './gradient.js'

const gradientCanvas = document.querySelector('#gradient-canvas')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

const gradients = [
'gradient-one', 'gradient-two', 'gradient-three', 'gradient-four'
]

let currentGradient = 0
const numberOfGradients = gradients.length

const setColours = (currentGradient) => {
  const colours = gradients[currentGradient]
  gradientCanvas.classList.add(colours)

  const gradient = new Gradient() 
  gradient.initGradient('#gradient-canvas')
}

setColours(0)



const removeGradientNext = (currentGradient) => {
  if (currentGradient === gradients.length) {
    gradientCanvas.classList.remove(gradients[numberOfGradients - 1])
  } else {
    gradientCanvas.classList.remove(gradients[currentGradient - 1])
  }
}

const removeGradientPrev = (currentGradient) => {
  if (currentGradient === gradients.length) {
    gradientCanvas.classList.remove(gradients[numberOfGradients - 1])
  } else {
    gradientCanvas.classList.remove(gradients[currentGradient + 1])
  }
}

const nextGradient = () => {
  
  currentGradient ++

  removeGradientNext(currentGradient)

  if (currentGradient > numberOfGradients - 1) {
    currentGradient = 0
  }

  setColours(currentGradient)
  
}

const prevGradient = () => {
  console.log(currentGradient);
  currentGradient --
  if (currentGradient < 0) {
    currentGradient = 2
  }
  removeGradientPrev(currentGradient)
  setColours(currentGradient)
}

document.addEventListener("keydown", function(e){
  const keyCode = e.keyCode


  if (keyCode == 37) {
    prevGradient()
  }

  if (keyCode == 39) {
    nextGradient()
  }
})

nextButton.addEventListener("click", function(){
  nextGradient()
})

prevButton.addEventListener("click", function(){
  prevGradient()
})

// mobile swipe

let touchStartX = 0
let touchEndX = 0
    
function checkDirection() {

  if (touchEndX < touchStartX && (touchEndX - touchStartX) < -75 ) {
    nextGradient()
  }
  if (touchEndX > touchStartX && (touchEndX - touchStartX) > 75) {
    prevGradient()
  }
}

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX
  checkDirection()
})
