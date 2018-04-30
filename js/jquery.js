
$(window).scroll(function(){
console.log($(window).scrollTop());
if($(window).scrollTop() > 100){
            
  $(".collapse").addClass("scroll_active");
      }
   
        else {
     $(".collapse").removeClass("scroll_active");
    
        }
  
    })
/*$(document).ready(function(){
    if($(window).scrollTop()>= 650){
         $("#content").fadeIn(1000);
    }
        
        
       
});*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
    $("#container").fadeIn(1300);
})
$(window).scroll(function(){
        var window_scroll_pos = $(window).scrollTop();
        var scroll_pos = $(".column").offset().top;
        /*console.log(scroll_pos)*/
        var scroll_y = window_scroll_pos-scroll_pos;
        console.log(scroll_y)
        /*console.log("Scroll..."+$(window).height() - scroll_pos);*/
        if(scroll_y > $(window).height() - scroll_pos) {
            $(".column").addClass("active");
        }
        else {
            $(".column").removeClass("active");
        }
    })


/*$("a").click(function() {
    $('html,body').animate({
        scrollTop: $("#skills").offset().top},
        'slow');
});*/

/*$(function(){
 var shrinkHeader = 230;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.addclass').addClass('scroll_active');
        }
        else {
            $('.addclass').removeClass('scroll_active');
        }
  });*/

/*$('.Count').each(function() {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 4000,
    
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }1-1 jquery
  });
});*/

/*$(window).on("load",function(){
    $("#navigation").addClass("active")
})*/
