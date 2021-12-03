//切换小图样式
$(function(){
	$('.show .left>div').mouseenter(function(){
		$(this).addClass('checked').siblings().removeClass('checked')
		
		// 改变被放大图片和旁边放大图路径
		$('.photo>img').attr('src','../images/shopdetails/details'+$(this).index()+'.jpg')
		$('.resize .bigPic>img').attr('src','../images/shopdetails/details'+$(this).index()+'.jpg')
	})
	
	// 放大镜
	$('.mid .photo').mouseenter(function(e){
		// 显示遮罩层和旁边的放大图
		$('.mid .block').css('display','block');
		$('.resize .bigPic').css('display','block');
		
		// 设置遮罩层进入时初始位置
		$('.mid .block').css({'left':e.pageX-$('.mid .block').width()/2-$('.mid .photo').offset().left+'px','top':e.pageY-$('.mid .block').height()/2-$('.mid .photo').offset().top+'px'})
		
		// 遮罩层移动
		$('.mid .block').mousemove(function(ev){
			// 设置遮罩层移动时位置(只能有pageX)
			var bl_letf=ev.pageX-$('.mid .block').width()/2-$('.mid .photo').offset().left;
			var bl_top=ev.pageY-$('.mid .block').height()/2-$('.mid .photo').offset().top;
			
			// 设置边界值
			if(bl_letf<0){
				bl_letf=0;
			}
			if(bl_top<0){
				bl_top=0;
			}
			if(bl_letf>$('.mid .photo').width()-$('.mid .block').width()){
				bl_letf=$('.mid .photo').width()-$('.mid .block').width();
			}
			if(bl_top>$('.mid .photo').height()-$('.mid .block').height()){
				bl_top=$('.mid .photo').height()-$('.mid .block').height()
			}
			
			// 设置遮罩层位置
			 $('.mid .block').css({'left':bl_letf+'px','top':bl_top+'px'})
			 
			 // 放大倍数
			 var beishu=$('.mid .resize img').width()/$('.mid .photo img').width();
			 
			 // 设置大图的位置   -倍数*(遮罩层的left+遮罩层宽度/2)+遮罩层宽度
			 var bg_left=-1*beishu*(bl_letf+$('.mid .block').width()/2)+$('.mid .block').width();
			 var bg_right=-1*beishu*(bl_top+$('.mid .block').height()/2)+$('.mid .block').height();
			 
			 $('.contentCon .show .bigPic img').css({'left':bg_left+'px','top':bg_right+'px'})
		})
	})
	
		// 离开遮罩层
		$('.mid .block').mouseleave(function(){
			$(this).css('display','none');
			$('.resize .bigPic').css('display','none');
		})
})