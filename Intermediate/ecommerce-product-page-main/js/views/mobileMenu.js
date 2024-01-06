class MenuView {
  _parent = document.querySelector(".nav");
  _data;
  _open = false;

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("afterbegin", markup);
  }

  toggleMenu() {
    this._open = this._open ? false : true;
  }

  _clear() {
    this._parent.innerHTML = "";
  }

  addHandlerClick(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".nav__btn");
      if (!clicked) return;

      handler();
    });
  }

  _generateMarkup() {
    return `

    <button class="nav__btn" type="button">
      <img
        class="nav__hamburger ${this._open ? "" : "active"}"
        src="./images/icon-menu.svg"
        alt="hamburger menu"
      />
      <img
        class="nav__close ${this._open ? "active" : ""}"
        src="./images/icon-close.svg"
        alt="close menu"
      />
    </button>

    <ul class="nav__list ${this._open ? "open" : ""}">
      <li>
        <a class="nav__link" href="#">Collections</a>
      </li>

      <li>
        <a class="nav__link" href="#">Men</a>
      </li>

      <li>
        <a class="nav__link" href="#">Women</a>
      </li>

      <li>
        <a class="nav__link" href="#">About</a>
      </li>

      <li>
        <a class="nav__link" href="#">Contact</a>
      </li>
    </ul>
    `;
  }
}

export default new MenuView();
