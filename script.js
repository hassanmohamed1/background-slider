const body = document.body
const slides = document.querySelectorAll(".slider")
const leftbtn = document.getElementById("left")
const righttbtn = document.getElementById("right")

let activeSlide = 0

righttbtn.addEventListener("click", () => {
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftbtn.addEventListener("click", () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length -1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove("active"))

    slides[activeSlide].classList.add("active")
}