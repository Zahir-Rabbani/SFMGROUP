$(document).ready(function(){

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

    $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
    });

    $("#moveUp").on("click", function(){
      document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    function topFunction() {
      alert('i am here');exit;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

      }
     
      function myFunction() {
       document.getElementById("myDropdown").classList.toggle("show");
     }
     window.onclick = function(e) {
       if (!e.target.matches('.dropbtn')) {
       var myDropdown = document.getElementById("myDropdown");
         if (myDropdown.classList.contains('show')) {
           myDropdown.classList.remove('show');
         }
       }
     }
 });
