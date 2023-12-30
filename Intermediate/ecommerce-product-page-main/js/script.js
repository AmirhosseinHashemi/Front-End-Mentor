const darkOverlay = document.querySelector(".overlay");

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel__slide");

const navBtn = document.querySelector(".nav__btn");
const navIcon = document.querySelectorAll(".nav__btn img");
const navMenu = document.querySelector(".nav__list");
// const hamIcon = document.querySelector('.nav__hamburger');
// const closeIcon = document.querySelector('.nav__close');

// carousel
const maxSlide = slides.length - 1;
let current = 0;

const move = function (btn) {
  if (btn.dataset.go === "next") next();
  if (btn.dataset.go === "previous") previous();
};

const next = function () {
  if (current === maxSlide) current = 0;
  else current++;

  movmentSlide();
};

const previous = function () {
  if (current === 0) current = maxSlide;
  else current--;

  movmentSlide();
};

const movmentSlide = function () {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${current * 100}%)`;
  });
};

carousel.addEventListener("click", (e) => {
  const clicked = e.target.closest(".carousel__btn");
  if (!clicked) return;

  move(clicked);
});

// mobile menu
navBtn.addEventListener("click", function () {
  navIcon.forEach((icon) => icon.classList.toggle("active"));
  navMenu.classList.toggle("open");
  darkOverlay.classList.toggle("block");
});
