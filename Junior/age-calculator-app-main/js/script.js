const button = document.getElementById("calculator__button");
const formElement = document.getElementById("calculator__form");
const yearText = document.querySelector(".calculator__dash--year");
const monthText = document.querySelector(".calculator__dash--month");
const dayText = document.querySelector(".calculator__dash--day");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const form = new FormData(formElement);
    const dayEntry = form.get("day");
    const monthEntry = form.get("month");
    const yearEntry = form.get("year");

    console.log(dayEntry);
    console.log(monthEntry);
    console.log(yearEntry);

    yearText.innerHTML = "--";
    monthText.innerHTML = "--";
    dayText.innerHTML = "--";

    if (validateYear(yearEntry) == false) { return; }
    if (validateMonth(monthEntry) == false) { return; }
    if (validateDay(yearEntry, monthEntry, dayEntry) == false) { return; }

    calculateAge(yearEntry, monthEntry, dayEntry);
})


function calculateAge(year, month, day) {

    const birthDate = new Date(year, month - 1, day);
    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth();
    const y1 = birthDate.getFullYear();

    const currentDate = new Date();
    const d2 = currentDate.getDate();
    const m2 = currentDate.getMonth();
    const y2 = currentDate.getFullYear();

    let y3;
    let m3;
    let d3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDayOfMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    yearText.innerHTML = y3;
    monthText.innerHTML = m3;
    dayText.innerHTML = d3;
}


function getDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function validateYear(year) {
    const currentYear = new Date().getFullYear();
    const YearFormat = /^[1-9]\d{3}$/;
    const yearInput = document.getElementById("calculator__year")
    const yearLabel = document.querySelector(".calculator__label--year")
    const yearError = document.querySelector(".calculator__error--year");

    yearInput.addEventListener("input", () => {
        yearError.innerHTML = "";
        yearInput.classList.remove("calculator__input--invalid");
        yearLabel.classList.remove("calculator__label--invalid");
    })

    if (year == "") {
        yearError.innerHTML = "This field is required";
        yearInput.classList.add("calculator__input--invalid");
        yearLabel.classList.add("calculator__label--invalid");
        return false;
    }

    if (!YearFormat.test(year)) {
        yearError.innerHTML = "Must be a valid year";
        yearInput.classList.add("calculator__input--invalid");
        yearLabel.classList.add("calculator__label--invalid");
        return false;
    }

    if (year > currentYear) {
        yearError.innerHTML = "Must be in the past";
        yearInput.classList.add("calculator__input--invalid");
        yearLabel.classList.add("calculator__label--invalid");
        return false;
    }
}

function validateMonth(month) {
    const monthFormat = /^[0-9]{1,2}$/;
    const monthInput = document.getElementById("calculator__month");
    const monthLabel = document.querySelector(".calculator__label--month");
    const monthError = document.querySelector(".calculator__error--month");

    monthInput.addEventListener("input", () => {
        monthError.innerHTML = "";
        monthInput.classList.remove("calculator__input--invalid");
        monthLabel.classList.remove("calculator__label--invalid");
    })

    if (month == "") {
        monthError.innerHTML = "This field is required";
        monthInput.classList.add("calculator__input--invalid");
        monthLabel.classList.add("calculator__label--invalid");
        return false;
    }

    if (!monthFormat.test(month) || month < 1 || month > 12) {
        monthError.innerHTML = "Must be a valid month";
        monthInput.classList.add("calculator__input--invalid");
        monthLabel.classList.add("calculator__label--invalid");
        return false;
    }
}

function validateDay(year, month, day) {
    const dayFormat = /^[0-9]{1,2}$/;
    const dayInput = document.getElementById("calculator__day");
    const dayLabel = document.querySelector(".calculator__label--day");
    const dayError = document.querySelector(".calculator__error--day");
    const lengthOfDay = getDayOfMonth(year, month);

    dayInput.addEventListener("input", () => {
        dayError.innerHTML = "";
        dayInput.classList.remove("calculator__input--invalid");
        dayLabel.classList.remove("calculator__label--invalid");
    })

    if (day == "") {
        dayError.innerHTML = "This field is required";
        dayInput.classList.add("calculator__input--invalid");
        dayLabel.classList.add("calculator__label--invalid");
        return false;
    }

    if (day > lengthOfDay || !dayFormat.test(day) || day < 1) {
        dayError.innerHTML = "Must be a valid date";
        dayInput.classList.add("calculator__input--invalid");
        dayLabel.classList.add("calculator__label--invalid");
        return false;
    }
}