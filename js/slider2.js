const slider = document.querySelector('.stages-level')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const sliderDots = document.getElementById('sliderDots')

let currentSlide = 0
const slideWidth = 355

function updateValues() {
  currentSlide = 0
updateSlider()
 }

function updateSliderDots() {
  const dots = sliderDots.querySelectorAll('.slider-dot')
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide)
  })
}

function goToPrevSlide() {
  if (currentSlide > 0) {
    currentSlide--
  } else {
    return
  }
  updateSlider()
}

function goToNextSlide() {
  if (currentSlide < slider.children.length - 5) {
    currentSlide++
  } else {
    return
  }
  updateSlider()
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`
  updateSliderDots()

  if (currentSlide === 0) {
    prevButton.disabled = true
    prevButton.classList.add('button-disabled')
  } else {
    prevButton.disabled = false
    prevButton.classList.remove('button-disabled')
  }

  if (currentSlide === slider.children.length - 5) {
    nextButton.disabled = true
    nextButton.classList.add('button-disabled')
  } else {
    nextButton.disabled = false
    nextButton.classList.remove('button-disabled')
  }
}

// Создание точек слайдера
for (let i = 0; i < slider.children.length - 4; i++) {
  const dot = document.createElement('div')
  dot.classList.add('slider-dot')
  dot.addEventListener('click', () => {
    currentSlide = i
    updateSlider()
  })
  sliderDots.appendChild(dot)
}

// Назначение обработчиков событий для кнопок
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)

window.addEventListener('resize', () => {
  updateValues()
  slider.style.transform = 'none'
})
// Инициализация слайдера
updateSlider()
updateValues()