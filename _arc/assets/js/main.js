jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});

function sendNewsLetter(form){
	var first_name, last_name, phone, email, selling, buying, newsletter, message;
				$.ajax({'url':'include/newsletter.php',
					'data':{
						'first_name':document.newsletterForm.first_name.value,
						'last_name':document.newsletterForm.last_name.value,
						'email':document.newsletterForm.email.value,
						'phone':document.newsletterForm.phone.value,
						'message':document.newsletterForm.message.value,
						'newsletter':$('.Checkbox:checked').map(function() {return this.value;}).get().join(' ')
							},
						'async':false,
						'type':'post',
						'success':function(results){
						
						  setTimeout(function(){
						    results=results.replace(/"/g,"");
							
							//frmSubmit();
						  }, 2000);
						}
					});
					function frmSubmit(){
					$('#newsletterForm').submit();
					}
}
function sendContactForm(form){
	var first_name, last_name, phone, email, selling, buying, newsletter, message;
				$.ajax({'url':'include/contact.php',
					'data':{
						'first_name':document.contactForm.first_name.value,
						'last_name':document.contactForm.last_name.value,
						'email':document.contactForm.email.value,
						'phone':document.contactForm.phone.value,
						'message':document.contactForm.message.value
							},
						'async':false,
						'type':'post',
						'success':function(results){
						
						  setTimeout(function(){
						    results=results.replace(/"/g,"");
							
							//frmSubmit();
						  }, 2000);
						}
					});
					function frmSubmit(){
					$('#newsletterForm').submit();
					}
}