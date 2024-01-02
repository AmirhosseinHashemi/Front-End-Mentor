const darkOverlay = document.querySelector(".overlay");

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel__slide");

const navBtn = document.querySelector(".nav__btn");
const navIcon = document.querySelectorAll(".nav__btn img");
const navMenu = document.querySelector(".nav__list");

const counterBtn = document.querySelectorAll(".product__counter button");
const counterNum = document.querySelector(".product__counter span");

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

// counter
// counterBtn.forEach((btn) =>
//   btn.addEventListener("click", function (e) {
//     if (e.target.dataset.counter === "increase") {
//       +counterNum.innerText++;
//     }

//     if (e.target.dataset.counter === "decrease" && +counterNum.innerText > 0) {
//       +counterNum.innerText--;
//     }
//   })
// );
