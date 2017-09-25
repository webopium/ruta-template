/* ====================== FORM STYLER ====================== */
(function($) {
	$(function() {
		$('input, select').styler();
	});
})(jQuery);

/* ====================== SLICK SLIDER ====================== */
$(document).ready(function() {
	$('.profile-gallery-wrap').slick({
		infinite: true,
		speed: 300,
		swipe: false,
		slidesToShow: 7,
		centerMode: true,
		// variableWidth: true
		responsive: [
		    {
		    	breakpoint: 1100,
		    	settings: {
		    		slidesToShow: 6
		    	}
		  	},
		  	{
		  		breakpoint: 950,
		      	settings: {
		      		slidesToShow: 5
		      	}
		  	},
		  	{
		  		breakpoint: 825,
		      	settings: {
		      		slidesToShow: 4
		      	}
		  	},
		  	{
		  		breakpoint: 675,
		      	settings: {
		      		slidesToShow: 3
		      	}
		  	},
		  	{
		  		breakpoint: 550,
		      	settings: {
		      		slidesToShow: 2
		      	}
		  	},
		  	{
		  		breakpoint: 425,
		      	settings: {
		      		slidesToShow: 1,
		      		swipe: true
		      	}
		  	}
	  	]
	});
});

/* ====================== DATEPICKER ====================== */
$(document).ready(function() {
    $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/sprite_img/calendar_icon.png",
      buttonImageOnly: false,
      buttonText: "Select date"
    });
});

/* ====================== CUSTOM ====================== */
$(document).ready(function() {
	$( ".mobile-nav-btn__link_js" ).click(function(){
		$( ".nav-list" ).toggleClass( "open" );
	  	$( ".mobile-nav-btn" ).toggleClass( "open" );
	});
	$( ".letters-mobile-menu-block__menu_js" ).click( function() {
	  $( ".letters-menu-block" ).toggleClass( "open" );
	});
	$( ".menu-block-search-btn__link_js" ).click( function() {
	  $( ".mobile-block-search" ).toggleClass( "open" );
	});
	$( ".interests-content__link_js, .show-interests-popup-close" ).click( function() {
	  $( ".show-interests-popup" ).toggleClass( "open" );
	});
});
$(window).on('load resize', function(){
	if ($(window).width() >= '751'){
        $( ".menu-block-search-btn__link_js").click(function(){
			$( ".search-message-popup" ).toggleClass( "open" );
		});
		$( ".search-message-close").click(function(){
			$( ".search-message-popup" ).toggleClass( "open" );
		});
    }else{};
});

$( function() {
    $( "#accordion" ).accordion();
  } );
