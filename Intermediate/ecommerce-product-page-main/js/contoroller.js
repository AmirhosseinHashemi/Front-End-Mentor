import Counter from "./views/counter.js";

const count = function (go) {
  Counter.render(go);
};

const init = function () {
  Counter.addHandlerClick(count);
};
init();
