(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 50
		})

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$.backstretch([
			"/images/background/1.jpg"
			], {duration: 3800, fade: 1500});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */
		
		
		var navbar = $('.navbar');
		var navHeight = navbar.height();

		/* 
		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});
		*/

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		
		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		
		
	});

})(jQuery);
