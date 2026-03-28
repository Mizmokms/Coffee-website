const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    nav.classList.remove("active");
  });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);

const menuCards = document.querySelectorAll('.card');

menuCards.forEach(card => {
  card.addEventListener('click', () => {
    menuCards.forEach(c => {
      if(c !== card) c.classList.remove('expanded');
    });
    card.classList.toggle('expanded');
    const desc = card.getAttribute('data-description');
    card.querySelector('.card-description').textContent = card.classList.contains('expanded') ? desc : '';
  });
});