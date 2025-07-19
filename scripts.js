/* Typing Effect */
const typedText = document.querySelector(".typing");
const textArray = ["Web Developer", "Full Stack Engineer", "Competitive Programmer", "Tech Enthusiast"];
let arrayIndex = 0, charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 500);
});

/* Particles.js */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#00f6ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00f6ff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 3 }
  }
});

/* Navbar Toggle */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Contact Form Success Message */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("success") === "true") {
    const msg = document.getElementById("success-message");
    if (msg) {
      msg.style.display = "block";

      // Remove query string from URL without reloading
      window.history.replaceState({}, document.title, window.location.pathname + "#contact");

      // Hide message after 5 seconds (optional)
      setTimeout(() => { msg.style.display = "none"; }, 5000);
    }
  }
});
