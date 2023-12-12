const btn = document.querySelector(".nav button")
const barsIcon = document.querySelector(".nav__bars");
const closeIcon = document.querySelector(".nav__close");
const menu = document.querySelector(".nav ul");

btn.addEventListener("click", () => {
    if (closeIcon.classList.contains("nav__close--none")) {
        closeIcon.classList.remove("nav__close--none");
        barsIcon.classList.add("nav__bars--none");
        menu.classList.add("nav__menu--active");
        console.log("open");
    }
    else {
        barsIcon.classList.remove("nav__bars--none");
        closeIcon.classList.add("nav__close--none");
        menu.classList.remove("nav__menu--active");
        console.log("close");
    }

})
