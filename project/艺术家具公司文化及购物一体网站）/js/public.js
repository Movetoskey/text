$(function(){
	$('.nav .left ul li').eq(0).siblings().mouseenter(function(){
		$(this).addClass('publicActive').siblings().removeClass('publicActive')
	})
	$('.nav .left ul li').eq(0).siblings().mouseleave(function(){
		$(this).removeClass('publicActive')
	})
	$('.nav .left ul li').eq(0).siblings().click(function(){
		$(this).css({'background':'#29A194','color':'#fff'})
		$(this).find('a').css({'color':'#fff'})
	})
})
