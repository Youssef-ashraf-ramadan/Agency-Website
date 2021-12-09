$(document).ready(function() {
    window.setTimeout("fadeMyDiv();", 2000); //call fade in 3 seconds
  }
 )
 
 function fadeMyDiv() {
    $("#preloader").fadeOut('slow');
 }