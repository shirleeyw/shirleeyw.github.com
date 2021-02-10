(function(){
    'use strict';
    console.log("reading js");

    const journal = document.getElementById('journal');
    const pen = document.getElementById('pen');
    
    journal.addEventListener("click", function(event){
        event.preventDefault();

        journal.src = "studio2/images/inside.jpg";
        pen.setAttribute("class", "show");
    })

})