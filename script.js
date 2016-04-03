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

// Fade header on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $( "header" ).css('background-color', 'rgba(0,150,136,0.5)');
    } else {
        $( "header" ).css('background-color', 'rgba(0,150,136,1');
    }
});

// Type/FadeIn title
var names;
function setName(name){
  names = name.split('');
}

var currentText = [];
var newText;
var i=0;
setInterval(function(){
	if (i < names.length){
  		currentText.push(names[i]);
    	newText = currentText.toString();
    	newerText = newText.replace(/,/g , "");
      $('#hidden').css('display', 'none');
      $('#name').css('opacity', '+=0.07');
  		$('#name').text(newerText);
      $('h2').css('opacity', '+=0.06');
      $('address').css('opacity', '+=0.06');
  }
  i++;
}, 200);

// Heartbeat animation in footer
function beatingHeart(){
setInterval(function(){
  $('#heart').css({
   'font-size' : '1.25em',
   'margin-top' : '-4px'
});
  setTimeout(function(){
      $('#heart').css({
        'font-size' :'1em',
        'margin-top' : '0'
      });

  }, 1000);

}, 2000);
}

$(function(){
toggleNav();
closeAfterClick();
beatingHeart();
setName("Michael Labita");
scrollNav();
});
