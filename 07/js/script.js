"use strict";

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  if (this.textContent == "Det ta'r kun 5 minutter") {
    this.innerHTML = "<strong>og så er du i Netto.</strong>";
  } else {
    this.innerHTML = "Det ta'r kun 5 minutter";
  }
});

// funktion er en anynonymous function
// this refererer til det element der har eventlisteneren, elementet er getWordElem
// textContent er tekstindholdet i elementet
// innerHTML er HTML-indholdet i elementet
// innerHTML (her kan man skrive tekst eller skrive html) versus innerTekst (her ændre du teksten uden at kunne skrive html)
// strong er et html tag der gør teksten fed
// else gør det til en toogle
