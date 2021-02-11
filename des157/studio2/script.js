(function(){
    'use strict';
    console.log("reading js");

    const journal = document.getElementById("journal");
    const brushpen = document.getElementById("brushpen");
    const pen = document.getElementById("pen");
    const tape = document.getElementById("tape");
    const flags = document.getElementById("pageflags");
    const overlay = document.getElementById("overlay");
    /* overlay.setAttribute("class", "hidden"); */

    journal.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'show';
    });
    
    journal.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'show';
        const journalText = `journals are cool`;

        description.innerHTML = journalText;

        overlay.innerHTML = `journals are cool`;
        overlay.setAttribute("class", "show");

    });

    brushpen.addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'show';
        const brushpenText = `brushpen`;

        description.innerHTML = brushpenText;

        overlay.innerHTML = `brushpens are cool`;
        overlay.setAttribute("class", "show");
    });
});