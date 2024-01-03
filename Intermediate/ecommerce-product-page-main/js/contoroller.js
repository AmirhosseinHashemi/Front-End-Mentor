import Counter from "./views/counter.js";
import Slider from "./views/slider.js";

// handle counter
const countControl = function (go) {
  Counter.render(go);
};

// handle slider in mobile
const sliderControl = function (state) {
  Slider.move(state);
  Slider.render(state);
};

const init = function () {
  Counter.addHandlerClick(countControl);
  Slider.addHandlerClick(sliderControl);
};
init();
