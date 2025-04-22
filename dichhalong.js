const translations = {
    vi: {
        ha_long_title: "Vịnh Hạ Long",
        ha_long_paragraph_1: "Vịnh Hạ Long, một viên ngọc bích lấp lánh giữa vùng biển Đông Bắc Việt Nam, không chỉ đơn thuần là một danh lam thắng cảnh mà còn là một bản giao hưởng tuyệt vời của thiên nhiên và thời gian. Hàng ngàn hòn đảo đá vôi với đủ hình dáng kỳ thú, từ những cột trụ sừng sững vươn mình lên từ mặt nước xanh ngọc bích đến những mái vòm mềm mại như đang ôm trọn bầu trời, tạo nên một bức tranh thủy mặc sống động và đầy mê hoặc.",
        ha_long_paragraph_2: "Khi ánh bình minh dát vàng lên những đỉnh núi đá, hay khi hoàng hôn buông xuống nhuộm đỏ cả một vùng trời, Vịnh Hạ Long lại khoác lên mình những chiếc áo choàng lộng lẫy khác nhau, khơi gợi trong lòng du khách bao cảm xúc. Không chỉ có vẻ đẹp bề ngoài, lòng vịnh còn ẩn chứa những hang động kỳ vĩ với hệ thống nhũ đá và măng đá huyền ảo, được kiến tạo qua hàng triệu năm, như động Thiên Cung lộng lẫy hay hang Đầu Gỗ cổ kính.",
        ha_long_paragraph_3: "Vịnh Hạ Long đã được UNESCO công nhận là Di sản thiên nhiên thế giới vào năm 1994, và đây là một trong những điểm du lịch hấp dẫn bậc nhất ở Việt Nam. Vịnh Hạ Long không chỉ có vẻ đẹp thiên nhiên tuyệt vời mà còn mang trong mình những giá trị lịch sử, văn hóa đặc sắc, là nơi lưu giữ dấu ấn của những nền văn minh cổ đại.",
        ha_long_paragraph_4: "Nơi đây cũng là một trong những địa điểm lý tưởng để tham gia các hoạt động thể thao nước như chèo thuyền kayak, lặn biển hay tham gia các chuyến tham quan trên du thuyền. Vịnh Hạ Long không chỉ mang đến những giây phút thư giãn mà còn là cơ hội để bạn khám phá vẻ đẹp tuyệt vời của thiên nhiên biển cả.",
        back_button: "Quay lại",
        book_tour_button: "Đặt tua"
    },
    en: {
        ha_long_title: "Ha Long Bay",
        ha_long_paragraph_1: "Ha Long Bay, a shimmering jade gem in the northeastern sea of Vietnam, is not just a scenic destination but a magnificent symphony of nature and time. Thousands of limestone islands with fascinating shapes — from towering pillars rising from emerald waters to soft domes embracing the sky — create a vivid and enchanting ink painting.",
        ha_long_paragraph_2: "When golden sunlight bathes the rocky peaks at dawn, or when sunset paints the sky in crimson hues, Ha Long Bay dons magnificent cloaks that stir deep emotions in visitors. Beyond its outer beauty, the bay conceals majestic caves adorned with shimmering stalactites and stalagmites formed over millions of years, such as the splendid Heavenly Palace Cave or the ancient Dau Go Cave.",
        ha_long_paragraph_3: "Ha Long Bay was recognized as a UNESCO World Natural Heritage site in 1994, and it is one of the most popular tourist destinations in Vietnam. Ha Long Bay not only offers incredible natural beauty but also holds cultural and historical values, preserving the marks of ancient civilizations.",
        ha_long_paragraph_4: "It is also one of the best places to engage in water sports such as kayaking, scuba diving, or taking a cruise on a boat. Ha Long Bay offers not only moments of relaxation but also the chance to discover the stunning beauty of the natural marine landscape.",
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
