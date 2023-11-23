document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function showSlide(newIndex) {
        slides[index].classList.remove("active");
        index = (newIndex + slides.length) % slides.length;
        slides[index].classList.add("active");
        updateSlider();
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    // Auto slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});