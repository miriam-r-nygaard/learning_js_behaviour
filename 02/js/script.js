"use strict";

const nightColorBtn = document.getElementById("nightColorBtn");
//henter knappen med id nightColorBtn fra HTML dokumentet
//document.getElementById("id") bruges til at hente et specifikt element fra HTML dokumentet
const lightColorBtn = document.getElementById("lightColorBtn");
//henter knappen med id lightColorBtn fra HTML dokumentet
const body = document.body;
//henter body elementet fra HTML dokumentet

nightColorBtn.addEventListener("click", () => {
  body.style = "background: #121212";
});
//her ændres baggrundsfarven, knappen med id nightColorBtn ændre body til en mørk farve, når der klikkes på knappen
/*varibelsNavn.addEventListener("event", function) bruges til at lytte efter en bestemt hændelse (event)
 på et element (variabelNavn)*/
//body.style = "background: #121212"; ændrer baggrundsfarven på body elementet til en mørk farve

lightColorBtn.addEventListener("click", () => {
  body.style = "background: #FFFFFF";
});
//her ændres baggrundsfarven, knappen med id lightColorBtn ændre body til hvid, når der klikkes på knappen

// FUNKTIONER
//funktioner har er navn og skrives funktionens navn() {}
function greeting() {
  console.log("Hej med dig!");
}
//her er en funktion der hedder greeting, som når den bliver kaldt skriver "Hej med dig!" i konsollen

greeting();
//her kaldes funktionen greeting, og dermed udføres koden inde i funktionen
// nu står der "Hej med dig!" i konsollen
// dette var en funktion uden parametre

function addNumbers(tal1, tal2) {
  const sum = tal1 + tal2;
  return sum;
}
//her er en funktion der hedder addNumbers, som tager imod to parametre tal1 og tal2
//inden i funktionen lægges tal1 og tal2 sammen og gemmes i variablen sum
//return sum; betyder at funktionen returnerer værdien af sum når den bliver kaldt

addNumbers(5, 10);
//her kaldes funktionen addNumbers med argumenterne 5 og 10
//funktionen vil returnere værdien 15

const result = addNumbers(5, 10);
console.log(result);
//en anden måde at bruge funktionen addNumbers på er at gemme resultatet i en variabel result
//herefter skrives værdien af result i konsollen, som vil være 15 (altså gennem console.log)
