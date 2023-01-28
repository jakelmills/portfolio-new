import { Gradient } from './gradient.js'

const gradientCanvas = document.querySelector('#gradient-canvas')

const gradients = [
'gradient-one', 'gradient-two', 'gradient-three'
]

const setColours = () => {
  const index = Math.floor(Math.random() * (gradients.length))
  const colours = gradients[index]
  console.log(index, colours)
  gradientCanvas.classList.add(colours)
}

setColours()

// Create your instance
const gradient = new Gradient() 

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')

