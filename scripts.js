/* Typing Effect */
const typedText = document.querySelector(".typing");
const textArray = ["Web Developer", "Full Stack Engineer", "Competitive Programmer", "Tech Enthusiast"];
let arrayIndex = 0; let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else { setTimeout(erase, 2000); }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", function () { if (textArray.length) setTimeout(type, 500); });

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
/* Navigation Menu */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
