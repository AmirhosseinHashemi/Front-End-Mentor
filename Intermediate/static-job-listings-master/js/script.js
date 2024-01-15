class Job {
  _wrapper = document.querySelector(".wrapper");
  _filtered = [];

  constructor(list) {
    this.list = list;
    this._createUi(this.list);
    this._addFilterEvent();
    this._addClearEvent();
  }

  _addFilterEvent() {
    const btns = document.querySelectorAll(".job__btn");
    btns.forEach((btn) =>
      btn.addEventListener("click", this._filterHandler.bind(this))
    );
  }

  _addRemoveFilteredEvent() {
    const btns = document.querySelectorAll(".filter__delete");
    btns.forEach((btn) =>
      btn.addEventListener("click", this._removeFiltered.bind(this))
    );
  }

  _addClearEvent() {
    document
      .querySelector(".filter__clear")
      .addEventListener("click", this._clearFiltered.bind(this));
  }

  _clearFiltered() {
    this._filtered = [];
    this._createFilterItem();
    this._updateUi();
  }

  _removeFiltered(e) {
    const clicked = e.target
      .closest(".filter__selected")
      .querySelector(".filter__text").innerText;

    const indexOfCliked = this._filtered.indexOf(clicked);
    this._filtered.splice(indexOfCliked, 1);
    this._createFilterItem();
    this._updateUi();
  }

  _filterHandler(e) {
    const selected = e.target;
    this._filtered.push(selected.innerText);
    this._updateUi();
    this._showFiltered();
  }

  _showFiltered() {
    this._createFilterItem();
    document.querySelector(".filter").classList.add("visible");
  }

  _hiddenFiltered() {
    document.querySelector(".filter").classList.remove("visible");
  }

  _createFilterItem() {
    if (this._filtered.length === 0) this._hiddenFiltered();

    const uniqeNameItem = [...new Set(this._filtered)];
    const container = document.querySelector(".filter__container");

    const markup = uniqeNameItem
      .map((name) => {
        return `
        <div class="filter__selected">
        <span class="filter__text">${name}</span>
        <button type="button" class="filter__delete">
          <svg
            class="filter__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </button>
      </div>
    `;
      })
      .join("");

    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", markup);
    this._addRemoveFilteredEvent();
  }

  _createBtn(data, type) {
    let markup;

    if (Array.isArray(data)) {
      markup = data
        .map((item) => {
          return `<button data-type=${type} class="job__btn" type="button">${item}</button>`;
        })
        .join("");
    }

    if (typeof data === "string") {
      markup = `<button data-type=${type} class="job__btn" type="button">${data}</button>`;
    }

    return markup;
  }

  _createBadge(data) {
    return `<span class="job__badge job__badge--${data}">${data.toUpperCase()}</span>`;
  }

  _updateUi() {
    const filJobs = this.list.filter((job) => {
      const val = Object.values(job).flat();

      return this._filtered.every((name) => val.includes(name));
    });

    this._wrapper.innerHTML = "";
    this._createUi(filJobs);
    this._addFilterEvent();
  }

  _createUi(jobsArr) {
    const jobs = jobsArr
      .map((job) => {
        return `
          <div class="job ${job.featured ? "featured" : ""}">
              <article class="job__content">
                  <div class="job__info" aria-label="job information">
                  <img
                      class="job__logo"
                      src=${job.logo}
                      alt="job logo"
                  />
                  <div class="job__title">
                  <h2 class="job__company">${job.company}</h2>
                  ${job.new ? this._createBadge("new") : ""}
                  ${job.featured ? this._createBadge("featured") : ""}
                  </div>
                  <p class="job__position">${job.position}</p>
                  <div class="job__bottom">
                      <p class="job__posted">${job.postedAt}</p>
                      <p class="job__contract">${job.contract}</p>
                      <p class="job__location">${job.location}</p>
                  </div>
                  </div>
      
                  <div class="line"></div>
      
                  <div class="job__btns">
                      ${this._createBtn(job.role, "role")}
                      ${this._createBtn(job.level, "level")}
                      ${this._createBtn(job.tools, "tools")}
                      ${this._createBtn(job.languages, "languages")}
                  </div>
              </article>
          </div>
              `;
      })
      .join("");

    this._wrapper.insertAdjacentHTML("beforeend", jobs);
  }
}

const getData = async function () {
  const data = await fetch("../data.json");
  const response = await data.json();
  new Job(response);
};
getData();
