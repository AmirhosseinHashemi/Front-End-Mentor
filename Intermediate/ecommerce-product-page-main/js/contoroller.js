import Counter from "./views/counter.js";
import { Slider, Lightbox } from "./views/slider.js";

// handle counter
const countControl = function (go) {
  Counter.render(go);
};

// handle slider in mobile
const sliderControl = function (element) {
  const attValue = element.dataset.go;
  Slider.render(attValue);
};

// handle slider in for lightbox
const sliderLightboxControl = function (element) {
  const attValue = element.dataset.go;
  Lightbox.render(attValue);
};

// handle thumbnail image
const thumbControl = function (element) {
  const attValue = element.dataset.thumbnail;
  Slider.render(attValue);
};

// handle thumbnail image for lightbox
const thumbLightboxControl = function (element) {
  const attValue = element.dataset.thumbnail;
  Lightbox.render(attValue);
};

// handle open lightbox
const lightboxOpenControl = function (element) {
  const attValue = element.dataset.lightbox;
  if (!attValue || window.innerWidth < 768) return;

  Lightbox.open();
};

// handle close lightbox
const lightboxCloseControl = function () {
  Lightbox.close();
};

const init = function () {
  Counter.addHandlerClick(countControl);
  Slider.addHandlerClick(sliderControl);
  Slider.addhandlerThumb(thumbControl);
  Slider.addhandlerSlide(lightboxOpenControl);
  Lightbox.addHandlerClick(sliderLightboxControl);
  Lightbox.addhandlerThumb(thumbLightboxControl);
  Lightbox.addhandlerClose(lightboxCloseControl);
};
init();
