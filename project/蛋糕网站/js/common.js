// 是否显示用户名
$(function(){
	if(window.sessionStorage.getItem('yh')!=null){
		$('.qingdenglu').text('');
		$('.zhuche').text('');
		$('.qingdenglu').text('欢迎你'+window.sessionStorage.getItem('yh'));
	}
})


// 吸顶导航
$(function(){
	// 每次刷新回到顶部
	$(document).scrollTop(0);
	
	$(document).scroll(function(){
		xiDing()
	})
})

// 页面重新加载改导航栏颜色
	window.onload = function () { 
		xiDing()
	}
	
// 吸顶导航
function xiDing(){
	// 吸顶
	if($(document).scrollTop()>=$('.headCon_one').height()) {
		$('.headCon_two').addClass('xidingActive')
	}else{
		// 恢复文档流
		$('.headCon_two').removeClass('xidingActive')
	}
}

$(function(){
	$(document).scroll(function(){
		xiDing()
	})
})

// 二级菜单的动画
$(function(){
	// 移入
	$('.cart_button>a').mouseenter(function(){
		$('.headCon_one .cart_button .cart_dropdown').css('display','block')
	})
	$('.headCon_one .cart_button .cart_dropdown').mouseenter(function(){
		$(this).css('display','block')
	})
	
	// 移出
	$('.cart_button>a').mouseleave(function(){
		$('.headCon_one .cart_button .cart_dropdown').css('display','none')
	})
	$('.headCon_one .cart_button .cart_dropdown').mouseleave(function(){
		$(this).css('display','none')
	})
})