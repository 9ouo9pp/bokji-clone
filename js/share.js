$(function () {
    $(".tab-list li").click(function (e) {
        e.preventDefault();

        const index = $(this).index();

        // 1. 탭 메뉴 on 클래스 토글
        $(".tab-list li").removeClass("on");
        $(this).addClass("on");

        // 2. 탭 콘텐츠 on 클래스 토글
        $(" .tab-item").removeClass("on");
        $(" .tab-item").eq(index).addClass("on");
    });
});