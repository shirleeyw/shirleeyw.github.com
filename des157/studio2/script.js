(function(){
    'use strict';
    console.log("reading js");

    const brushpen = document.getElementById("brushpen");
    const flags = document.getElementById("pageflags");
    const journal = document.getElementById("journal");
    const pen = document.getElementById("pen");
    const tape = document.getElementById("tape");

    const closeBtns = document.querySelectorAll('.close');


    //open overlays------------------------------
    
    brushpen.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('brushpen-overlay').className = 'show';
    });

    flags.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('pageflags-overlay').className = 'show';
    });

    journal.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('journal-overlay').className = 'show';
    });

    pen.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('pen-overlay').className = 'show';
    });

    tape.addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('tape-overlay').className = 'show';
    });



    //closing overlays when 'x' button clicked
    for(const eachBtn of closeBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            document.getElementById('brushpen-overlay').className = 'hidden';
            document.getElementById('pageflags-overlay').className = 'hidden';
            document.getElementById('journal-overlay').className = 'hidden';
            document.getElementById('pen-overlay').className = 'hidden';
            document.getElementById('tape-overlay').className = 'hidden';
        })
    }


        /* description.innerHTML = `<p>Brush Pens <br> These brush pens are my go-to pens for doing fancy calligraphy. But they also are great for coloring in illustrations!`;
        
        document.getElementById('overlay').className = 'show';
    });
    
    flags.addEventListener('click', function(event){
        event.preventDefault();
        description.innerHTML = `Sticky notes add pops of color to my journal. Sometimes when I need to quickly jot something down, I would write it on a sticky note and then insert it into my journal later.`;

        document.getElementById('overlay').className = 'show';
    });

    journal.addEventListener('click', function(event){
        event.preventDefault();
        description.innerHTML = `This is where all my thoughts and school assignments call home.`;

        document.getElementById('overlay').className = 'show';
    });

    pen.addEventListener('click', function(event){
        event.preventDefault();
        description.innerHTML = `Zebra Mildliners are literally the best highlighters out there because the colors are better than the bright neon ones you usually see. Plus, it is double sided!`;

        document.getElementById('overlay').className = 'show';
    });

    tape.addEventListener('click', function(event){
        event.preventDefault();
        description.innerHTML = `Using washi tape is my favorite way to spice up my journal spreads. I currently have a washi tape collection that is getting out of control, but I still buy them anyways :)`;

        document.getElementById('overlay').className = 'show';
    });
    

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    }); */

}());