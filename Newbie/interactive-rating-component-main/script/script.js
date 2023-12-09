let card = document.querySelector(".card");
let thank = document.querySelector(".thank");
let form = document.querySelector(".card__form");
let input = document.querySelectorAll(".card__input");
let selectedRate = document.querySelector(".thank__selected-rate span");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    input.forEach(element => {
        if (!element.checked) return;
        selectedRate.innerHTML = form.rate.value;
        update();
    })
})

function update() {
    card.style.display = "none";
    thank.style.display = "flex";
}