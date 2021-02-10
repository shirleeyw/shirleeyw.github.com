(function(){
    'use strict';
    console.log("reading js");

    const myjournal = document.getElementById("journal");
    const pen = document.getElementById("pen");
    
    myjournal.addEventListener("click", function(){
        console.log(myjournal.src);

        if(myjournal.src =="https://shirleeyw.github.io/des157/studio2/images/closed.png"){
            myjournal.src = "https://shirleeyw.github.io/des157/studio2/images/open.JPG";
            pen.setAttribute("class", "show");
        }

    })

})