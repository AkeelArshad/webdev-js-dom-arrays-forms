// I I F E
(function() {
    //Start coding here
    document.getElementById("myHeading").innerHTML = "Akeel";
    
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
    
    //adding events
    document.getElementById("myTestEvent").addEventListener("click", function() {
        console.info("hi I was clicked");
    })
    

    let colourButtons = document.querySelectorAll(".colPicker");
    let bodyElement = document.querySelector("body");
    console.dir(colourButtons);
    for (let i=0; i < colourButtons.length; i++) {
        colourButtons[i].addEventListener("click", chgColour)
    }

    function chgColour(ev) {
        let colourPicked = ev.target.classList[0] + "Back"
        bodyElement.setAttribute("class", colourPicked)
    }
    
    let imageAr = [
        'images/view1.jpg', 
        'images/view2.jpg', 
        'images/view3.jpg', 
        'images/view4.jpg', 
        'images/view5.jpg', 
        'images/view6.jpg'
    ];
    let imageCounter = 0;
    console.dir(imageAr);

    setInterval(chgImage, 2500);

    function chgImage() {
        document.getElementById("myImages").setAttribute("src", imageAR[imageCounter]);
        imageCounter++;
    }

    
    /*
        document.querySelector(".red").addEventListener('click', function(ev) {
        document.querySelector('body').setAttribute('class', "redBack");
    })
        document.querySelector(".blue").addEventListener('click', function(ev) {
        document.querySelector('body').setAttribute('class', "blueBack");
    })
        document.querySelector(".green").addEventListener('click', function(ev) {
        document.querySelector('body').setAttribute('class', "greenBack");
    })
        document.querySelector(".reset").addEventListener('click', function(ev){
        document.querySelector('body').removeAttribute('class');
    })
    */
    // End coding here
})();