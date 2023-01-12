var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var wiek = document.getElementById("wiek");
var miejsce = document.getElementById("mieszkanie");



document.getElementById("submit").addEventListener("click", function () {
    alert("Hej " + imie.value + " " + nazwisko.value + "!\nMasz " + wiek.value + " lat! \nMieszkasz w " + miejsce.value);
});



function show() {
    document.getElementById("text").innerHTML = "Dziękujemy za udział w formularzu :)";
}
