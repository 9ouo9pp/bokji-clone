$(function () {
    // 탭 메뉴 항목을 클릭했을 때
    $(".tab-list a").on("click", function (e) {
        e.preventDefault(); // ✅ 링크의 기본 동작(새로고침, 페이지 이동 등)을 막습니다.

        // 모든 탭 메뉴 항목과 모든 콘텐츠에서 'on' 클래스를 제거합니다.
        // li와 a 태그 모두에서 'on' 클래스를 제거하여 활성 상태를 초기화합니다.
        $(".tab-list li, .news-item").removeClass("on");

        // 클릭된 탭 메뉴의 부모인 li와 해당 a 태그에 'on' 클래스를 추가합니다.
        // `$(this)`는 클릭된 `<a>` 태그를 가리킵니다.
        $(this).parent().addClass("on");
        $(this).addClass("on");

        // 클릭된 탭 메뉴의 순서를 찾습니다. (li의 순서를 찾는 것이 더 정확)
        let index = $(this).parent().index();

        // 그 순서에 맞는 콘텐츠에 'on' 클래스를 추가합니다.
        $(".news-item").eq(index).addClass("on");
    });

    // 페이지 로드 시 첫 번째 탭을 기본으로 활성화합니다.
    $(".tab-list li").eq(0).trigger("click");
});