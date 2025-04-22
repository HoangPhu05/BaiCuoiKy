const menubarBtn = document.querySelector('.header-top i');
menubarBtn.addEventListener("click", function() {
    document.querySelector('.header-top').classList.toggle('active');

});

// Lấy nút
const scrollToTopButton = document.getElementById("scroll-to-top");

// Khi cuộn trang xuống, hiển thị nút
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Khi nhấn nút, cuộn lên đầu trang
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});


    const landmarks = [
        { name: "Cố Đô Huế", link: "hue.html", image: "Hinh/hue.jpg" },
        { name: "Phong Nha - Kẻ Bàng", link: "phongnha.html", image: "Hinh/phongnha.jpg" },
        { name: "Sa Pa", link: "sapa.html", image: "Hinh/sapa.jpg" },
        { name: "Vịnh Hạ Long", link: "halong.html", image: "Hinh/halong.jpg" },
    ];

    function searchFunction() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let results = document.getElementById("searchResults");
        results.innerHTML = "";

        if (input === "") return;

        landmarks.forEach(function(landmark) {
            if (landmark.name.toLowerCase().includes(input)) {
                let listItem = document.createElement("li");
                listItem.innerHTML = `
                    <a href="${landmark.link}">
                        <img src="${landmark.image}" alt="${landmark.name}">
                        <span>${landmark.name}</span>
                    </a>
                `;
                results.appendChild(listItem);
            }
        });
    }

// Toggle tìm kiếm
const toggleBtn = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchContainer");

toggleBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  if (searchBox.classList.contains("active")) {
    searchBox.style.display = "block"; // Hiển thị thanh tìm kiếm
  } else {
    searchBox.style.display = "none";  // Ẩn thanh tìm kiếm khi không active
  }
});

// Kéo di chuyển search-container và icon
let isDragging = false;
let offsetX, offsetY;

const searchContainer = document.getElementById("searchContainer");
const searchIcon = document.getElementById("searchToggle");

searchIcon.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - searchIcon.offsetLeft;
  offsetY = e.clientY - searchIcon.offsetTop;
  searchIcon.style.cursor = "move";
  searchContainer.style.cursor = "move"; // Đảm bảo di chuyển cả thanh tìm kiếm
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    // Di chuyển cả icon và thanh tìm kiếm cùng nhau
    searchIcon.style.left = `${e.clientX - offsetX}px`;
    searchIcon.style.top = `${e.clientY - offsetY}px`;
    searchContainer.style.left = `${e.clientX - offsetX + 40}px`; // Thanh tìm kiếm sẽ luôn cách icon 30px
    searchContainer.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  searchIcon.style.cursor = "default";
  searchContainer.style.cursor = "default";
});

  // Khi cuộn trang, kiểm tra các phần tử để thêm class 'visible' cho các phần tử khi chúng xuất hiện trong viewport
window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });


//-------------------------------------------------------
    let index = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(i) {
      const carousel = document.getElementById('reviewCarousel');
      index = (i + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }

    showSlide(index); // Khởi tạo slide đầu tiên

  function handleSignup() {
    const email = document.getElementById("signup-email").value.trim();
    if (email === "") {
      alert("Vui lòng nhập email.");
    } else {
      alert("Đăng ký thành công!");
    }
  }

  function handleContact() {
    const name = document.getElementById("contact-name").value.trim();
    const address = document.getElementById("contact-address").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const message = document.getElementById("contact-message").value.trim();
  
    if (!name || !address || !email || !phone || !message) {
      alert("Vui lòng nhập đầy đủ thông tin.");
    } else if (!email.includes("@")) {
      alert("Email không hợp lệ..");
    } else if (!/^\d{10}$/.test(phone)) {
      alert("Số điện thoại phải đúng 10 chữ số.");
    } else {
      alert("Gửi liên hệ thành công!");
    }
  }
  
  
  function handleSignup() {
    const email = document.getElementById("signup-email").value.trim();
    if (email === "") {
      alert("Vui lòng nhập email.");
    } else if (!email.includes("@")) {
      alert("Email không hợp lệ.");
    } else {
      alert("Đăng ký thành công!");
    }
  }
  

  function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  
document.getElementById("toggle-theme").addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("light-mode");

  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (body.classList.contains("light-mode")) {
    themeIcon.src = "Hinh/mattroi.jpg";
    themeText.textContent = "Chế Độ Sáng";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.src = "Hinh/mattrang.jpg";
    themeText.textContent = "Chế Độ Tối";
    localStorage.setItem("theme", "dark");
  }
});

// Tự động áp dụng giao diện khi tải trang
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "Hinh/mattroi.jpg";
    themeText.textContent = "Chế Độ Sáng";
  } else {
    body.classList.remove("light-mode");
    themeIcon.src = "Hinh/mattrang.jpg";
    themeText.textContent = "Chế Độ Tối";
  }
});
document.getElementById("toggle-theme").addEventListener("click", function () {
    const container = document.querySelector(".container");
  
    if (container) {
      container.classList.toggle("light-mode");
      container.classList.toggle("dark-mode");
      document.querySelectorAll(".review-item").forEach(function (item) {
        item.classList.toggle("light-mode");
        item.classList.toggle("dark-mode");
      });
  
      // Lưu trạng thái vào localStorage
      localStorage.setItem(
        "theme",
        container.classList.contains("light-mode") ? "light" : "dark"
      );
    }
  });
  
  // Kiểm tra và đặt lại chế độ khi tải trang
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "light") {
      container.classList.add("light-mode");
      container.classList.remove("dark-mode");
    } else {
      container.classList.add("dark-mode");
      container.classList.remove("light-mode");
    }
  });
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0s";
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => {
    observer.observe(el);
  });
  
  


  
  // Dịch
  const translations = {
    vi: {
      highlighted_places: "Địa điểm nổi bật",
      about_us: "Về chúng tôi",
      tour: "Tour",
      feedback: "Phản hồi",
      contact: "Liên hệ",
      dark_mode: "Chế Độ Tối",
      destination_title: "Tiến Đến Vùng Trời Mới",
      backpack_and_go: "Xách ba lô lên và đi thôi nào",
      where_to_go: "Bạn muốn đi đâu hè này",
      destination: "Địa điểm",
      number_of_people: "Số người",
      departure_date: "Ngày đi",
      back: "⬅ Quay lại",
  
      // about section
      about_title: "Thông tin về chúng tôi",
      why_choose_us: "Tại sao bạn nên chọn chúng tôi?",
      about_desc: "Công ty Du lịch Đế Bảo tự hào là người bạn đồng hành tin cậy trên mọi hành trình khám phá vẻ đẹp Việt Nam và thế giới. Với đội ngũ chuyên viên giàu kinh nghiệm, nhiệt huyết và am hiểu sâu sắc về du lịch, chúng tôi cam kết mang đến những trải nghiệm độc đáo, chất lượng và đáng nhớ cho quý khách. Từ những tour du lịch khám phá thiên nhiên hùng vĩ, di sản văn hóa đặc sắc đến những kỳ nghỉ dưỡng thư thái và những chuyến đi mạo hiểm đầy hứng khởi, Đế Bảo luôn nỗ lực tạo ra những sản phẩm đa dạng, phù hợp với mọi nhu cầu và sở thích. Hãy để Đế Bảo đồng hành cùng bạn trên con đường khám phá những chân trời mới!",
      service_booking: "Đặt tour",
      service_247: "Dịch vụ 24/7",
      service_guidebook: "Sổ tay du lịch",
  
      // nice-place section
      halong_desc: "Vịnh Hạ Long kỳ vĩ với hàng ngàn đảo đá vôi nhô lên từ mặt nước xanh ngọc bích, tạo nên bức tranh thiên nhiên huyền ảo.",
      hue_desc: "Huế mộng mơ với dòng sông Hương thơ mộng chảy giữa lòng cố đô, nơi lưu giữ những dấu ấn vàng son của triều Nguyễn.",
      phongnha_desc: "Phong Nha kỳ bí với những hang động kỳ vĩ, tráng lệ như động Phong Nha và động Thiên Đường, ẩn chứa vẻ đẹp nguyên sơ của tạo hóa.",
      book_tour: "Đặt Tour",

      tour_title: "Tour hè 2025",
      halong_desc: "Vịnh Hạ Long, kỳ quan thiên nhiên nổi bật với hàng ngàn đảo đá vôi giữa biển xanh ngọc. Những hang động kỳ bí và làng chài thanh bình tạo nên vẻ đẹp huyền bí.",
      hue_desc: "Huế, cố đô xưa với lăng tẩm uy nghiêm và kiến trúc kết hợp Á Đông và phương Tây. Đến Huế, du khách cảm nhận nhịp sống chậm và khám phá văn hóa, lịch sử sâu sắc.",
      phongnha_desc: "Phong Nha - Kẻ Bàng, vương quốc hang động với các hang động kỳ vĩ như Sơn Đoòng, động Thiên Đường. Khám phá vẻ đẹp tự nhiên và bí ẩn dưới lòng đất.",
      sapa_desc: "Sapa, thị trấn vùng cao nổi bật với ruộng bậc thang, núi non hùng vĩ và văn hóa độc đáo. Khí hậu mát mẻ và các chuyến trekking là trải nghiệm tuyệt vời.",
      learn_more: "Tìm Hiểu",

      signup_title: "Đăng Ký",
      send_button: "Gửi",
      contact_title: "Liên Hệ",

      other_info_title: "Thông tin khác",
      headquarters_address: "Trụ sở Trung Ương: Tầng 7, Tháp mật 3, Khu vực Liên Hiệp Alpha Centauri.",
      support_hours: "Thời gian hỗ trợ khách hàng: 8:00 - 22:00 tất cả các ngày trong tuần",
      contact_email: "Liên hệ bộ phận Chăm sóc Khách hàng qua email: support@tourviet.vn để được hỗ trợ nhanh chóng.",
    },
    en: {
      highlighted_places: "Highlighted Places",
      about_us: "About Us",
      tour: "Tour",
      feedback: "Feedback",
      contact: "Contact",
      dark_mode: "Dark Mode",
      destination_title: "Heading to New Skies",
      backpack_and_go: "Grab your backpack and let's go!",
      where_to_go: "Where do you want to go this summer?",
      destination: "Destination",
      number_of_people: "Number of People",
      departure_date: "Departure Date",
      back: "⬅ Back",
  
      // about section
      about_title: "About Us",
      why_choose_us: "Why should you choose us?",
      about_desc: "De Bao Travel is proud to be your trusted companion on every journey to explore the beauty of Vietnam and the world. With a team of experienced, passionate, and knowledgeable professionals, we are committed to delivering unique, high-quality, and memorable experiences. From nature exploration tours, cultural heritage trips to relaxing vacations and thrilling adventures, De Bao strives to offer diverse products tailored to all needs and preferences. Let De Bao be your partner in discovering new horizons!",
      service_booking: "Booking",
      service_247: "24/7 Service",
      service_guidebook: "Guide Book",
  
      // nice-place section
      halong_desc: "Majestic Ha Long Bay with thousands of limestone islands rising from emerald waters creates a magical natural painting.",
      hue_desc: "Dreamy Hue with the poetic Perfume River flowing through the ancient capital, preserving the golden legacy of the Nguyen Dynasty.",
      phongnha_desc: "Mysterious Phong Nha with magnificent caves like Phong Nha and Paradise caves, showcasing nature’s pristine beauty.",
      book_tour: "Book Tour",

      tour_title: "Summer Tour 2025",
      halong_desc: "Ha Long Bay, a natural wonder with thousands of limestone islands in turquoise waters. Mysterious caves and peaceful fishing villages create a magical beauty.",
      hue_desc: "Hue, the ancient capital with majestic tombs and a blend of Eastern and Western architecture. Visitors experience a slow pace of life.",
      phongnha_desc: "Phong Nha - Ke Bang, a cave kingdom with majestic caves like Son Doong and Paradise Cave. Explore the natural beauty and mysteries underground.",
      sapa_desc: "Sapa, a highland town with terraced fields, towering mountains, and unique cultures. Cool weather and trekking experiences make it a memorable destination.",
      learn_more: "Learn More",

      signup_title: "Sign Up",
      send_button: "Send",
      contact_title: "Contact",

      headquarters_address: "Headquarters: 7th Floor, Tower 3, Alpha Centauri United Area.",
      support_hours: "Customer support hours: 8:00 AM - 10:00 PM, every day of the week",
      contact_email: "Contact Customer Support via email: support@tourviet.vn for fast assistance.",

    },
  };
  
  function changeLanguage(lang) {
    if (!translations[lang]) return console.error(`❌ Ngôn ngữ "${lang}" không tồn tại!`);
  
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.innerHTML = translations[lang][key] || element.innerHTML;
    });
  
    // Cập nhật giao diện nút ngôn ngữ (icon + text)
    const langIcon = document.getElementById("language-icon");
    const langText = document.getElementById("language-text");
  
    if (lang === "vi") {
      langIcon.src = "Hinh/vn.jpg";
      langText.textContent = "Tiếng Việt";
    } else {
      langIcon.src = "Hinh/eng.jpg";
      langText.textContent = "English";
    }
  }

  
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    changeLanguage(savedLang);
  
    document.getElementById("toggle-language").addEventListener("click", () => {
      const currentLang = localStorage.getItem("lang") || "vi";
      const newLang = currentLang === "vi" ? "en" : "vi";
      changeLanguage(newLang);
    });
  });
  
  
  
  function showAd() {
    // Hiển thị quảng cáo khi nhấn vào video hoặc icon quảng cáo
    document.getElementById("promo-ad").style.display = "flex";
  }
  
  function closeAd() {
    // Đóng quảng cáo khi nhấn vào nút "Đóng"
    document.getElementById("promo-ad").style.display = "none";
  }
// Hàm hiển thị cửa sổ quảng cáo
document.querySelector(".ad-icon").addEventListener("click", function () {
  document.getElementById("ad-popup").style.display = "block";
});

// Hàm đóng cửa sổ quảng cáo khi nhấn vào chữ X
function closeAdPopup() {
  document.getElementById("ad-popup").style.display = "none";
}

// Ẩn icon khi nhấn X
document.getElementById("closeAdIcon").addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn sự kiện lan ra icon cha
  document.getElementById("adIcon").style.display = "none";
});

// Kéo icon quảng cáo
const adIcon = document.getElementById('adIcon');
let isDraggingAd = false;
let offsetAdX, offsetAdY;

adIcon.addEventListener('mousedown', startDragAd);
adIcon.addEventListener('touchstart', startDragAd, { passive: false });

function startDragAd(e) {
  const event = e.touches ? e.touches[0] : e;
  if (e.target.classList.contains('ad-close')) return; // Không kéo khi bấm nút X

  isDraggingAd = true;
  offsetAdX = event.clientX - adIcon.offsetLeft;
  offsetAdY = event.clientY - adIcon.offsetTop;
  adIcon.style.cursor = 'grabbing';
  e.preventDefault();
}

document.addEventListener('mousemove', moveAd);
document.addEventListener('touchmove', moveAd, { passive: false });

function moveAd(e) {
  if (isDraggingAd) {
    const event = e.touches ? e.touches[0] : e;
    adIcon.style.left = `${event.clientX - offsetAdX}px`;
    adIcon.style.top = `${event.clientY - offsetAdY}px`;
  }
}

document.addEventListener('mouseup', stopDragAd);
document.addEventListener('touchend', stopDragAd);

function stopDragAd() {
  isDraggingAd = false;
  adIcon.style.cursor = 'move';
}

