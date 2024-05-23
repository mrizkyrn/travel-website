const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

const contactForm = document.getElementById('contact-form');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  navLinks.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('open');
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted!');

  contactForm.reset();
});