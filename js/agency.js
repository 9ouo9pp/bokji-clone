const swiperAgency = new Swiper(".swiperAgency", {
    spaceBetween: 40,
    slidesPerView: 5,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".agency-next",
        prevEl: ".agency-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 4
        },
        480: {
            slidesPerView: 3
        },
        400: {
            slidesPerView: 2
        }
    }
});
