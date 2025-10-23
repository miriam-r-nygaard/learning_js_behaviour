"use strict";
//MIN OPGAVE
const body = document.body;

function updateBackground() {
  const width = window.innerWidth;
  if (width < 480) {
    body.style.background = "lightblue";
  } else if (width < 760) {
    body.style.background = "blue";
  } else if (width < 960) {
    body.style.background = "purple";
  } else if (width < 1024) {
    body.style.background = "red";
  } else if (width < 1200) {
    body.style.background = "pink";
  } else {
    body.style.background = "brown";
  }
}

updateBackground();

window.addEventListener("resize", updateBackground);

//BETINGELSER
// betingelser kan enten være sande eller falske
// i JavaScript bruges if, else if og else til at lave betingelser

/*const body = document.body;
// ændre på body

function updateBackground() {
  const width = window.innerWidth;
  if (width < 640) {
    body.style.background = "purple";
  } else if (width < 760) {
    body.style.background = "yellow";
  } else if (width < 900) {
    body.style.background = "blue";
  } else if (width < 1100) {
    body.style.background = "red";
  } else if (width < 1300) {
    body.style.background = "green";
  } else {
    body.style.background = "lightgray";
  }
} */

// dette er en funktion uden parametre
// window.innerWidth giver vinduets bredde i pixels
// innerWidth i browser vinduet (browswerens indvendige bredde) gemmes i variablen widht
//width er bredden og en variable defineret med const og skrevet som tal.

// Kør ved load
//updateBackground();
// kald funktionen en gang når siden loader

// Kør igen når vinduet ændres
//window.addEventListener("resize", updateBackground);
// eventet resize lytter efter at vinduet ændres og kalder funktionen igen
// når vinduet ændres skifter baggrundsfarven alt efter bredden
