// Hàm mở cửa sổ nhập thông tin
function openModal(placeName) {
  const modal = document.getElementById("orderModal");
  modal.style.display = "flex";
  modal.setAttribute("data-place", placeName);  // Lưu thông tin địa điểm vào modal
}

// Hàm đóng cửa sổ
function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

// Hàm xử lý khi người dùng đặt tour
function submitOrder() {
  const modal = document.getElementById("orderModal");
  const placeName = modal.getAttribute("data-place");
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const people = document.getElementById("people").value;
  const date = document.getElementById("date").value;

  if (name && email && phone && people && date) {
    // Lưu thông tin đơn đặt tour
    const order = {
      name: name,
      place: placeName,
      people: people,
      date: date,
    };
    orders.push(order);

    // Hiển thị thông báo
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `Quý khách ${name} đã đặt tour đi ${placeName} vào ngày ${date}`;
    notification.onclick = () => alert(notification.innerHTML);
    document.body.appendChild(notification);
    
    // Hiển thị thông báo
    setTimeout(() => notification.style.display = "block", 500);
    
    // Đóng cửa sổ và reset form
    closeModal();
    document.getElementById("orderForm").reset();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
}


// Cửa sổ modal
function openModal() {
    document.getElementById("tourModal").style.display = "block";
  }
  
  // Đóng modal
  function closeModal() {
    document.getElementById("tourModal").style.display = "none";
  }
  
  // Xử lý gửi form và hiển thị thông báo thành công
  function submitTour(event) {
    event.preventDefault();  // Ngăn không cho form tự động gửi
  
    // Lấy thông tin từ form
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;
    let date = document.getElementById("date").value;
  
    // Kiểm tra nếu tất cả các trường đều hợp lệ
    if (name && phone && email && people && date) {
      // Ẩn form và hiển thị thông báo thành công
      document.getElementById("tourForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  }
  
  // Đóng modal nếu người dùng nhấn ra ngoài
  window.onclick = function(event) {
    if (event.target == document.getElementById("tourModal")) {
      closeModal();
    }
  };
  




  const translations = {
    vi: {
      search_tour: "Tìm Kiếm Tour",
      search_placeholder: "Tìm Kiếm Địa Điểm",
      filter_by_price: "Lọc theo Giá",
      tour_price: "Giá Tour:",
      price_value: "Giá: 3,000,000 VND",
      landmark_name_vi: "Tên Điểm Tham Quan",
      halong_title: "Vịnh Hạ Long",
      halong_description: "Vịnh Hạ Long, một kỳ quan thiên nhiên của Việt Nam, làm say đắm lòng người bởi vẻ đẹp hùng vĩ của hàng ngàn hòn đảo đá vôi nhô lên giữa làn nước biển xanh ngọc bích. Những hang động kỳ ảo với nhũ đá và măng đá lung linh, cùng với những làng chài thanh bình nép mình bên vách núi, tạo nên một bức tranh sơn thủy hữu tình. Du thuyền trên vịnh, ngắm nhìn cảnh sắc thiên nhiên tuyệt diệu, là một trải nghiệm khó quên trong hành trình khám phá Việt Nam.",
      hue_title: "Huế",
      hue_description: "Huế, cố đô xưa của Việt Nam, mang trong mình vẻ đẹp cổ kính và trầm mặc của những lăng tẩm uy nghiêm, những ngôi chùa cổ kính và dòng sông Hương thơ mộng. Kinh thành Huế với kiến trúc độc đáo, kết hợp hài hòa giữa nét truyền thống Á Đông và phong cách phương Tây, là minh chứng cho một thời kỳ lịch sử vàng son. Đến Huế, du khách có thể cảm nhận được nhịp sống chậm rãi, thanh bình và khám phá những giá trị văn hóa, lịch sử sâu sắc.",
      phongnha_title: "Phong Nha",
      phongnha_description: "Phong Nha - Kẻ Bàng, vương quốc hang động của Việt Nam, ẩn chứa vô vàn điều kỳ diệu dưới lòng đất. Những hang động tráng lệ như Sơn Đoòng, hang Én, động Thiên Đường với hệ thống thạch nhũ kỳ vĩ, kiến tạo độc đáo khiến bất cứ ai đặt chân đến đều phải ngỡ ngàng. Khám phá Phong Nha không chỉ là chiêm ngưỡng vẻ đẹp tự nhiên mà còn là một hành trình phiêu lưu đầy thú vị, khám phá những bí ẩn của thế giới ngầm.",
      sapa_title: "Sa Pa",
      sapa_description: "Sapa, thị trấn vùng cao mờ sương của Việt Nam, quyến rũ du khách bởi vẻ đẹp hoang sơ của những thửa ruộng bậc thang uốn lượn, những ngọn núi hùng vĩ và bản sắc văn hóa độc đáo của đồng bào các dân tộc thiểu số. Khí hậu mát mẻ quanh năm, những phiên chợ rực rỡ sắc màu và những cung đường trekking đầy thử thách là những trải nghiệm khó quên khi đến với Sapa.",
      book_tour_button: "Đặt Tour",
      halong_price: "Giá: 2,000,000 VND",
      hue_price: "Giá: 800,000 VND",
      phongnha_price: "Giá: 4,000,000 VND",
      sapa_price: "Giá: 5,000,000 VND"
    },
    en: {
      search_tour: "Search Tour",
      search_placeholder: "Search Destination",
      filter_by_price: "Filter by Price",
      tour_price: "Tour Price:",
      price_value: "Price: $120",
      landmark_name_en: "Landmark Name",
      halong_title: "Ha Long Bay",
      halong_description: "Ha Long Bay, a natural wonder of Vietnam, captivates with the majestic beauty of thousands of limestone islands rising from emerald waters. Magical caves with sparkling stalactites and peaceful fishing villages nestled by cliffs create a poetic landscape. Cruising the bay and admiring the scenery is an unforgettable experience in exploring Vietnam.",
      hue_title: "Hue",
      hue_description: "Hue, the ancient capital of Vietnam, exudes a serene and historic charm with solemn royal tombs, ancient pagodas, and the poetic Perfume River. The Hue Imperial City, with its unique architecture blending Eastern tradition and Western style, reflects a glorious historical era. Visitors can enjoy a peaceful pace of life and explore deep cultural and historical values.",
      phongnha_title: "Phong Nha",
      phongnha_description: "Phong Nha - Ke Bang, the cave kingdom of Vietnam, hides countless underground wonders. Spectacular caves like Son Doong, Hang En, and Paradise Cave with magnificent stalactite formations leave visitors in awe. Exploring Phong Nha is not only about natural beauty but also an adventurous journey into underground mysteries.",
      sapa_title: "Sa Pa",
      sapa_description: "Sapa, a misty highland town in Vietnam, charms visitors with its terraced rice fields, majestic mountains, and the unique cultures of ethnic minorities. With a cool climate year-round, colorful markets, and challenging trekking routes, Sapa offers unforgettable experiences.",
      book_tour_button: "Book Tour",
      halong_price: "Price: 87 USD",
      hue_price: "Price: 35 USD",
      phongnha_price: "Price: 174 USD",
      sapa_price: "Price: 217 USD"
    },
  };
  
  function changeLanguage(lang) {
    if (!translations[lang]) {
      console.error(`❌ Ngôn ngữ "${lang}" không tồn tại!`);
      return;
    }
  
    localStorage.setItem("lang", lang);
  
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  
    updatePriceValue(); // cập nhật giá
  }
  
  function formatCurrency(value, lang) {
    return lang === "en"
      ? `Price: $${(value / 25000).toFixed(0)}`
      : `Giá: ${value.toLocaleString("vi-VN")} VND`;
  }
  
  function updatePriceValue() {
    const lang = localStorage.getItem("lang") || "vi";
    const value = parseInt(priceRange.value);
    priceValue.textContent = formatCurrency(value, lang);
    filterByPrice(); // <-- Gọi hàm lọc tại đây
  }
  
  function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("searchResults");
    results.innerHTML = "";
    if (!input) return;
  
    const lang = localStorage.getItem("lang") || "vi";
    const labelKey = lang === "vi" ? "landmark_name_vi" : "landmark_name_en";
  
    landmarks.forEach((landmark) => {
      if (landmark.name.toLowerCase().includes(input)) {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="javascript:void(0)" onclick="openModal('${landmark.name}')">
            <img src="${landmark.image}" alt="${landmark.name}">
            <span data-i18n="${labelKey}">${landmark.name}</span>
          </a>`;
        results.appendChild(li);
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    changeLanguage(savedLang);
  
    document.getElementById("english").addEventListener("click", () => changeLanguage("en"));
    document.getElementById("vietnamese").addEventListener("click", () => changeLanguage("vi"));
  
    priceRange.addEventListener("input", updatePriceValue);
    updatePriceValue();
  });
  
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  

  function filterByPrice() {
    const maxPrice = parseInt(priceRange.value);
    document.querySelectorAll(".place-item").forEach((item) => {
      const price = parseInt(item.getAttribute("data-price"));
      item.style.display = price <= maxPrice ? "block" : "none";
    });
  }
  