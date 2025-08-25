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
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseBox = document.getElementById('formResponse');

  responseBox.style.display = "block";

  if (name === "" || email === "" || message === "") {
    responseBox.innerHTML = "⚠️ Please fill out all fields.";
    responseBox.style.color = "red";
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    responseBox.innerHTML = "⚠️ Please enter a valid email address.";
    responseBox.style.color = "red";
    return false;
  }

  responseBox.innerHTML = "✅ Message sent successfully.";
  responseBox.style.color = "green";

  document.getElementById('contactForm').reset();

  return false; // prevent actual submission
}

document.addEventListener("input", () => {
  const responseBox = document.getElementById('formResponse');
  if (responseBox) {
    responseBox.style.display = "none";
  }
});

// Reservation Form Confirmation
const reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
      showModal("⚠️ Please select a valid date and time for your reservation.");
      return;
    }

    showModal(`✅ Reservation Confirmed!<br>Please arrive on <b>${date}</b> at <b>${time}</b>.`);
    this.reset();
  });
}

function showModal(message) {
  const modal = document.getElementById("customModal");
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.innerHTML = message;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("customModal").style.display = "none";
}
