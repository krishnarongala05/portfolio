// Mobile Navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector(".navbar");

// Scroll Event for Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

burger.addEventListener("click", () => {
  // Toggle Navigation
  nav.classList.toggle("active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Typing Animation
const texts = [
  "Web Developer",
  "Java Developer",
  "DSA Expert",
  "Database Engineer",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = "I'm a " + letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Wait before starting next word
  } else {
    setTimeout(type, 100); // Type speed
  }
}

// Start typing animation when page loads
window.onload = () => {
  type();
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const formProps = Object.fromEntries(formData);

  // Here you would typically send the form data to a server
  console.log("Form submitted:", formProps);

  // Clear form
  this.reset();

  // Show success message
  alert("Thank you for your message! I will get back to you soon.");
});

// Scroll animations
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add scroll indicator
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (scrolled > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});
