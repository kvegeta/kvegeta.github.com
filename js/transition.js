$(document).ready(function() {
  $("#button a").click(function(e) {
    $(this).parents("section").find(".menubutton").addClass("animationout").removeClass("animationin");
    $(this).parents().siblings(".textcontent").css("visibility", "visible");
    $('#xbutton').css("visibility", "visible");
  });
  
  $("#xbutton").click(function(e) {
    $('#xbutton').css("visibility", "hidden");
    $("#button").parents("section").find(".menubutton").removeClass("animationout").addClass("animationin");
    $('.textcontent').css("visibility","hidden");
  });
});