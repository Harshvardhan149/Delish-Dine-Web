// Testimonials Carousel
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

if (testimonials.length > 0) {
  setInterval(() => {
    testimonials.forEach((t, i) => {
      t.style.display = (i === currentIndex) ? "block" : "none";
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
  }, 4000);
}

// Menu Filter
function filterMenu(category) {
  let items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Gallery Lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = "flex";
  document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

// Contact Form Validation
function validateForm() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }
  alert("Message sent successfully.");
  return false; // prevent actual submit since no backend
}
