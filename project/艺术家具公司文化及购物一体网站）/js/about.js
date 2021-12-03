
var i = 0;
var canscroll = true;

$(function(){
	$(window).on( function(event) {
		event.preventDefault();
	});
	var flag = true;
	$(document).mousewheel(function(e){
		i-=e.deltaY
			
		if(i<0){
			canscroll = false;
			i=0
		}else if(i>$('.wrap div').length){
			i=$('.wrap div').length;
			canscroll = true;
			return;
		}
		$('body,html').stop().animate({
			"scrollTop":700*i+'px'
		},700,function(){
			canscroll = true;
		})
		
	})
	
})
