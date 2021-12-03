
// 正则和注册、加入缓存
$(function(){
	
	// 1表示通过，不为空，两次密码一致,验证码正确
	var username_flag=0;
	var password_flag=0;
	var secpassword_flag=0;
	var vcode_flag=0;
	
	// true用户名存在
	var exist=false;
	
	// 用户名规则
	var user_pattern=/^\w{4,20}$/;
	
	// 密码规则
	var pas_pattern=/^\w{4,20}$/;
	
	// 用户名验证
	$("input[name='username']").blur(function(){
		
		// 获取缓存
		var dataarr=JSON.parse(window.localStorage.getItem('data'))||[];
		// 缓存中有该用户
		for(var i=0;i<dataarr.length;i++){
			if(dataarr[i].username==$("input[name='username']").val()){
				exist=true;
				break;
			}
		}
		
		
		// 先验证用户名是否为空
		if($(this).val()==''){
			$('.show_mess .username').html('用户名不能为空');
			$('.show_mess .username').css({display:'block',color:'red'});
			username_flag=0;
		}
		// 用户已存在
		else if(exist){
			$('.show_mess .username').html('该用户已存在');
			$('.show_mess .username').css({display:'block',color:'red'});
			username_flag=0;
			// 恢复为false
			exist=false;
		}
		// 用户名输入正确
		else if(user_pattern.test($(this).val())){
			$('.show_mess .username').html('输入正确');
			$('.show_mess .username').css({display:'block',color:'green'});
			username_flag=1;
		}
		
		// 用户名不符合格式
		else{
			$('.show_mess .username').html('用户名长度只能是4-20个字符之间');
			$('.show_mess .username').css({display:'block',color:'red'});
			username_flag=0;
		}
	})
	
	// 密码验证
	$("input[name='password']").blur(function(){
		
		// 先验证密码不为空
		if($(this).val()==''){
			$('.show_mess .psw').html('密码不能为空');
			$('.show_mess .psw').css({display:'block',color:'red'});
			password_flag=0;
		}
		
		// 密码格式正确
		else if(pas_pattern.test($(this).val())){
			$('.show_mess .psw').html('密码格式正确');
			$('.show_mess .psw').css({display:'block',color:'green'});
			password_flag=1;
		}
		
		// 密码不符合格式
		else{
			$('.show_mess .psw').html('密码长度只能是4-20个字符之间');
			$('.show_mess .psw').css({display:'block',color:'red'});
			password_flag=0;
		}
		
		// 先验证确认密码是否为空
		if($("input[name='secpassword']").val()==''){
			$('.show_mess .sec_psw').html('确认密码不能为空');
			$('.show_mess .sec_psw').css({display:'block',color:'red'});
			secpassword_flag=0;
		}
		
		// 确认密码一致
		else if($(this).val()==$("input[name='secpassword']").val()){
			$('.show_mess .sec_psw').html('两次密码一致');
			$('.show_mess .sec_psw').css({display:'block',color:'green'});
			secpassword_flag=1;
		}

		// 确认密码不一致
		else{
			$('.show_mess .sec_psw').html('密码不一致');
			$('.show_mess .sec_psw').css({display:'block',color:'red'});
			secpassword_flag=0;
		}
	})
	
	// 第二次密码验证
	$("input[name='secpassword']").blur(function(){
		
		// 先验证确认密码是否为空
		if($("input[name='secpassword']").val()==''){
			$('.show_mess .sec_psw').html('确认密码不能为空');
			$('.show_mess .sec_psw').css({display:'block',color:'red'});
			secpassword_flag=0;
		}
		// 验证第二次密码是否一致
		else if($(this).val()==$("input[name='password']").val()){
			$('.show_mess .sec_psw').html('两次密码一致');
			$('.show_mess .sec_psw').css({display:'block',color:'green'});
			secpassword_flag=1;
		}
		
		// 确认密码不一致
		else{
			$('.show_mess .sec_psw').html('密码不一致');
			$('.show_mess .sec_psw').css({display:'block',color:'red'});
			secpassword_flag=0;
		}
	})

	// 验证码检验
	$("input[name='checkcode']").blur(function(){
		
		//先验证验证码不为空
		if($(this).val()==''){
			$('.show_mess .v_code').html('验证码不能为空');
			$('.show_mess .v_code').css({display:'block',color:'red'});
			vcode_flag=0;
		}
		
		// 验证码一致
		else if($(this).val()==$('.wrap .form i').text()){
			$('.show_mess .v_code').html('两次验证码一致');
			$('.show_mess .v_code').css({display:'block',color:'green'});
			vcode_flag=1;
		}
		
		// 验证码不一致
		else{
			$('.show_mess .v_code').html('验证码不一致');
			$('.show_mess .v_code').css({display:'block',color:'red'});
			vcode_flag=0;
		}
	})

	// 给表单绑定提交事件
	$('.form').submit(function(){
		// 获取缓存
		var dataarr=JSON.parse(window.localStorage.getItem('data'))||[];
		// 缓存中有该用户
		for(var i=0;i<dataarr.length;i++){
			if(dataarr[i].username==$("input[name='username']").val()){
				exist=true;
				break;
			}
		}
		//不存在该用户或者缓存为空
		if(exist==false||dataarr==[]){
			// 正则表达式全通过
			if(username_flag&password_flag&secpassword_flag&vcode_flag==1){
				// 获取数据
				var in_data={
					username:$("input[name='username']").val(),
					password:$("input[name='password']").val()
				}
				
				// 获取缓存
				var data=JSON.parse(localStorage.getItem('data'))||[]
				
				// 把获取的数据加入缓存
				data.push(in_data)
				
				// 写入缓存
				window.localStorage.setItem('data',JSON.stringify(data))
				
				// 跳转到登录页面
				alert('注册成功,即将进入登录页面')
				return true;
			}else{
				alert('你有信息没输入')
				// 不跳登录页面
				return false;
			}
		
		}
		//存在该用户
		else{
			// 恢复exist的初始值
			exist=false;
			alert('用户名已存在')
			return false;
		}
	})
})
