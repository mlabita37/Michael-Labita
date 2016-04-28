console.log("...sup");

// Open/Close Navigation
var open = false;

function isOpen(){
  if (open == true){
    $('#open-nav').html('&#10005');
  }else {
    $('#open-nav').html('&#9776;');
  }
}

function toggleNav(){
  $("#open-nav").on('click', function(){
    $('nav').toggle();
    open = !open;
    isOpen();
});
}

function closeAfterClick(){
  $('li').on('click', function(){
    $('nav').toggle();
    open = !open;
    isOpen();
  })
}

// Enable navigation scrolling
function scrollNav(){
$('li').click(function() {
    var location = this.id;
    location = '#' + location + 'Div';
    console.log(location);
    $('html, body').animate({
         scrollTop: $(location).offset().top
     }, 1000);
});
}

//Fade header on scroll

 $(window).scroll(function(){
   if ($(this).scrollTop() > 40){
     $( "header" ).css('background-color', 'rgba(0,150,136,0.5)');
   }else {
     $( "header" ).css('background-color', 'rgba(0,150, 136,1)');
   }
 });



$(function(){
toggleNav();
closeAfterClick();
scrollNav();
});
