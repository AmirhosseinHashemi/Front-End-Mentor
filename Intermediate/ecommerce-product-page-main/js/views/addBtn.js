class AddToCart {
  _parent = document.querySelector(".product");
  _data;

  addHandlerClick(handler) {
    this._parent.addEventListener("click", function (e) {
      const clicked = e.target.closest(".product__add");
      if (!clicked) return;

      const info = {
        name: this.querySelector(".product__title").innerText,
        price: +this.querySelector(".product__off")
          .firstChild.nodeValue.trim()
          .slice(1),
        number: +this.querySelector(".product__counter span").innerText,
      };
      handler(info);
    });
  }
}

export default new AddToCart();
