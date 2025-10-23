"use strict";

//forskellige animationer ved klick på ordet "word"

//bounce animation

/* const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("bounce");
  setTimeout(() => this.classList.remove("bounce"), 600);
}); */

//classList.add("bounce"); er fra css filen ved at skrive .add tilføjer vi klassen bounce til elementet i HTML
// setTimeout er en funktion der kører en funktion efter et bestemt tidsrum

//shake animation

/* const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function() {
    this.classList.add("shake");
    setTimeout(()=>this.classList.remove("shake"),400);
}); */

//spin animation

/* const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("spin");
  setTimeout(() => this.classList.remove("spin"), 600);
}); */

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("fade");
  setTimeout(() => this.classList.remove("fade"), 1000);
});
