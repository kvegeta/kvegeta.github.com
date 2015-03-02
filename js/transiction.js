$(document).ready(function() 
{
  $("#start").click(function(e) 
  {
    if(parseInt($(canvas).css('opacity')) == 0) {
      $('#canvas').css("opacity", "1.0");
      }
    else {
	  $('#canvas').css("opacity", "0.0")
	  }
  });
});