class Cart {
  _parent = document.querySelector(".header__right");
  _open = false;
  _data;

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parent.innerHTML = "";
  }

  addHandlerClick(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".header__cart");
      if (!clicked) return;

      handler();
    });
  }

  _calcInventory(data) {
    return data.reduce((acc, cur) => acc + cur.number, 0);
  }

  _generateMarkup() {
    return `
        <button class="header__cart" type="button" aria-label="cart button">
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="cart icon"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
          <span class="header__inventory">${this._calcInventory(
            this._data
          )}</span>
        </button>

        <button
          class="header__avatar"
          type="button"
          aria-label="account button"
        >
          <img src="./images/image-avatar.png" alt="avatar" />
        </button>
    `;
  }
}

export default new Cart();
