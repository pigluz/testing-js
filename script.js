var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var wiek = document.getElementById("wiek");
var miejsce = document.getElementById("mieszkanie");

var submit = document.getElementById("submit");
var reset = document.getElementById("reset");
var text = document.getElementById("text1")

document.getElementById("submit").addEventListener("click", function show() {
    alert("Hej " + imie.value + " " + nazwisko.value + "!\nMasz " + wiek.value + " lat! \nMieszkasz w " + miejsce.value);
});

submit.onclick = function () {
    reset.style.visibility = "visible";
    text.style.visibility = "visible";
}

reset.onclick = function () {
    reset.style.visibility = "hidden";
    text.style.visibility = "hidden";
}
