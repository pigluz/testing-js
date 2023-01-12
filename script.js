var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var wiek = document.getElementById("wiek");
var miejsce = document.getElementById("mieszkanie");

var submit = document.getElementById("submit");
var reset = document.getElementById("reset");

document.getElementById("submit").addEventListener("click", function () {
    alert("Hej " + imie.value + " " + nazwisko.value + "!\nMasz " + wiek.value + " lat! \nMieszkasz w " + miejsce.value);
});

function show() {
    document.getElementById("text").innerHTML = "Dziękujemy za udział w formularzu :)";
}

submit.onclick = function () {
    reset.style.visibility = "visible";
}