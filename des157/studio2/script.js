(function(){
    'use strict';
    console.log("reading js");

    const journal = document.getElementById("journal");
    const pen = document.getElementById("pen");
    
    journal.addEventListener("click", function(){
        

        if(journal.src =="https://shirleeyw.github.io/des157/studio2/images/closed.png"){
            journal.src = "https://shirleeyw.github.io/des157/studio2/images/open.JPG";
            pen.setAttribute("class", "show");
        }

    })

})