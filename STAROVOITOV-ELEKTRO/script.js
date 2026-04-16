// Scroll Top Button

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll animations

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// Sections

document.querySelectorAll("section").forEach((section, index) => {
  if (index % 2 === 0) {
    section.classList.add("fade-left");
  } else {
    section.classList.add("fade-right");
  }

  observer.observe(section);
});

// Gallery animation
document.querySelectorAll(".gallery-item").forEach((item) => {
  observer.observe(item);
});

// LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
});
