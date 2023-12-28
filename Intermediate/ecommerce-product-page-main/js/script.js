const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel__slide");

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
