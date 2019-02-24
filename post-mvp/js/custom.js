/* Sidebar navigation */
/* ------------------ */
var numfiles = 1;
/* Show navigation when the width is greather than or equal to 991px */
$(document).ready(function() {

  var hash = window.location.hash;

if (hash == "#newdata"){
  $("#js-new-data").show(); 
}

 

$("#btn-add-another-file").on("click", function(e){
  numfiles+=1;
  $("#js-row-" + numfiles).show();
  $("#js-num-files").text(numfiles);
})


  $("#btn-add-new-submission").on("click", function(e){
    $("#js-file-type").hide();
    $("#js-add-new-submission").show();
    //$("#js-form-submit-data").hide();
    //$("#js-list-submissions").show();
  })

  $("#btn-add-file").on("click", function(e){
    $("#js-file-type").hide();
    $("#js-add-new-submission").hide();
    $("#js-form-submit-data").show();
    //$("#js-list-submissions").show();
  })

  $(window).resize(function()
  {
    if($(window).width() >= 767){
      $(".side-nav").slideDown(150);
    }     
	else{
	  $(".side-nav").slideUp(150);
	}	
  });


});

 
