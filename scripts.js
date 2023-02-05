import { Gradient } from './gradient.js'

const gradientCanvas = document.querySelector('#gradient-canvas')

const projectOne = document.querySelector('.project.project-one')
const projectOneHover = document.querySelector('.project-one .project-hover-area')
const projectOneMinimise = document.querySelector('.project-one .minimise-btn')

const projectTwo = document.querySelector('.project-two')
const projectTwoHover = document.querySelector('.project-two .project-hover-area')
const projectTwoMinimise = document.querySelector('.project-two .minimise-btn')

const projects = document.querySelectorAll('.projects')[0].children

const gradient = new Gradient() 
gradient.initGradient('#gradient-canvas')


const expandProject = (currentProject) => {
  for (let i=0; i < projects.length; i++){
    projects[i].classList.remove('expanded')
  }
  currentProject.classList.add('expanded')
}

projectOneHover.addEventListener('mouseover', () => {
  projectOne.style.scale = 0.98
})

projectOneHover.addEventListener('mouseout', () => {
  projectOne.style.scale = 1
})

projectTwoHover.addEventListener('mouseover', () => {
  projectTwo.style.scale = 0.98
})

projectOneHover.addEventListener('click', () => {
  projectOneHover.classList.add('hidden')
  projectTwo.scrollTo(0, 0)
  projectTwoHover.classList.remove('hidden')
  expandProject(projectOne)
})

projectOneMinimise.addEventListener('click', () => {
  projectOneHover.classList.remove('hidden')
  projectOne.classList.remove('expanded')
})

projectTwoHover.addEventListener('click', () => {
  projectTwoHover.classList.add('hidden')
  projectOne.scrollTo(0, 0)
  projectOneHover.classList.remove('hidden')
  expandProject(projectTwo)
})

projectTwoHover.addEventListener('mouseout', () => {
  projectTwo.style.scale = 1
})

projectTwoMinimise.addEventListener('click', () => {
  projectTwoHover.classList.remove('hidden')
  projectTwo.classList.remove('expanded')
})
