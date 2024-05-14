let slideIndex = 1;
  let slideInterval;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (n > totalSlides) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = totalSlides;
    }

    const translation = -100 * (slideIndex - 1) + '%';
    slides.style.transform = 'translateX(' + translation + ')';
  }

  function startAutoSlideshow() {
    slideInterval = setInterval(function () {
      plusSlides(1);
    }, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)
  }

  startAutoSlideshow();