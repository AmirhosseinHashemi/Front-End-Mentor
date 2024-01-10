class Job {
  _wrapper = document.querySelector(".wrapper");

  constructor(list) {
    this.list = list;
    this._createUi();
  }

  _createBtn(data) {
    let markup;

    if (Array.isArray(data)) {
      markup = data
        .map((item) => {
          return `<button class="job__btn" type="button">${item}</button>`;
        })
        .join("");
    }

    if (typeof data === "string") {
      markup = `<button class="job__btn" type="button">${data}</button>`;
    }

    return markup;
  }

  _createBadge(data) {
    return `<span class="job__badge job__badge--${data}">${data.toUpperCase()}</span>`;
  }

  _createUi() {
    const jobs = this.list
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
                      ${this._createBtn(job.role)}
                      ${this._createBtn(job.level)}
                      ${this._createBtn(job.tools)}
                      ${this._createBtn(job.languages)}
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
