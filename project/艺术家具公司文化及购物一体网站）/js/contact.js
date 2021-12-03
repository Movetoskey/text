$(function(){
	$('.right .phone').blur(function(){
		phone()
		console.log($('.right .phone').val())
		console.log(1111111)
	})
	function phone(){
		var pattern = /^1[3-9]\d{9}$/;
		if(!pattern.test($('.right .phone').val())){
			$('.right .phone').next('p').show()
			return false
		}else{
			$('.right .phone').next('p').hide()
			return true
		}
	}
	
	$('.right .email').blur(function(){
		email()
		console.log($('.right .email').val())
		console.log(1111111)
	})
	function email(){
		var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if(!pattern.test($('.right .email').val())){
			$('.right .email').next('p').show()
			return false
		}else{
			$('.right .email').next('p').hide()
			return true
		}
	}
	
	$('.right .btn').click(function(){
		if(phone()&&email()&&$('.username')!=null){
			alert('success')
			$('.username').val('')
			$('.right .email').val('')
			$('.right .phone').val('')
			$('.right textarea').val('')
		}
	})
	
})