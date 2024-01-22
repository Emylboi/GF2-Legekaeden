/*  */
/* Slider */
/*  */

const slide = document.querySelector(".slider-slide")
let currentSlideIndex = 0;

let sliderImages = [
    "img/slider1.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg",
]

function setActiveSlide(index){
    slide.src = sliderImages[index]
}

function next(){
    if (currentSlideIndex >= sliderImages.length - 1){
        currentSlideIndex = 0;
    } else{
        currentSlideIndex++;
    }
    setActiveSlide(currentSlideIndex)
}

function setAutoSlide(){
    function updateCounter(){
        next();
        autoSlideTimeout = setTimeout(updateCounter, 5000);
    }

    updateCounter();
}
setAutoSlide();

/*  */
/* Form */
/*  */

let form = document.querySelector(".formular")
let sent = document.querySelector(".formularSent")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden')
    sent.classList.add("show")
  })

  /*  */
  /* BurgerBTN */
  /*  */

const burgerBtn = document.querySelector("#burgerBtn")
const burgerMenu = document.querySelector("#burger-menu")

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("show")
  burgerBtn.classList.toggle("active")
})

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("show")
  burgerBtn.classList.remove("active")
})