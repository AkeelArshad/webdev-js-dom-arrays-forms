// I I F E
(function() {
    //Start coding here
    document.getElementById("myHeading").innerHTML = "Akeel";
    
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
    
    //adding events
    document.getElementById("myTestEvent").addEventListener("click", function() {
        console.info("hi I was clicked");
    })
    document.getElementById('myTestEvent').addEventListener('click', function(ev){
        console.dir(ev);
    })
    document.querySelector(".red").addEventListener('click', function(ev){
        document.querySelector('body').setAttribute('class', "redBack");
    })

    // End coding here
})();