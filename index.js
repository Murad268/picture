document.addEventListener("DOMContentLoaded", function () {
  // ✅ SweetAlert ilə "Buy Now"
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
      Swal.fire({
        title: "Proceed to Checkout",
        text: "You are being redirected to the payment page.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Go to Checkout",
        cancelButtonText: "Cancel"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/checkout"; // Buraya checkout səhifəsinin URL-ni yaz
        }
      });
    });
  });
  // ✅ Swiper Setup
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 1000,
  });

  // ✅ Şəkillər dəyişdikcə mətnlər də dəyişsin
  const titles = [
    "Discover Timeless Art",
    "Explore Handcrafted Paintings",
    "Elevate Your Space with Unique Art"
  ];

  const texts = [
    "Immerse yourself in a world of exquisite paintings and stunning masterpieces.",
    "Browse exclusive collections of hand-painted artworks.",
    "Turn your walls into a gallery of inspiration and beauty."
  ];

  swiper.on('slideChange', function () {
    document.getElementById("hero-title").innerText = titles[swiper.realIndex];
    document.getElementById("hero-text").innerText = texts[swiper.realIndex];
  });

  // ✅ "Learn More" Bölməsinin Açılıb Bağlanması
  const readMoreBtn = document.querySelector(".read-more");
  const extraContent = document.querySelector(".extra-content");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
      if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        setTimeout(() => extraContent.style.opacity = "1", 50);
        readMoreBtn.innerText = "Show Less";
      } else {
        extraContent.style.opacity = "0";
        setTimeout(() => extraContent.style.display = "none", 400);
        readMoreBtn.innerText = "Learn More";
      }
    });
  }

  // ✅ Fancybox Aktivləşdirilməsi
  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: {
      autoStart: true,
    },
    Toolbar: {
      display: ["zoom", "close"],
    },
  });

 

  // ✅ Buy Now Click Event
  document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", function () {
      alert("Redirecting to Checkout!");
    });
  });

  // ✅ Tab Menyu Filtrləmə
  const tabs = document.querySelectorAll(".tab-btn");
  const products = document.querySelectorAll(".product-item");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const category = tab.getAttribute("data-category");

      // Aktiv düyməni dəyiş
      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      // Məhsulları filtrlə
      products.forEach(product => {
        if (category === "all" || product.getAttribute("data-category") === category) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});


