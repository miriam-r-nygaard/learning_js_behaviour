"use strict";

const getNumber1Field = document.getElementById("number1")
const getNumber2Field = document.getElementById("number2")
const resultAdditionField = document.getElementById("resultAddition");
const additionBtn = document.getElementById("addNumbersBtn");

additionBtn.addEventListener("click", () => {
  
    const number1 = Number(getNumber1Field.value);
    const number2 = Number(getNumber2Field.value);
    const result = number1 + number2
    resultAdditionField.value = result;

});


const getNumber3Field = document.getElementById("number3")
const getNumber4Field = document.getElementById("number4")
const resultSubstractionField = document.getElementById("resultSubstraction");
const substractBtn = document.getElementById("substractNumbersBtn");

substractBtn.addEventListener("click", () => {
  
    const number3 = Number(getNumber3Field.value);
    const number4 = Number(getNumber4Field.value);
    const result = number3 - number4
    resultSubstractionField.value = result;

});





