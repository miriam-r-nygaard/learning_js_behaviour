"use strict";
//aritmetic operations
const getNumber1Field = document.getElementById("number1");
const getNumber2Field = document.getElementById("number2");
const resultAdditionField = document.getElementById("resultAddition");
//her vil man se resultatet af additionen i feltet
const additionBtn = document.getElementById("addNumbersBtn");
//forskellige variabler til at hente elementer  fra html filen
// ved at skrive "number1" hentes den value som brugeren skriver i feltet, men det er et string

additionBtn.addEventListener("click", () => {
  const number1 = Number(getNumber1Field.value);
  const number2 = Number(getNumber2Field.value);
  const result = number1 + number2;
  resultAdditionField.value = result;
});
//her lyttes på klik på knappen og der udføres en funktion når der klikkes
//"17" er et string, men bruger man Typecastning med Number() bliver det et tal

const getNumber3Field = document.getElementById("number3");
const getNumber4Field = document.getElementById("number4");
const resultSubstractionField = document.getElementById("resultSubstraction");
const substractBtn = document.getElementById("substractNumbersBtn");

substractBtn.addEventListener("click", () => {
  const number3 = Number(getNumber3Field.value);
  const number4 = Number(getNumber4Field.value);
  const result = number3 - number4;
  resultSubstractionField.value = result;
});

//MIN OPGAVE
//gange
const getNumber5Field = document.getElementById("number5");
const getNumber6Field = document.getElementById("number6");
const resultMultiplicationField = document.getElementById(
  "resultMultiplication"
);
const multiplyBtn = document.getElementById("MultiplyNumbersBtn");

multiplyBtn.addEventListener("click", () => {
  const number5 = Number(getNumber5Field.value);
  const number6 = Number(getNumber6Field.value);
  const result = number5 * number6;
  resultMultiplicationField.value = result;
});

//dividere
const getNumber7Field = document.getElementById("number7");
const getNumber8Field = document.getElementById("number8");
const resultDivisionField = document.getElementById("resultDivision");

const divideBtn = document.getElementById("DivideNumbersBtn");

divideBtn.addEventListener("click", () => {
  const number7 = Number(getNumber7Field.value);
  const number8 = Number(getNumber8Field.value);
  const result = number7 / number8;
  resultDivisionField.value = result;
});
