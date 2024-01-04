class SliderView {
  _parent = document.querySelector(".wrapper .carousel");
  _data;
  _currentSlide = 1;
  _maxSlide = 4;

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parent.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerClick(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".carousel__btn");
      if (!clicked) return;

      handler(clicked);
    });
  }

  addhandlerThumb(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".carousel__thumbnail button");
      if (!clicked) return;

      handler(clicked);
    });
  }

  addhandlerSlide(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".carousel__slide");
      if (!clicked) return;

      handler(clicked);
    });
  }

  _clear() {
    this._parent.innerHTML = "";
  }

  _next() {
    if (this._currentSlide === this._maxSlide) this._currentSlide = 1;
    else this._currentSlide++;
  }

  _previous() {
    if (this._currentSlide === 1) this._currentSlide = this._maxSlide;
    else this._currentSlide--;
  }

  _generateMarkup() {
    if (this._data === "next") this._next();
    if (this._data === "previous") this._previous();
    if (Number.isFinite(+this._data)) this._currentSlide = +this._data;
    return `
    <!-- slider -->
    <div class="carousel__slider" aria-label="slider">
      <div class="carousel__slides-container">
        <figure class="carousel__slide" data-lightbox="true">
          <img src="./images/image-product-${
            this._currentSlide
          }.jpg" alt="shoe image${this._currentSlide}" />
        </figure>
      </div>

      <button
        class="carousel__btn carousel__btn--previous"
        data-go="previous"
        type="button"
      >
        <img src="./images/icon-previous.svg" alt="previous" />
      </button>

      <button
        class="carousel__btn carousel__btn--next"
        data-go="next"
        type="button"
      >
        <img src="./images/icon-next.svg" alt="next" />
      </button>
    </div>

    <!-- thumbnail __ for desktop -->
    <div class="carousel__thumbnail" aria-label="thumbnail">
      <button class=${
        +this._data === 1 ? "active-btn" : ""
      } type="button" data-thumbnail="1">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-1-thumbnail.jpg"
          alt="thumbnail product 1"
        />
      </button>

      <button class=${
        +this._data === 2 ? "active-btn" : ""
      } type="button" data-thumbnail="2">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-2-thumbnail.jpg"
          alt="thumbnail product 2"
        />
      </button>

      <button class=${
        +this._data === 3 ? "active-btn" : ""
      } type="button" data-thumbnail="3">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-3-thumbnail.jpg"
          alt="thumbnail product 3"
        />
      </button>

      <button class=${
        +this._data === 4 ? "active-btn" : ""
      } type="button" data-thumbnail="4">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-4-thumbnail.jpg"
          alt="thumbnail product 4"
        />
      </button>
    </div>
    `;
  }
}

class LightboxView extends SliderView {
  _parent = document.querySelector(".lightbox");

  open() {
    this._parent.style.display = "flex";
  }

  close() {
    this._parent.style.display = "none";
  }

  addhandlerClose(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".close");
      if (!clicked) return;
      handler();
    });
  }

  _generateMarkup() {
    if (this._data === "next") this._next();
    if (this._data === "previous") this._previous();
    if (Number.isFinite(+this._data)) this._currentSlide = +this._data;
    return `
    <div class="content">
    <button type="button" class="close">
      <svg
        class="close-icon"
        aria-label="close icon"
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </button>
    <div class="carousel" aria-label="carousel">
      <!-- slider -->
      <div class="carousel__slider" aria-label="slider">
        <div class="carousel__slides-container">
          <figure class="carousel__slide">
            <img src="./images/image-product-${
              this._currentSlide
            }.jpg" alt="shoe image${this._currentSlide}" />
          </figure>
        </div>

        <button
          class="carousel__btn carousel__btn--previous"
          data-go="previous"
          type="button"
        >
          <img src="./images/icon-previous.svg" alt="previous" />
        </button>

        <button
          class="carousel__btn carousel__btn--next"
          data-go="next"
          type="button"
        >
          <img src="./images/icon-next.svg" alt="next" />
        </button>
      </div>

      <!-- thumbnail __ for desktop -->
      <div class="carousel__thumbnail" aria-label="thumbnail">
        <button class=${
          +this._data === 1 ? "active-btn" : ""
        } type="button" data-thumbnail="1">
          <img
            class="carousel__thumb-img"
            src="./images/image-product-1-thumbnail.jpg"
            alt="thumbnail product 1"
          />
        </button>

        <button class=${
          +this._data === 2 ? "active-btn" : ""
        } type="button" data-thumbnail="2">
          <img
            class="carousel__thumb-img"
            src="./images/image-product-2-thumbnail.jpg"
            alt="thumbnail product 2"
          />
        </button>

        <button class=${
          +this._data === 3 ? "active-btn" : ""
        } type="button" data-thumbnail="3">
          <img
            class="carousel__thumb-img"
            src="./images/image-product-3-thumbnail.jpg"
            alt="thumbnail product 3"
          />
        </button>

        <button class=${
          +this._data === 4 ? "active-btn" : ""
        } type="button" data-thumbnail="4">
          <img
            class="carousel__thumb-img"
            src="./images/image-product-4-thumbnail.jpg"
            alt="thumbnail product 4"
          />
        </button>
      </div>
    </div>
  </div>
    `;
  }
}

export const slider = new SliderView();
export const lightbox = new LightboxView();

// export default new SliderView();
