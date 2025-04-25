const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
let currenstSlideIndex = 0;
function showSlide() {
    slides[currenstSlideIndex].classList.add("block");
}
function hideSlide() {
    slides[currenstSlideIndex].classList.remove("block");
}
function nextSlide() {
    hideSlide()
    currenstSlideIndex ++;
    if(currenstSlideIndex > slides.length - 1) {
        currenstSlideIndex = 0;
    }
    showSlide();
}
function previousSlide() {
    hideSlide();
    currenstSlideIndex --;
    if(currenstSlideIndex < 0) {
        currenstSlideIndex = slides.length - 1;
    }
    showSlide();
}
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);