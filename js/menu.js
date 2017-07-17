$(document).ready(function(){
    
    //$(this).scrollTop(0);
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
    $('body').scrollspy({target: "#down-chevron", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
         // Prevent default anchor click behavior
            event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }  // End if
    });
    
       $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
});
$(window).scroll(function(event) {
    if ($(window).scrollTop()>=190) {
        event.preventDefault();
        //$('body').addClass('flowers-leaves');
        $('nav').fadeIn(1200);
    } 
    else if ($(window).scrollTop()== 0) {
        //$('body').removeClass('flowers-leaves');
        $('nav').fadeOut(100);
        //$('nav').hide();
        //$('.skill span').removeClass("expand ps");
    } 
});
// Hook doAnimations on scroll, and trigger a scroll
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');