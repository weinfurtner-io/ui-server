$(function () {
	"use strict";
	
	$("#menuToggle, .btn-close").on("click", function (e) {
		e.preventDefault();
	});
	
	$('.dropdown-menu a').click(function(e) {
		e.stopPropagation();
		$('.navmenu').offcanvas('toggle');
	});
	
	function getGridSize() {
		return (Modernizr.mq('(max-width:490px)')) ? 1 : 
				(Modernizr.mq('(max-width:705px)')) ? 2 : 
				(Modernizr.mq('(max-width:768px)')) ? 3 : 4;
	}
	
	/* ---------------------------------------------------------
	 *	Background
	 */
	
	
	
	/* ---------------------------------------------------------
	 *	WOW
	 */
	
	new WOW({
		mobile: false
	}).init();
	
	
	/* ---------------------------------------------------------
	 *	Knob
	 */
	
	$(".dial").knob({
		 draw : function () {

			// "tron" case
			if(this.$.data('skin') == 'tron') {

				var a = this.angle(this.cv)  		// Angle
					, sa = this.startAngle          // Previous start angle
					, sat = this.startAngle         // Start angle
					, ea                            // Previous end angle
					, eat = sat + a                 // End angle
					, r = true;

				this.g.lineWidth = this.lineWidth;

				this.o.cursor
					&& (sat = eat - 0.3)
					&& (eat = eat + 0.3);

				if (this.o.displayPrevious) {
					ea = this.startAngle + this.angle(this.value);
					this.o.cursor
						&& (sa = ea - 0.3)
						&& (ea = ea + 0.3);
					this.g.beginPath();
					this.g.strokeStyle = this.previousColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
					this.g.stroke();
				}

				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
				this.g.stroke();

				this.g.lineWidth = 2;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();

				return false;
			}
		}
	});
	

	/* ---------------------------------------------------------
	 *	Timeline
	 */
	
	$("[data-toggle='collapse']").on("click", function(e){
		e.preventDefault();
		var id = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]');
		var icon = $(id).children("i");
		if(/fa-minus/i.test($(icon).attr("class"))){
				$(icon).removeClass("fa-minus").addClass("fa-plus");
		}
		else{
			$(icon).removeClass("fa-plus").addClass("fa-minus");
		}
	});

	/*
	 * Custom
	 */
	$("#contact-form").on('submit', function (e) {

		e.preventDefault();
		
		var form = $("#contact-form");
		$.ajax({
			type: form.attr('method'),
			url: form.attr('action'),
			data: form.serialize(),
			success: function(data) {

				$("#contact-form button").addClass('success');
				$(".contact-form-button-text").text("Sent");

				$("#contact-form button i").removeClass('fa-bullhorn');
				$("#contact-form button i").addClass('fa-check');
				$("#contact-form button").prop('disabled', true);
				$("#contact-form")[0].reset();
			}
		});
	});
	
	
});