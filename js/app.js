let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let slideIndexSuccess = 0;
showSlidesSuccess();

function showSlidesSuccess() {
  let i;
  let slides = document.getElementsByClassName("mySlidesSuccess");
  let dots = document.getElementsByClassName("dotSuccess");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexSuccess++;
  if (slideIndexSuccess > slides.length) {slideIndexSuccess = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSuccess-1].style.display = "block";  
  dots[slideIndexSuccess-1].className += " active";
  setTimeout(showSlidesSuccess, 5000); // Change image every 2 seconds
}

 // When the user scrolls down then
   // slide down the navbar
window.onscroll = function() {
    scroll();
};
 
function scroll() {
    if (
       document.body.scrollTop > 20 ||
       document.documentElement.scrollTop > 20
    ) {
       document.getElementById("top").style.top = "-20px";
    } else {
       document.getElementById("top").style.top = "50px";
    }
 }

 $(document).ready(function(){
    $('.food-slider').slick({
       autoplay:true,
      slidesToShow:5,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:2,
          }
       }
      ]
 
    });
 
    $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
 });

