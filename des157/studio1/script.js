(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;

        const myText = `here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;


        if (noun1 && noun2 && adj && verb) {
            const myText = `here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        }
        else {
            alert("please give me words so i can make your mad lib!");
        }


        document.querySelector('#noun1').value = '';
        document.querySelector('#noun2').value = '';
        document.querySelector('#adj').value = '';
        document.querySelector('#verb').value = '';

        madlib.innerHTML = myText;
        
    });
        
        
}());