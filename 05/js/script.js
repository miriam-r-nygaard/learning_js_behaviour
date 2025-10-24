"use strict";
//BETINGELSER

const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");
//tager fat om billedet og knapper

changeImgBtn.addEventListener("click", function () {
  if (this.textContent == "Sommer") {
    getImage.src = "img/dandelion2.png";
    this.textContent = "Efterår";
  } else {
    getImage.src = "img/dandelion.png";
    this.textContent = "Sommer";
  }
});

/* 
changeImgBtn.addEventListener("click", function () {
  if (this.textContent == "Before") {
    getImage.src = "img/before.png";
    this.textContent = "After";
  } else {
    getImage.src = "img/after.png";
    this.textContent = "Before";
  }
});
*/

//ændre billedet og knap tekst ved klik
//changeImgBtn er den der ændres ved klik
//getImage er billedet der ændres
// der kan være forskel på hvornår man bruger function og arrow function, fordi function er anonym og kan bruge dette, mens arrow function ikke kan bruge dette.
// her fungere arrow function ikke fordi vi skulle have  brugt "navn" og ikke "this"
// this referere til changeImgBtn i dette tilfælde
// this referere automatisk til yderste element.
// altså referere this tilbage til changeImgBtn fordi det er den der har eventlisteneren.
//tekstContent = tekstindholdet i (i dette tilfælde) knappen
// == betyder "er lig med"
// = betyder tildeling
// husk at "" som "Before" og "After" skal stå som man vil have det vist i knappen.
// this refere altid sin parent
