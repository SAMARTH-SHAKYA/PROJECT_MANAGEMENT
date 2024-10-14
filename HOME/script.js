document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slide');
        const prevButton = slider.previousElementSibling; 
        const nextButton = slider.nextElementSibling; 

        function updateSlider() {

            currentIndex = (currentIndex < 0) ? slides.length - 1 : currentIndex % slides.length;
            slider.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        }

        prevButton.addEventListener('click', () => {
            currentIndex--; 
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex++; 
            updateSlider();
        });
    });
});
