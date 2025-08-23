// 공지사항 콘텐츠 채우기
const notices = [
    { id: 1, title: "[공지] 사회복지법인 선한목자재단 155차 이사회 회의록 공개", author: "관리자", date: "2025-08-20", views: 8 },
    { id: 2, title: "8월 복지관 휴관 안내", author: "관리자", date: "2025-08-01", views: 101 },
    { id: 3, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 4, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 5, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 6, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 7, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 8, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 9, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 10, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 11, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
    { id: 12, title: "복지관 5층 강당 공사 안내 (8.4~8.17)", author: "관리자", date: "2025-07-25", views: 114 },
];

// 공지사항 콘텐츠 채우기 함수
function createNoticeRow({ id, title, author, date, views }) {
    return `
    <tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>${author}</td>
    <td>${date}</td>
    <td>${views}</td>
    </tr>   
    `;
}

// 공지사항 콘텐츠 채우기 html연결
const tbody = document.querySelector("#noticeTable tbody");
tbody.innerHTML = notices.map(createNoticeRow).join("");
// map으로 배열의 각 요소를 html로 변환
// join으로 배열을 문자열로 함쳐 테이블 삽입.

// -------------------------------------------
// 페이지 네이션
const pagination = document.querySelector("#pagination");

function createPageButton(page) {
    return `<button class="page-btn" data-page="${page}">${page}</button>`;
}

// 전체 페이지 수
const totalPages = 5;
pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => createPageButton(i + 1)).join("");

// =============================================================================
// 검색어
// ----- 기존 notices, createNoticeRow, tbody 선언 그대로 사용 -----

// 공지사항 렌더링 함수 (검색, 페이지네이션 모두에서 호출 가능)
function renderNotices(data) {
    tbody.innerHTML = data.map(createNoticeRow).join("");
}

// 최초 전체 목록 출력
renderNotices(notices);

// -------------------------------------------
// 검색 기능
const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // form 전송 막기

    const searchType = document.querySelector("#search-type").value; // title, content, author
    const keyword = document.querySelector("#search").value.trim().toLowerCase();

    // 검색 실행
    const filtered = notices.filter(notice =>
        notice[searchType].toLowerCase().includes(keyword)
    );



    // 검색 결과 렌더링
    renderNotices(filtered);
});
