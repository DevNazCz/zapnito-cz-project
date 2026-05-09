// Functionality for "Scroll to Top" button
const setupScrollTop = () => {
  const scrollBtn = document.getElementById("scrollTop");

  if (!scrollBtn) {
    console.warn(
      "Кнопка #scrollTop не найдена на этой странице. Скрипт прокрутки пропущен.",
    );
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

// Animation setup using Intersection Observer
const setupAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll("section").forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? "fade-left" : "fade-right");
    observer.observe(section);
  });

  document.querySelectorAll(".gallery-item").forEach((item) => {
    observer.observe(item);
  });
};

// Lightbox for gallery images
const setupLightbox = () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryImages = document.querySelectorAll(".gallery-item img");

  if (!lightbox || !lightboxImg) {
    console.warn("Элементы лайтбокса не найдены.");
    return;
  }

  galleryImages.forEach((img) => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();

      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    document.body.style.overflow = "auto";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupScrollTop();
  setupAnimations();
  setupLightbox();
});
