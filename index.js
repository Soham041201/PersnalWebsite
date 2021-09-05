window.onscroll = function() {scrollFunction()};

document.getElementById("navbar").onmouseover = function() {scrollMouseIn()};
document.getElementById("navbar").onmouseout = function() {scrollMouseOut()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-40px";
  }
}
function scrollMouseIn() {
    document.getElementById("navbar").style.top = "0";
}

function scrollMouseOut() {
    document.getElementById("navbar").style.top = "-40px";
}
new TypeIt("#typewrite", {
    strings: "",
    speed: 50,
    cursorChar:"_",
   
    waitUntilVisible: true,
    
  }).go();




  
