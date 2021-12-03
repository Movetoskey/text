// 切换我的订单或者个人信息页面
$(function(){
	// 点击个人信息
	$('.gerenxinxi').click(function(){
		
		// 选中个人信息
		$(this).addClass('ccolor');
		$('.wodedingdan').removeClass('ccolor');
		
		// 显示个人信息页面
		$(this).next().css('display','block')
		// 隐藏我的订单页面
		$('.orContent>.right').css('display','none')
	})
	
	// 点击我的订单
	$('.wodedingdan').click(function(){
		// 选中我的订单
		$(this).addClass('ccolor')
		$('.gerenxinxi').removeClass('ccolor')
		
		// 显示我的订单页面
		$('.orContent>.right').css('display','block');
		// 隐藏个人信息页面
		$('.gerenxinxi').next().css('display','none');
	})
})	

// 级联
$(function(){
	
	// 选取对应的区县用的
	var proviceId=0;
	
	// 让每点击第一级的时候,第三级总是第一个
	var cityId=0;
	
	// 添加省
	for(var i=0;i<arr.length;i++){
		var option=new Option(arr[i].name)
		$('.xinxi .xinxi_top .right .provice').append(option)
	}
	
	// 监听点击省
	$('.xinxi .xinxi_top .right .provice').change(function(){
		// 用get装为js对象获取下标,1开头
		proviceId=$('.xinxi .xinxi_top .right .provice').get(0).selectedIndex-1;
		
		var citys=arr[proviceId].city;
		
		// 将市里面的长度设置为0,即为点击了省,市跟着刷新(要转为js对象)
		$('.xinxi .xinxi_top .right .city').get(0).length=0;
		
		//将县/区里面的长度设置为0,即为点击了省,区/县跟着刷新
		$('.xinxi .xinxi_top .right .area').get(0).length=0;
		
		// 加载市
		for(var j=0;j<citys.length;j++){
			var option=new Option(citys[j].name);
			$('.xinxi .xinxi_top .right .city').append(option)
		}
		
		// 点击省的时候加载第一个县
		var areas=citys[cityId].area;
		for(var k=0;k<areas.length;k++){
			var option=new Option(areas[k])
			$('.xinxi .xinxi_top .right .area').append(option)
		}
		// console.log($('.xinxi .xinxi_top .right .area').html())
	})
	
	// 监听点击市
	$('.xinxi .xinxi_top .right .city').change(function(){
		// 获取点击市的下标
		cityId=$('.xinxi .xinxi_top .right .city').get(0).selectedIndex;
		// console.log(cityId)
		
		// 获取区/县
		var areas=arr[proviceId].city[cityId].area;
		
		console.log(areas)
		// 将县/区长度置为0
		$('.xinxi .xinxi_top .right .area').get(0).length=0;
		
		// 添加区/县
		for(var r=0;r<areas.length;r++){
			var option=new Option(areas[r])
			$('.xinxi .xinxi_top .right .area').append(option)
		}
		
		// 每次点省,必须置为0，不然遇到长度长的回来要超过长度
		cityId=0;
	})
	
})