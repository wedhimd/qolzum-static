const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const carouselHero = document.getElementById("#carouselHero");

// carousel

const screenSize = matchMedia("(max-width: 1023px)") 

function myFunction(screenSize) {
    if (screenSize.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  myFunction(screenSize)
//   screenSize.addEventListener(myFunction)
//carousel
btnHamburger.addEventListener("click", function(event){
    event.stopPropagation();
    if(header.classList.contains("open")){ // close hamburger menu
        body.classList.remove(".noscroll");
        header.classList.remove("open");
        fadeElements.forEach(function(element){
            
            element.classList.add("fade-out")
            element.classList.remove("fade-in")
            
        })
        
    }else{ // open hamburger menu
        event.stopPropagation();
        header.classList.add("open"); 
        body.classList.add(".noscroll");
        fadeElements.forEach(function(element){
            element.classList.add("fade-in")
            element.classList.remove("fade-out")
            
        });
        
    }

    // event.stopPropagation();
    
});