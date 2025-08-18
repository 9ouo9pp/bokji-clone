

const swiper2 = new Swiper(".swiperShare", {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 40,
    pagination: {

        clickable: true,
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        860: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        640: {
            slidesPerView: 2,
            centeredSlides: false,
        },
    }
});