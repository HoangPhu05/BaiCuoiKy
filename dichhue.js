const translations = {
    vi: {
        hue_title: "Huế",
        hue_paragraph_1: "Huế, cố đô trầm mặc và quyến rũ nép mình bên dòng sông Hương thơ mộng, không chỉ là một thành phố với những di tích lịch sử uy nghiêm mà còn là nơi lưu giữ những giá trị văn hóa tinh túy của Việt Nam. Kinh thành Huế, với Hoàng thành lộng lẫy, nơi từng là trung tâm quyền lực của triều Nguyễn, mang trong mình những câu chuyện về một thời kỳ vàng son của dân tộc. Những lăng tẩm cổ kính của các vị vua Nguyễn, mỗi lăng một phong cách kiến trúc độc đáo, ẩn mình giữa những đồi thông xanh mát, thể hiện sự hòa quyện giữa thiên nhiên và nghệ thuật.",
        hue_paragraph_2: "Dạo bước trên những con phố rợp bóng cây, du khách có thể cảm nhận được nhịp sống chậm rãi, thanh bình của Huế. Tiếng chuông chùa ngân nga vọng lại từ những ngôi chùa cổ kính như chùa Thiên Mụ, soi bóng xuống dòng Hương Giang êm đềm. Ẩm thực Huế cũng là một nét văn hóa đặc sắc, với những món ăn cung đình tinh tế và những món ăn dân dã đậm đà hương vị địa phương, làm say lòng biết bao du khách.",
        back_button: "Quay lại",
        book_tour_button: "Đặt tua"
    },
    en: {
        hue_title: "Hue",
        hue_paragraph_1: "Hue, the quiet and charming ancient capital nestled along the poetic Perfume River, is not only a city with solemn historical relics but also a place that preserves the quintessential cultural values of Vietnam. The Imperial City of Hue, with its magnificent Citadel, once the power center of the Nguyen dynasty, carries stories of a glorious era. The ancient royal tombs, each with its own unique architecture, hidden among green pine hills, represent a harmony between nature and art.",
        hue_paragraph_2: "Strolling under tree-lined streets, visitors can feel the slow, peaceful rhythm of life in Hue. The sound of temple bells echoing from ancient pagodas like Thien Mu Pagoda, reflected in the gentle Perfume River, adds a spiritual touch. Hue's cuisine is also a cultural gem, offering both refined royal dishes and flavorful rustic fare that captivate many travelers.",
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
