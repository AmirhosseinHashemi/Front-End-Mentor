let menuIcon = document.getElementById("menuIcon");
let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("header__menu--active");

    let menuIconAddress = menuIcon.attributes.getNamedItem("src");
    let menuAriaExpanded = menu.attributes.getNamedItem("aria-expanded");

    if (menu.classList.contains("header__menu--active")) {
        menuAriaExpanded.value = "true";
        menuIconAddress.value = "./assets/images/icon-menu-close.svg";
    }
    else {
        menuAriaExpanded.value = "false";
        menuIconAddress.value = "./assets/images/icon-menu.svg"
    }
})