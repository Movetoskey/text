
// 数字导航
$(function(){
	var flag=true;
	var i=0;
	var hei=$('.wrap').first().height();
	
	function run(e){
		// 滑动一次
		if(flag){
			
			// 上滑
			if(e.deltaY>0){
				// 不能上滑了
				if(i>0){
					i--;
					// 让滑动一次
					flag=false;
					$('.wrap').animate({top:-i*hei+'px'},1000,function(){
						flag=true;
						$('.nav li').eq(i).addClass('color').siblings().removeClass('color');
					})
				}
			}
			else{
				if(i<$('.wrap>div').length-1){
					i++;
					flag=false;
					$('.wrap').animate({top:-i*hei+'px'},1000,function(){
						flag=true;
						$('.nav li').eq(i).addClass('color').siblings().removeClass('color');
					})
				}
			}
		}
	}
	
	$(document).mousewheel(function(e){
		run(e)
	})

	// 点击菜单
	$('.nav li').click(function(e){
		i=$(this).index()-1;
		index=i+1;
		$('ul li').eq(index).addClass('active').siblings().removeClass('active');
		run(e)
	})
})

// 渐变轮播(不要放到function里面,为了保证同步)
$(function(){
	setInterval(function(){
		var i=0;
		// 第一张图片隐藏
		$('.jianbian>img').eq(i).animate({opacity:0},1500,function(){
			// 把第一张放到最后
			$('.jianbian').append($(this))
		})
		
		// 第二张图片显示
		i++;
		$('.jianbian>img').eq(i).animate({opacity:1},1500)
	},5000)
})