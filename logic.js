// cursor

var crsr = document.querySelector("#cursor")
var crsr_b = document.querySelector("#cursor-b")

document.addEventListener("mousemove",function(vin){
    crsr.style.left =vin.x+"px"
    crsr.style.top =vin.y+"px"

})

document.addEventListener("mousemove",function(vin){

    crsr_b.style.left =vin.x-170 +"px"
    crsr_b.style.top =vin.y-170+"px"
    
})
// scroll section2 
// Page load hone ke baad  chale
  window.addEventListener("load", function () {
    //   elements ko select karna jinme animation chhahiye
    let elements = document.querySelectorAll(".fade-in");

    //  Jab user scroll kare to check karnna 
    window.addEventListener("scroll", function () {
      elements.forEach(function (el) {
        // element ka position check karnna
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        // Jab element screen mein aaye
        if (position < screenHeight - 100) {
          el.classList.add("show");
        }
      });
    });
  });

// nav-bar

let navToggle = document.getElementById('navToggle');
let navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    if (navLinks.classList.contains('show')) {
      navToggle.style.display = 'none';
    }
  });



  // skills
  
  window.addEventListener("load", function() {
    let bars = document.querySelectorAll(".skill-fill");
    bars.forEach(bar => {
      let percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
  });
