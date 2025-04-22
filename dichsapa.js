const translations = {
    vi: {
        sapa_title: "Sapa",
        sapa_paragraph_1: "Sapa, một điểm đến nổi tiếng ở vùng núi phía Bắc Việt Nam, nổi bật với vẻ đẹp hùng vĩ của dãy Hoàng Liên Sơn và những thửa ruộng bậc thang xanh mướt. Du khách đến đây không chỉ để thưởng thức không khí trong lành mà còn để khám phá nét văn hóa độc đáo của các dân tộc thiểu số như H'mông, Dao đỏ.",
        sapa_paragraph_2: "Ngoài những chuyến trekking, Sapa còn nổi tiếng với những cảnh sắc kỳ vĩ như Fansipan, đỉnh núi cao nhất Đông Dương, và thung lũng Mường Hoa huyền bí. Cảnh quan thiên nhiên kết hợp với sự hiếu khách của người dân địa phương đã tạo nên một địa điểm du lịch hấp dẫn không thể bỏ qua.",
        back_button: "Quay lại",
        book_tour_button: "Đặt tua"
    },
    en: {
        sapa_title: "Sapa",
        sapa_paragraph_1: "Sapa, a famous destination in northern Vietnam, is known for the majestic beauty of the Hoang Lien Son mountain range and its lush terraced rice fields. Visitors come here not only to enjoy the fresh air but also to explore the unique culture of ethnic minorities such as the H'mong and Red Dao.",
        sapa_paragraph_2: "Besides trekking, Sapa is also famous for its breathtaking landscapes like Fansipan, the highest peak in Indochina, and the mysterious Muong Hoa Valley. The natural beauty combined with the hospitality of the local people makes it a must-visit travel destination.",
        back_button: "Back",
        book_tour_button: "Book Tour"
    }
};

function toggleLanguage() {
    let currentLang = localStorage.getItem("lang") || "vi";
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

    const langIcon = document.getElementById("language-icon");
    if (lang === "vi") {
        langIcon.src = "Hinh/vn.jpg";
    } else {
        langIcon.src = "Hinh/eng.jpg";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    changeLanguage(savedLang);
});
