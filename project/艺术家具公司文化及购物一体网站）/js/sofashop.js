$(function(){
	
	$('.nav .left ul li').eq(0).siblings().mouseenter(function(){
		$(this).css('background','#29A194').css('color','#fff')
	})
	$('.nav .left ul li').eq(0).siblings().mouseleave(function(){
		$(this).css('background','#fff').css('color','#000')
	})
	$('.nav .left ul li').eq(0).siblings().click(function(){
		$(this).css('background','#29A194').css('color','#fff').siblings().css('background','#fff').css('color','#000')
	})
	
	$('.shopbtn .btn').siblings().mouseenter(function(){
		$(this).css('background','#29A194').css('color','#fff')
	})
	$('.shopbtn .btn').siblings().mouseleave(function(){
		$(this).css('background','#fff').css('color','#000')
	})
	$('.shopbtn .btn').siblings().click(function(){
		$(this).css('background','#29A194').css('color','#fff').siblings().css('background','#fff').css('color','#000')
	})
	
	$('.shopgoods .shopbox .shopgood').mouseenter(function(){
		$(this).find('.picture2').show()
	})
	$('.shopgoods .shopbox .shopgood').mouseleave(function(){
		$(this).find('.picture2').hide()
	})
	$('.selectbox').eq(3).show().siblings().hide()
	
	$('.shopbtn .btn').eq(0).click(function(){
		$('.chairbox').show().siblings().hide()
	})
	$('.shopbtn .btn').eq(1).click(function(){
		$('.sofabox').show().siblings().hide()
	})
	$('.shopbtn .btn').eq(2).click(function(){
		$('.tvbox').show().siblings().hide()
	})
	$('.shopbtn .btn').eq(3).click(function(){
		$('.lightbox').show().siblings().hide()
	})
	$('.shopbtn .btn').eq(4).click(function(){
		$('.decorationbox').show().siblings().hide()
	})
	
	$('.selectbox .shopgood').mouseenter(function(){
		$(this).find('.picture2').show().sinlings().hide()
	})
	$('.selectbox .shopgood').mouseleave(function(){
		$(this).find('.picture2').hide().sinlings().show()
	})
})