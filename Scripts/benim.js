var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  if ($(window).scrollTop() >= 200) {       
    $('#pageup').show();    
} else {
    $('#pageup').hide();  
}

} 

$('#pageup').click(function() {      
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});