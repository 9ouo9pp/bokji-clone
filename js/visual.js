const swiperVisual = new Swiper(".swiperVisual", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
});

const toggleBtn = document.querySelector(".custom-stop-play");
let isPaused = false;

toggleBtn.addEventListener("click", () => {
    if (isPaused) {
        swiperVisual.autoplay.start();
        toggleBtn.classList.remove(".playing");
    }
    else {
        swiperVisual.autoplay.stop();
        toggleBtn.classList.add(".playing");
    }
    isPaused = !isPaused
});