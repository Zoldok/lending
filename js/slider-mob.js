let offset = 0
const sliderLine = document.querySelector('.slider__line')
const slides = document.getElementsByClassName('players-content__people-item')

function updateValues() {
  offset = 0
  sliderLine.style.left = 0
  const sliderElement = document.querySelector('.slider')
  const sliderWidth = sliderElement.offsetWidth
}

function updateCurrentSlideNumber() {
  const currentSlide = Math.abs(offset / (slides[0].offsetWidth + 20)) + 1;
  const totalSlides = slides.length;
  const numberElement = document.querySelector('.players-content__number');
  numberElement.textContent = `${currentSlide}/${totalSlides}`;
}

function nextSlide() {
  offset += slides[0].offsetWidth + 20 //устанавливаем значение от индекса элемента в коллекции slides и получаем его ширину с помощью свойства offsetWidth
  if (offset > getMaxOffset()) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px'
  updateCurrentSlideNumber();
}

function previousSlide() {
  offset -= slides[0].offsetWidth + 20
  if (offset < 0) {
    offset = getMaxOffset()
  }
  sliderLine.style.left = -offset + 'px'
  updateCurrentSlideNumber();
  
}

function getMaxOffset() {
  if (window.innerWidth < 768) {
    // return sliderWidth - 355
    return 1775 // Максимальное смещение для мобильного экрана
  } else {
    // return 1775 - 415
    return 1242 // Максимальное смещение для остальных экранов
  }
}


document.getElementById('next').addEventListener('click', () => nextSlide())
document.getElementById('back').addEventListener('click', () => previousSlide())

document.getElementById('next1').addEventListener('click', () => nextSlide())
document.getElementById('back1').addEventListener('click', () => previousSlide())

window.addEventListener('resize', () => {
  updateValues()
})

function startSlideInterval() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

startSlideInterval();