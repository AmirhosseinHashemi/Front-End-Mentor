let overlay = document.querySelector(".card__overlay");
let button = document.querySelector(".card__button");

button.addEventListener("click", (e) => {
   overlay.classList.toggle("card__overlay--active");
   button.classList.toggle("card__button--active");
})
