const swiperVisual = new Swiper(".swiperVisual", {
    spaceBetween: 800,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".visual-next",
        prevEl: ".visual-prev",
    },
});

const toggleBtn = document.querySelector(".visual-stop-play");
let isPaused = false;

toggleBtn.addEventListener("click", () => {
    if (isPaused) {
        swiperVisual.autoplay.start();
        toggleBtn.classList.remove("playing");
    }
    else {
        swiperVisual.autoplay.stop();
        toggleBtn.classList.add("playing");
    }
    isPaused = !isPaused
});