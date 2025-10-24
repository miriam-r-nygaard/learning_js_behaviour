"use strict";
// MIN OPGAVE find to nye animationer

//filen indeholder allerede animationerne bounce, shake, spin og fade
// prøvede 3www School og fandt det desværre ikke der
// fandt animationer på artikelen "HTML AND CSS INTERACTIVITY: CREATE CLICK TO SHRINK, BOUNCE, SHAKE, FLIP, & SWING BUTTON ANIMATIONS" af LostCoder
// https://medium.com/@lostcoder20/html-and-css-interactivity-create-click-to-shrink-bounce-shake-flip-swing-button-animations-b9c4f8f1d860
// denne opgave var sværere end forventet, jeg ville gerne hører mere om @keyframes, hvornår bruges hvad?

//herunder er en animation med Swing

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("swing");
  setTimeout(() => this.classList.remove("swing"), 400);
});

//herunder er en animation med flip

/* 
const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("flip");
  setTimeout(() => this.classList.remove("flip"), 1000);
});
*/

//UNDERVISNG
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

/* 
const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  this.classList.add("fade");
  setTimeout(() => this.classList.remove("fade"), 1000);
});
*/
