class Cart {
  _parent = document.querySelector(".header__right");
  _open = false;
  _message = "Your cart is empty.";
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

  addHandlerDelete(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".cart__delete");
      if (!clicked) return;

      const index = clicked.closest(".cart__item").dataset.item;
      handler(index);
    });
  }

  toggleCart() {
    this._open = this._open ? false : true;
  }

  _calcInventory(data) {
    return data.reduce((acc, cur) => acc + cur.number, 0);
  }

  _generateCart(data) {
    if (data.length === 0)
      return ` 
    <div class="cart" aria-label="cart list">
      <p class="cart__title">Cart</p>
      <div class="cart__content">
        <p class="cart__err">${this._message}</P>
      </div>
    </div>`;

    return `
    <div class="cart" aria-label="cart list">
      <p class="cart__title">Cart</p>
      <div class="cart__content">
        <ul class="cart__list">
        ${data
          .map((item, i) => {
            return `
          <li class="cart__item" data-item=${i}>
          <img
            class="cart__img"
            src="./images/image-product-1-thumbnail.jpg"
            alt="image of shoe"
          />
          <div class="cart__info">
            <p class="cart__name">${item.name}</p>
            <p class="cart__price">
             $${item.price} x<span class="cart__number">${item.number}</span
              ><span class="cart__total">$${item.price * item.number}</span>
            </p>
          </div>
      
          <button class="cart__delete" aria-label="delete" type="button">
            <svg
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-label="delete icon"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
            </svg>
          </button>
        </li>
          `;
          })
          .join("")}
        </ul>

        <button class="cart__btn btn--add-to-cart" type="button">
          Checkout
        </button>
      </div>
  </div>
    `;
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

        ${this._open ? this._generateCart(this._data) : ""}
    `;
  }
}

export default new Cart();
