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
      const clicked = e.target.closest(".carousel__btn")?.dataset.go;
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

  move(state) {
    if (state === "next") this._next();
    if (state === "previous") this._previous();
  }

  _generateMarkup() {
    return `
    <!-- slider -->
    <div class="carousel__slider" aria-label="slider">
      <div class="carousel__slides-container">
        <figure class="carousel__slide" data-lightbox="true">
          <img src="./images/image-product-${this._currentSlide}.jpg" alt="shoe image${this._currentSlide}" />
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
      <button type="button">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-1-thumbnail.jpg"
          alt="thumbnail product 1"
          data-thumbnail="1"
        />
      </button>

      <button type="button">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-2-thumbnail.jpg"
          alt="thumbnail product 2"
          data-thumbnail="2"
        />
      </button>

      <button type="button">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-3-thumbnail.jpg"
          alt="thumbnail product 3"
          data-thumbnail="3"
        />
      </button>

      <button type="button">
        <img
          class="carousel__thumb-img"
          src="./images/image-product-4-thumbnail.jpg"
          alt="thumbnail product 4"
          data-thumbnail="4"
        />
      </button>
    </div>
    `;
  }
}

export default new SliderView();
