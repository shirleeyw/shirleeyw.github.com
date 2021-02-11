(function(){
    'use strict';
    console.log("reading js");

    const myjournal = document.getElementById("journal");
    const pen = document.getElementById("pen");
    
    myjournal.addEventListener("click", function(event){
        event.preventDefault();

        /* if(myjournal.src =="https://shirleeyw.github.io/des157/studio2/images/closed.png"){
            myjournal.src = "https://shirleeyw.github.io/des157/studio2/images/open.JPG";
            pen.setAttribute("class", "show");
            myjournal.style.cursor = "pointer";
            console.log(`pen appear`);
    } */

    function changeImage() {
        if(document.getElementById('journal').src == "https://shirleeyw.github.io/des157/studio2/images/closed.png"){
            document.getElementById('journal').src ="https://shirleeyw.github.io/des157/studio2/images/open.JPG";
            pen.setAttribute("class", "show");
            myjournal.style.cursor = "pointer";
        }
        else {
            document.getElementById('journal').src = "https://shirleeyw.github.io/des157/studio2/images/closed.png";

        }
    }

    });

});