$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $(".header").addClass("scroll");
    } else {
        $(".header").removeClass("scroll");
    }
});

// menu
$(".gnb li").mouseenter((e) => {
    e.preventDefault();
    $(".depth2").stop().fadeIn(200)
    $(".header").addClass("scroll");
});
$(".nav").mouseleave((e) => {
    e.preventDefault();
    $(".depth2").stop().fadeOut(200)
    $(".header").removeClass("scroll");
});