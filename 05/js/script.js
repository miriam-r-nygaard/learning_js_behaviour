"use strict";


const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");



changeImgBtn.addEventListener("click", function() {

    if (this.textContent == "Before"){
        getImage.src= "img/before.png";
        this.textContent = "After";
    }
    else {
        getImage.src= "img/after.png";
        this.textContent = "Before";
     }
});