const swiper = new Swiper(".swiperParticipation", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.participation-next',
        prevEl: '.participation-prev',
    },
    // 반응형 설정
    breakpoints: {
        1300: {
            slidesPerView: 4,
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
    },

    // 기본 (640px 미만)
    slidesPerView: 1.5,
    centeredSlides: true,
});