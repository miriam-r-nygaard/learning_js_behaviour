"use strict";


const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");



getZoomBtn.addEventListener("click", function() {

    if (this.textContent == "Zoom ind"){
        getWordElem.style.fontSize = "6rem";
        this.textContent = "Zoom ud";
    }
    else {
        getWordElem.style.fontSize = "3.0rem";
        this.textContent = "Zoom ind";
     }
});