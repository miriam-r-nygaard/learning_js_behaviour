"use strict";

const getLionBtn = document.getElementById("lion");
const getDogBtn = document.getElementById("dog");
const getElephantBtn = document.getElementById("elephant");
const getMonkeyBtn= document.getElementById("monkey");

const soundLion = new Audio();
soundLion.src = "../sound/lion.wav";

const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";

const soundElephant = new Audio();
soundElephant.src = "../sound/elephant.wav";

const soundMonkey = new Audio();
soundMonkey.src = "../sound/monkey.wav";

getLionBtn.addEventListener("click", () => {
    soundLion.play();
});

getDogBtn.addEventListener("click", () => {
    soundDog.play();
});

getElephantBtn.addEventListener("click", () => {
    soundElephant.play();
});

getMonkeyBtn.addEventListener("click", () => {
    soundMonkey.play();
});