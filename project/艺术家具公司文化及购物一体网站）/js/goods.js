$(function(){
	$('.selectImg li').click(function(){
		// i++;
		// if(i>=$('.selectImg li').length){
		// 	i=$('.selectImg li').length
		// }
		var i = $(this).index()
		console.log($(this).index())
		var imgSrc = $('.selectImg li').eq(i).find('img').attr('src')
		console.log(imgSrc)
		$('.picture img').attr('src',imgSrc)
		$('.resize img').attr('src',imgSrc)
	})
	
	$('.picture').mouseenter(function(e){
		$('.resize').show()
		$('.picture .mask').show()
		$('.picture .mask').css({
			"left":e.offsetX - $('.picture .mask').width()/2+'px',
			"top":e.offsetY - $('.picture .mask').height()/2+'px'
		})
		
		$('.picture .mask').mousemove(function(e){
			// var e = e || window.event;
			
			var aLeft = e.pageX - $('.picture .mask').width()/2 - $('.details .left').offset().left
			var aTop = e.pageY - $('.picture .mask').height()/2 - $('.details .left').offset().top
			
			if(aLeft<=0){
				aLeft = 0;
			}
			if(aLeft>=$('.picture').width()-$('.mask').width()){
				aLeft=$('.picture').width()-$('.mask').width()
			}
			if(aTop<=0){
				aTop = 0;
			}
			if(aTop>=$('.picture').height()-$('.mask').height()){
				aTop=$('.picture').height()-$('.mask').height()
			}
			$('.picture .mask').css({
				"left":aLeft +'px',
				"top":aTop+'px'
			})
			$('.resize img').css({
				"left":-2*aLeft +'px',
				"top":-2*aTop +'px'
			})
			
		})
		
	})
	$('.picture').mouseleave(function(){
		$('.resize').hide()
		$('.picture .mask').hide()
	})
	$('.tab li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	$('.tab li').mouseleave(function(){
		$(this).removeClass('active')
	})
	
	$('.tab li').click(function(){
		$(this).addClass('activeenter').siblings().removeClass('activeenter')
		$('.detailTab .item').eq($(this).index()).show().siblings().hide()
	})
	
	
	$('.addcomment .yourcomment .btn').click(function(){
		var now = new Date();
		var time = now.getFullYear()+'-'+((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+'-'+(now.getDate()<10?"0":"")+now.getDate();
		console.log(time)
		var addComment = {
			username:'用户1',
			comment:$('textarea').val(),
			comData:time
		}
		var commentList = JSON.parse(window.localStorage.getItem('commentList')) || [];
		commentList.push(addComment)
		window.localStorage.setItem('commentList',JSON.stringify(commentList));
	
		$('textarea').val('')
		location.reload()
		
	})
	
	var commentList = JSON.parse(window.localStorage.getItem('commentList'))
	console.log(commentList)
	for(var i=0;i<commentList.length;i++){
		var $div = $('<div class="commentmsg"></div>')
		var $htcomment = $('<div class="htcomment"></div>')
		for(var key in commentList[i]){
			$('<p class="msg">'+commentList[i][key]+'</p>').appendTo($div);
		}
		$('<img src="../img/goods/userimg.jpg" >').appendTo($htcomment)
		$div.appendTo($htcomment)
		$htcomment.appendTo($('.historycomment'))
	}
})