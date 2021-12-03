// 轮播图
$(function(){
	var left=$('.headCon>.headCon_three>ul>li>img').width()
	var i=0;
	var dot_i=0
	setInterval(function(){
		i++;
		$('.headCon_three>ul').animate({left:-left*i+'px'},300,function(){
			i=0;
			$('.headCon_three>ul').append($('.headCon_three>ul li').first())
			$('.headCon_three>ul').css('left','0px')
		})
		
		// 点动起来
		dot_i++;
		if(dot_i>$('.headCon>ol>li').length-1){
			dot_i=0;
		}
		$('.headCon>ol>li').eq(dot_i).addClass('dot_active').siblings().removeClass('dot_active');
	},3000)
})