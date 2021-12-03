
// 数字导航
$(function(){
	$('.nav li').click(function(){
		// 改变scrollTop
		$('body,html').animate({scrollTop:1540+$(this).index()*$('.wrap>div').height()+'px'},1000)
		
		// 切换导航栏样式
		$('.nav li').eq($(this).index()).addClass('navActive').siblings().removeClass('navActive')
		// console.log($(this).index())
		
		$('.nav div').removeClass('navActive');
	})
	
	// 回到顶部
	$('.nav div').click(function(){
		$('html,body').animate({scrollTop:'0px'},1000)
		
		$('.nav div').addClass('navActive')
		
		$('.nav li').removeClass('navActive')
	})
})

// 滚动鼠标改变数字导航栏的颜色和淡入淡出方法
function changeColor(){
	
		var scrollTop=$(document).scrollTop();
		var hei=$('.wrap>div').eq(0).height();
		// 七楼
		if(1538+hei*6<=scrollTop&&scrollTop<1538+hei*7){
		$('.nav li').eq(6).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(1538+hei*5<=scrollTop&&scrollTop<1538+hei*6){
		$('.nav li').eq(5).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(1538+hei*4<=scrollTop&&scrollTop<1538+hei*5){
		$('.nav li').eq(4).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(1538+hei*3<=scrollTop&&scrollTop<1538+hei*4){
		$('.nav li').eq(3).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(1538+hei*2<=scrollTop&&scrollTop<1538+hei*3){
			$('.nav li').eq(2).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(1538+hei*1<=scrollTop&&scrollTop<1538+hei*2){
			$('.nav li').eq(1).addClass('navActive').siblings().removeClass('navActive')
		}
		// 一楼
		else if(1538<=scrollTop&&scrollTop<1538+hei*1){
			// 淡入
			$('.nav').fadeIn(1000)
			$('.nav li').eq(0).addClass('navActive').siblings().removeClass('navActive')
		}
		else if(scrollTop<1538){
			// 淡出
			$('.nav').fadeOut(1000)
			$('.nav li').eq(0).addClass('navActive').siblings().removeClass('navActive')
		}
}

// 鼠标滚动改变导航栏颜色
$(function(){
	$(document).scroll(function(){
		changeColor()
	})	
})


// 遮罩层
$(function(){
	// 移入
	$('.seven>ul li').mouseenter(function(){
		$(this).children().first().animate({opacity:1,left:0},500)
	})
	// 移出
	$('.seven>ul li').mouseleave(function(){
		$(this).children().first().animate({width:'0px',opacity:0},500,function(){
			$(this).animate({width:'240px',left:'259px'},0)
		})
	})
})
	
// 底部滑动
$(function(){
	var i=0;
	var width=$('.seven>ul li').width();
	setInterval(function(){
		i++;
		$('.seven>ul').animate({left:-i*width+'px'},1000,function(){
			i=0;
			$(this).append($(this).children().first())
			$(this).css('left','0px')
		})
	},4000)
})


// 倒计时
$(function(){
	
	// 目标时间
	var targetTime=new Date('2021/11/11 00:00:00').valueOf()
	

	setInterval(function(){
		// 获取现在时间并转为时间戳
		var nowdate=new Date().valueOf();
		
		// 差值
		var dif=targetTime-nowdate;
		
		// 小时:
		var hour=Math.floor(dif/1000/60/60);
		
		// 分钟
		var minute=Math.floor(dif/1000/60%60);
		
		// 秒
		var second=Math.floor(dif/1000%60)
		
		$('.seven .kill .hour').html(hour);
		$('.seven .kill .minus').html(minute);
		$('.seven .kill .second').html(second);
		
	},1000)
})

// 锯齿运动
$(function(){
	var i=1;
	function run(){
		$('.bac>div').animate({backgroundPosition:-i*100+'px'},1000,function(){
			i+=1;
			run()
		})
	}
	run()

})