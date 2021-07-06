const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");

header.addEventListener("click", function(){
    
    if(header.classList.contains("open")){ // close hamburger menu
        body.classList.remove(".noscroll");
        header.classList.remove("open");
        fadeElements.forEach(function(element){
            element.classList.add("fade-out")
            element.classList.remove("fade-in")
        })
        
    }else{ // open hamburger menu
        header.classList.add("open"); 
        body.classList.add(".noscroll");
        fadeElements.forEach(function(element){
            element.classList.add("fade-in")
            element.classList.remove("fade-out")
        });
        
    }
    
});