class CounterView {
  _parent = document.querySelector(".product__counter");
  _data;
  _number = 0;

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("afterbegin", markup);
  }

  reset() {
    this._number = 0;
    this._parent.querySelector("span").innerText = 0;
  }

  _clear() {
    this._parent.innerHTML = "";
  }

  _generateMarkup() {
    return `
    <button type="button" data-counter="decrease" aria-label="decrease">
    -
    </button>
    <span aria-label="number">${
      this._data === "increase" ? this._increase() : this._decrease()
    }</span>
    <button type="button" data-counter="increase" aria-label="increase">
    +
    </button>
    `;
  }

  _increase() {
    return ++this._number;
  }

  _decrease() {
    if (this._number === 0) return 0;
    return --this._number;
  }

  addHandlerClick(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".product__counter button")?.dataset
        .counter;
      if (!clicked) return;

      handler(clicked);
    });
  }
}

export default new CounterView();
