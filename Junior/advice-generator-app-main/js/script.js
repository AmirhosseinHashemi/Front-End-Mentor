const number = document.getElementById("advice__number");
const text = document.getElementById("advice__quote");
const dice = document.getElementById("advice__dice");


async function generate() {
    let request = await fetch("https://api.adviceslip.com/advice");
    let response = await request.json();
    return response;
}

generate().then(function (response) {
    number.innerText = response["slip"]["id"];
    text.innerText = response["slip"]["advice"];
})

generate().catch(function (response) {
    number.innerText = response["message"]["type"];
    text.innerText = response["message"]["text"];
})

dice.addEventListener("click", () => {
    window.location.reload();
})