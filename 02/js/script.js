"use strict"


const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");
const body = document.body;


nightColorBtn.addEventListener("click", () => {
    body.style = "background: #121212";
})

lightColorBtn.addEventListener("click", () => {
   body.style = "background: #FFFFFF"; 
})
