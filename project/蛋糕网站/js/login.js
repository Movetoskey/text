// 验证登录信息填写是否正确
$(function(){
	// 用户名验证
	$('.yh').blur(function(){
		//获取缓存
		var data=JSON.parse(localStorage.getItem('data'))
		// 遍历缓存和与输入的信息比较
		
		var yhm=$(this).val();
		console.log(data.length)
		for(var i=0;i<data.length;i++){
			console.log(i)
			console.log(data[i])
			if(data[i].username==yhm){
				
				$('.yhmtishi').css({color:'green',display:'block'});
				$('.yhmtishi').text('用户名存在')
				break;
			}
			else{
				$('.yhmtishi').css({color:'red',display:'block'});
				$('.yhmtishi').text('用户名不存在')
			}
		}
	})
	
	// 密码验证
	$('.mima').blur(function(){
		//获取缓存
		var data=JSON.parse(localStorage.getItem('data'))
		// 遍历缓存和与输入的信息比较
		for(var i=0;i<data.length;i++){
			if($(this).val()==data[i].password){
				$('.mimatishi').css({color:'green',display:'block'});
				$('.mimatishi').text('密码存在')
				break;
			}
			else{
				$('.mimatishi').css({color:'red',display:'block'});
				$('.mimatishi').text('密码不存在')
			}
		}
	})
})


// 切换登录方式
$(function(){
	// 点击普通登录
	$('.pt_login').click(function(){
		$(this).addClass('checked');
		$('.pt_lg').css('display','block');
		
		// 移除快捷登录效果
		$('.tel_login').removeClass('checked')
		$('.tel_lg').css('display','none');
	})
	
	// 点击快捷登录
	$('.tel_login').click(function(){
		$(this).addClass('checked');
		$('.tel_lg').css('display','block');
		
		// 移除普通登录效果
		$('.pt_login').removeClass('checked')
		$('.pt_lg').css('display','none');
	})
})


//登录跳转到主页面
$(function(){
	// 点击登录
	$('.login').click(function(){
		//获取缓存
		var data=JSON.parse(localStorage.getItem('data'))
		// 遍历缓存和与输入的信息比较
		for(var i=0;i<data.length;i++){
			if($('.yh').val()==data[i].username){
				if($('.mima').val()==data[i].password){
					window.sessionStorage.setItem('yh',$('.yh').val())
					// 重定向到主页面
					alert('登录成功，点击确定跳转到主页')
					window.location.href='../index.html';
					break;
				}
				else{
					alert('请检查所填信息');
				}
			}
		}
	})
})

// 密码的显示和隐藏
$(function(){
	$('.show').click(function(){
		$('.mima').attr('type','text');
		$(this).css('display','none')
		$('.hide').css('display','block')
	})
	
	$('.hide').click(function(){
		$('.mima').attr('type','password');
		$(this).css('display','none')
		$('.show').css('display','block')
	})
})