const translations = {
    vi: {
        phongnha_title: "Phong Nha",
        phongnha_paragraph_1: "Phong Nha, một kỳ quan thiên nhiên nổi tiếng ở Quảng Bình, Việt Nam, được biết đến với những hang động kỳ vĩ và phong cảnh tuyệt đẹp. Nổi bật trong số đó là động Phong Nha, một trong những hang động lớn và dài nhất thế giới, với những thạch nhũ kỳ lạ và kiến trúc thiên nhiên độc đáo. Không chỉ là điểm đến của những người yêu thích khám phá, Phong Nha còn là nơi lưu giữ nhiều giá trị văn hóa và lịch sử của vùng đất này.",
        phongnha_paragraph_2: "Khám phá Phong Nha không chỉ là hành trình vào những hang động huyền bí mà còn là cơ hội để du khách thưởng thức vẻ đẹp hoang sơ của thiên nhiên, với các con suối trong xanh và những cánh rừng nguyên sinh. Du khách có thể tham gia các chuyến thám hiểm vào lòng đất, hay tham quan các điểm du lịch nổi tiếng như Động Tiên Sơn, Hang Sơn Đoòng, và nhiều địa điểm đẹp khác.",
        back_button: "Quay lại",
        book_tour_button: "Đặt tua"
    },
    en: {
        phongnha_title: "Phong Nha",
        phongnha_paragraph_1: "Phong Nha, a famous natural wonder in Quang Binh, Vietnam, is known for its magnificent caves and stunning landscapes. Among them is Phong Nha Cave, one of the largest and longest caves in the world, with strange stalactites and unique natural formations. Not only is it a destination for adventurers, but Phong Nha also preserves many cultural and historical values of this land.",
        phongnha_paragraph_2: "Exploring Phong Nha is not only a journey into mysterious caves but also an opportunity to enjoy the pristine beauty of nature, with crystal-clear streams and virgin forests. Visitors can join expeditions deep into the earth or visit famous tourist spots like Tien Son Cave, Son Doong Cave, and many other beautiful locations.",
        back_button: "Back",
        book_tour_button: "Book Tour"
    }
};


function toggleLanguage() {
    // Lấy trạng thái hiện tại của ngôn ngữ từ localStorage
    let currentLang = localStorage.getItem("lang") || "vi"; 

    // Chuyển sang ngôn ngữ khác
    let newLang = currentLang === "vi" ? "en" : "vi";
    changeLanguage(newLang);
}

function changeLanguage(lang) {
    if (!translations[lang]) return console.error(`❌ Ngôn ngữ "${lang}" không tồn tại!`);

    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translations[lang][key] || element.innerHTML;
    });

    // Cập nhật giao diện nút ngôn ngữ (icon)
    const langIcon = document.getElementById("language-icon");
    if (lang === "vi") {
        langIcon.src = "Hinh/vn.jpg"; // Cập nhật icon Tiếng Việt
    } else {
        langIcon.src = "Hinh/eng.jpg"; // Cập nhật icon English
    }
}

// Khi trang tải xong, chạy luôn ngôn ngữ đang lưu (hoặc mặc định là "vi")
window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    changeLanguage(savedLang);
});
