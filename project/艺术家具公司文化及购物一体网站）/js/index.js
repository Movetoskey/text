$(function(){
	//轮播图
	var i=0
	function run(){
		i++;
		if(i>=$('.imgs img').length){
			i=0
		}
		$('.imgs img').eq(i).fadeIn().siblings().fadeOut("slow")
		$('.circle li').eq(i).addClass('active').siblings().removeClass()
	}
	var timer = setInterval(run,3000)
	$('.banner').mouseenter(function(){
		clearInterval(timer)
	})
	$('.banner').mouseleave(function(){
		timer = setInterval(run,3000)
	})
	$('.btn span').eq(0).click(function(){
		console.log(11111111)
		if(i<=0){
			i=$('.imgs img').length -2
		}else{
			i -=2
		}
		run()
	})
	$('.btn span').eq(1).click(function(){
		console.log(11111111)
		run()
	})
	$('.circle li').click(function(){
		i = $(this).index()-1
		run()
	})
	
	
	//hover
	$('.newBox .newthing').mouseenter(function(){
		$(this).find('.picture2').show()
	})
	$('.newBox .newthing').mouseleave(function(){
		$(this).find('.picture2').hide()
	})
	$('.imgNav #mskimg').mouseenter(function(){
		// $(this).find('.msk').show()
		$(this).find('.msk').animate({
			width:"100%",
			height:"100%",
			opacity: 'show'
		},500)
	})
	$('.imgNav #mskimg').mouseleave(function(){
		$(this).find('.msk').hide()
	})
	
	$('.wrap .smoove').smoove({
		offset:'15%',
		moveX:'0px',
		moveY:'100px'
	})
	$('.footer').smoove({
		offset:'15%',
		moveX:'0px',
		moveY:'100px'
	})
	$('.footer .smoove').smoove({
		offset:'15%',
		moveX:'0px',
		moveY:'100px'
	})
	// $('.wrap .newArr .chinese').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'50px'
	// })
	// $('.wrap .newArr .msg').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'50px'
	// })
	// $('.wrap .newBox .newthing').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right .chirename').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right .price').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right .chairmsg').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right .title').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right .size').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	// $('.wrap .indexchair .right button').smoove({
	// 	offset:'15%',
	// 	moveX:'100px',
	// 	moveY:'100px'
	// })
	
	// $('.wrap .indexchair .left').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .audios .bg').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .company .top .english').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .company .top .chinese').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .company .top .msg').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .company .bottom .new1').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.wrap .company .logos .logo1').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.footer .contentUs').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
	// $('.footer .wechat').smoove({
	// 	offset:'15%',
	// 	moveX:'0px',
	// 	moveY:'100px'
	// })
})
