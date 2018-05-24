/* Sidebar navigation */
/* ------------------ */

/* Show navigation when the width is greather than or equal to 991px */
$(document).ready(function() {

  $(".js-upload").click(function(e) {
    e.preventDefault();
    $("#js-popup-submit-type").modal("show");
  });

  $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
  });
});

$(document).ready(function(){
  var hash = window.location.hash;
  if (hash == "#previous"){
    $("#js-list-submissions").hide();
    $("#js-form-submit-data").hide();
    $("#js-existing-submissions").show();
    //$(this).addClass("active");
    $("#btn-submissions-due").removeClass("active");
  }

  //$("#btn-submissions-due").addClass("active");

  $('#dropdown-user-tray').on('shown.bs.collapse', function (e) {
    $(".collapse i.fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
});

$('#dropdown-user-tray').on('hidden.bs.collapse', function (e) {
  $(".collapse i.fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
});

  $("#btn-submissions-due").on("click", function(e){
    $("#js-list-submissions").show();
    $("#js-form-submit-data").hide();
    $("#js-existing-submissions").hide();
    $(this).addClass("active");
    $("#btn-submissions-prev").removeClass("active");   
  });

  $("#btn-submissions-prev").on("click", function(e){
    $("#js-list-submissions").hide();
    $("#js-form-submit-data").hide();
    $("#js-existing-submissions").show();
    $(this).addClass("active");
    $("#btn-submissions-due").removeClass("active");
    
  });

  $(".btn.btn-primary").on("click", function(e){
    $("#js-list-submissions").hide();
    $("#js-existing-submissions").hide();
    $("#js-form-submit-data").show();
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

/* ****************************************** */
/* Sidebar dropdown */
/* ****************************************** */

$(document).ready(function(){
  $(".sidebar-dropdown a").on('click',function(e){
      e.preventDefault();

      if(!$(this).hasClass("open")) {
        // hide any open menus and remove all other classes
        $(".sidebar .side-nav").slideUp(150);
        $(".sidebar-dropdown a").removeClass("open");
        
        // open our new menu and add the open class
        $(".sidebar .side-nav").slideDown(150);
        $(this).addClass("open");
      }
      
      else if($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".sidebar .side-nav").slideUp(150);
      }
  });

});

/* ****************************************** */
/* Sidebar dropdown menu */
/* ****************************************** */

$(document).ready(function(){

  $(".has_submenu > a").click(function(e){
    e.preventDefault();
    var menu_li = $(this).parent("li");
    var menu_ul = $(this).next("ul");

    if(menu_li.hasClass("open")){
      menu_ul.slideUp(150);
      menu_li.removeClass("open");
	  $(this).find("span").removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    else{
      $(".side-nav > li > ul").slideUp(150);
      $(".side-nav > li").removeClass("open");
      menu_ul.slideDown(150);
      menu_li.addClass("open");
	  $(this).find("span").removeClass("fa-caret-down").addClass("fa-caret-up");
    }
  });
  
});

/* ****************************************** */
/* Slim Scroll */
/* ****************************************** */

$(function(){
    $('.scroll').slimScroll({
        height: '315px',
		size: '5px',
		color:'rgba(50,50,50,0.3)'
    });
});	

/* ****************************************** */
/* Knob */
/* ****************************************** */

$(function() {
    $(".knob").knob();
});

/* ****************************************** */
/* JS for UI Tooltip */
/* ****************************************** */

$('.ui-tooltip').tooltip();

/* ****************** */
/* Date Time Picker JS */
/* ****************** */

$(function() {
	$('#datetimepicker1').datetimepicker({
		pickTime: false
	});
});

$(function() {
	$('#datetimepicker2').datetimepicker({
		pickDate: false
	});
});

/* ****************************** */
/* Slider */
/* ******************************* */

    $(function() {
        // Horizontal slider
        $( "#master1, #master2" ).slider({
            value: 60,
            orientation: "horizontal",
            range: "min",
            animate: true
        });

        $( "#master4, #master3" ).slider({
            value: 80,
            orientation: "horizontal",
            range: "min",
            animate: true
        });        

        $("#master5, #master6").slider({
            range: true,
            min: 0,
            max: 400,
            values: [ 75, 200 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });


        // Vertical slider 
        $( "#eq > span" ).each(function() {
            // read initial values from markup and remove that
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });
    });
 
/* ****************** */
/* Calendar */
/* ****************************************** */

  $(document).ready(function() {
  
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
  
    
    $('#calendar').fullCalendar({
      header: {
        left: 'prev',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,next'
      },
      editable: true,
      eventClick: function(data, event, view) {
        $("#js-popup-event").modal("show");
      },
      events: [
        {
          title: 'IIS Event',
          start: new Date(y, m, 1)
        },
        {
          title: 'IIS clarifications',
          start: new Date(y, m, d-5),
          end: new Date(y, m, d-2)
        },
        {
          id: 999,
          title: 'IIS submission',
          start: new Date(y, m, d+4, 16, 0),
          allDay: false
        },
        {
          id: 999,
          title: 'IIS reminder',
          start: new Date(y, m, d-10, 16, 0),
          allDay: false
        },
        {
          title: 'Ad hoc request',
          start: new Date(y, m, d, 10, 30),
          allDay: false
        },
        {
          title: 'Asset register',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29) /* ,
          url: 'iis-data.html' */
        }
      ]
    });
    
  });
  
/* ****************************************** */
/* Form Validate // Form Validation */
/* ****************************************** */

$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }
});

$().ready(function() {

	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			gender: {
				required: true
			},
			limit: {
				required: true
			},
			location: {
				required: true
			},
			agree: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			email: "Please enter a valid email address",
			gender: "Please choose gender",
			limit: "Please choose at least one option",
			location: "Please select your location",
			agree: "Please accept our policy"
		}
	});

});

/* ****************************************** */
/* Form Wizard */
/* ****************************************** */
var uploaded=false;

$(document).ready(function() {
 
  // pull out of wizard
  $(".js-addfile-click").on("click", function(e){
    uploaded = true;
    $('#frm-upload .progress').show();
    $(".pnl-before-upload").hide();
    $(".pnl-during-upload").show();
    $('#frm-upload .progress .progress-bar').css("width",
    function () {
      return $(this).attr("aria-valuenow") + "%";
      });
     setTimeout(function(){
        $(".pnl-during-upload").hide();
        $(".pnl-after-upload").show();
     }, 3000);
  });

  uploaded = true;
  $('#frm-upload .progress').show();
  $(".pnl-before-upload").hide();
  $(".pnl-during-upload").show();
  $('#frm-upload .progress .progress-bar').css("width",
  function () {
    return $(this).attr("aria-valuenow") + "%";
    });
   setTimeout(function(){
      $(".pnl-during-upload").hide();
      $(".pnl-after-upload").show();
      $(".js-addfile-click").removeClass("btn-primary");
      $(".js-addfile-continue").show();
   }, 3000);

	$("#wizard").steps({
		headerTag: "h2",
		transitionEffect: "slide",
		autoFocus: true
  });

  $("a[href$='#next']").on("click", function(e){
    $(".js-addfile-click").on("click", function(e){
      uploaded = true;
      $('#wizard .progress').show();
      $(".pnl-before-upload").hide();
      $(".pnl-during-upload").show();
      $('#wizard .progress .progress-bar').css("width",
      function () {
        return $(this).attr("aria-valuenow") + "%";
        });
       setTimeout(function(){
          $(".pnl-during-upload").hide();
          $(".pnl-after-upload").show();
       }, 3000);
    });
  });
  
  
  $('a[href$="#finish"]').on("click", function(e){
    if (uploaded != true){
      alert("Please add at least one file");
    }
    else{
    //hide the wizard
    $("#js-form-submit-data").hide();
    // show the 
    $("#js-existing-submissions").show();

    $("#popup-confirmation").modal('show');

    $('#popup-confirmation').on('hidden.bs.modal', function (e) {
      $("#btn-submissions-prev").addClass("active");
      $("#btn-submissions-due").removeClass("active");
    })
  }
  });

  $("#btn-close-confirmation").on("click", function(e){
    $("#popup-confirmation").modal('hide');
    $("#btn-submissions-prev").addClass("active");
    $("#btn-submissions-due").removeClass("active");
  })

  
 
});

/* ****************************************** */
/* Compose Mail Form word processor JS */
/* ****************************************** */

$('.textarea').wysihtml5();
$(prettyPrint);

/* ****************************************** */
/* Task widget */
/* ****************************************** */

$(document).ready(function(){   
   $('.tasks-widget input:checkbox').removeAttr('checked').on('click', function(){
      if(this.checked){
         $(this).next("span").css('text-decoration','line-through');
      }
      else{
         $(this).next("span").css('text-decoration','none');
      }
	});
});

/* ****************************************** */