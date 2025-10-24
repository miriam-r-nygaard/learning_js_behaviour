"use strict";

//min opgave - skift fontstørrelse på ord ved klik på knap
const getFontBtn = document.getElementById("fontBtn");
const getTextElem = document.getElementById("word");

getFontBtn.addEventListener("click", function () {
  if (this.textContent == "skift stil") {
    getwordElem.style.fontSize = "2rem";
    getTextElem.style.fontFamily = "arial";

    this.textContent = "tilbage til normal";
  } else {
    getTextElem.style.fontSize = "10rem";
    getTextElem.style.fontFamily = "serif";
    getTextElem.style.color = "purple";

    this.textContent = "skift stil";
  }
});

/* const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");
// to variabler der henter knappen og ordet BOOM

getZoomBtn.addEventListener("click", function () {
  if (this.textContent == "Zoom ind") {
    getWordElem.style.fontSize = "6rem";
    this.textContent = "Zoom ud";
  } else {
    getWordElem.style.fontSize = "3.0rem";
    this.textContent = "Zoom ind";
  }
}); */

// eventlistener på knappen, der skifter tekst og fontstørrelse ved klik
//her er igen en function og ikke en arrow function, fordi vi skal bruge "this"
// eventet er klick
// hvis knappen har teksten "Zoom ind", så ændres fontstørrelsen på ordet til 6rem og knapteksten ændres til "Zoom ud"
// ellers ændres fontstørrelsen på ordet til 3rem og knapteksten ændres til "Zoom ind"
//this.tekstContent refererer til at knappen skal ændre tekstens indhold til "zoom ud" når der klikkes på den første gang
