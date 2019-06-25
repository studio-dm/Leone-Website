function valForm(form){
				$('#newsletter input, textarea').each(
				function(index){  
					var input = $(this);
					if(input.val()=="" && input.attr('required')=="required"){
						input.css('border','1px solid red');
						$('.message').show();
						$('.message').html('<center><span style="color:red">Missing required fields</span></center>');
					}
					return false;
				});
}
