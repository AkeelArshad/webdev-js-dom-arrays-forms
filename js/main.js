// I I F E
(function() {
    //Start coding here
    document.getElementById("myHeading").innerHTML = "Akeel";
    
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
    
    //adding events
    document.getElementById("myTestEvent").addEventListener("click", function() {
        console.info("hi I was clicked");
    })
    
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
    // End coding here
})();