import counter from "./views/counter.js";
import { slider, lightbox } from "./views/slider.js";
import addToCart from "./views/addBtn.js";
import * as model from "./model.js";
import cart from "./views/cart.js";
import menu from "./views/mobileMenu.js";

// handle counter
const countControl = function (go) {
  counter.render(go);
};

// handle slider in mobile
const sliderControl = function (element) {
  const attValue = element.dataset.go;
  slider.render(attValue);
};

// handle slider in for lightbox
const sliderLightboxControl = function (element) {
  const attValue = element.dataset.go;
  lightbox.render(attValue);
};

// handle thumbnail image
const thumbControl = function (element) {
  const attValue = element.dataset.thumbnail;
  slider.render(attValue);
};

// handle thumbnail image for lightbox
const thumbLightboxControl = function (element) {
  const attValue = element.dataset.thumbnail;
  lightbox.render(attValue);
};

// handle open lightbox
const lightboxOpenControl = function (element) {
  const attValue = element.dataset.lightbox;
  if (!attValue || window.innerWidth < 768) return;

  lightbox.open();
};

// handle close lightbox
const lightboxCloseControl = function () {
  lightbox.close();
};

// handle add info
const addControl = function (info) {
  if (info["number"] < 1) return;

  model.addData(info);
  counter.reset();
  cart.render(model.state.cart);
};

// handle showing cart list
const cartControl = function () {
  cart.toggleCart();
  cart.render(model.state.cart);
};

// handle delete item from cart
const deleteControl = function (index) {
  model.deleteData(index);
  cart.render(model.state.cart);
};

// handle opening menu in mobile
const menuControl = function () {
  menu.toggleMenu();
  menu.render("");
};

const init = function () {
  counter.addHandlerClick(countControl);
  slider.addHandlerClick(sliderControl);
  slider.addhandlerThumb(thumbControl);
  slider.addhandlerSlide(lightboxOpenControl);
  lightbox.addHandlerClick(sliderLightboxControl);
  lightbox.addhandlerThumb(thumbLightboxControl);
  lightbox.addhandlerClose(lightboxCloseControl);
  addToCart.addHandlerClick(addControl);
  cart.addHandlerClick(cartControl);
  cart.addHandlerDelete(deleteControl);
  menu.addHandlerClick(menuControl);
};
init();
