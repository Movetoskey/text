// 点击＋号
$(function(){
	$('.orderList .listNum .addNum').click(function(){
		// 值是字符串
		if(typeof ($(this).prev().val())=='string'){
			 //定义数量这个局部变量
			 var num=1;
			 // 转为数值
			 num=Number($(this).prev().val());
			 num++;
			 
			 // num不能超过10
			 if(1<num&&num<=10){
				 $(this).prev().val(num)
				 
				 // 把总价赋值给一个变量
				 var sum=$(this).parent().next().children().children().text();
				 // 转型
				 var listsum=Number(sum)
				 
				 // 获取单价
				 var danjia=$(this).parent().prev().children().eq(1).text();
				 // 转型
				 var listdanjia=Number(danjia)
				 
				 // 计算当前行总价
				 listsum=(num*listdanjia).toFixed(2);
				 // 设置当前行总价
				 $(this).parent().next().children().children().text(listsum)
				 
				 // 计算总数量和总价格
				 allPrice();
				 allNum();
			 }
			 else{
				 alert('不能超过10')
			 }
		}
	})

	
})

// 单机-号
$(function(){
	// 点击-号
	$('.orderList .listNum .reNum').click(function(){
		// 值是字符串
		if(typeof ($(this).next().val())=='string'){
			 //定义数量这个局部变量
			 var num=1;
			 // 转为数值
			 num=Number($(this).next().val());
			 num--;
			 
			 // num不能小于1
			 if(num>=1){
				 $(this).next().val(num)
				 
				 // 把总价赋值给一个变量
				 var sum=$(this).parent().next().children().children().text();
				 // 转型
				 var listsum=Number(sum)
				 
				 // 获取单价
				 var danjia=$(this).parent().prev().children().eq(1).text();
				 // 转型
				 var listdanjia=Number(danjia)
				 
				 // 计算当前行总价
				 listsum=(num*listdanjia).toFixed(2);
				 // 设置当前行总价
				 $(this).parent().next().children().children().text(listsum)
				 
				 // 计算总数量和总价格
				 allPrice();
				 allNum();
			 }
			 else{
				 alert('数量不能小于1')
			 }
		}
	})			
})

// 求总价格
function allPrice(){
	var sum=0;
	// 遍历所有的复选框
	$('.orderList .select>input').each(function(){
		// 判断复选框是否被选中
		if($(this).prop('checked')==true){
			// 获取当前行价格
			var thissum=$(this).parent().parent().children('.listSum').children().children().text();
			//求总价格
			sum+=Number(thissum);
		}
		
		// 设置总价格
		$('.total_text').html(sum.toFixed(2))
	})
}


// 求总数量
function allNum(){
	var num=0;
	// 遍历所有的复选框
	$('.orderList .select>input').each(function(){
		// 判断复选框是否被选中
		if($(this).prop('checked')==true){
			// 获取当前行数量
			var thisnum=$(this).parent().parent().children('.listNum').children('input').val();
			// 总数量
			num+=Number(thisnum);
		}
		// 设置总数量
		$('.piece_num').text(num)
	})
}


//全选功能模块
$(function(){
	// 1.点击全选
	$('.list_chk>input').click(function(){
		// 把全选按钮的值赋值给其他复选框
		$('.orderList .select>input').prop('checked',$(this).prop('checked'));
		
		allPrice();
		allNum();
	})
	
	// 2.单击单个复选框实现全选
	$('.orderList .select>input').click(function(){
		// 选中复选框个数==复选框个数，就全选
		if($('.orderList .select>input:checked').length==$('.orderList .select>input').length){
			$('.list_chk>input').prop('checked',true);
			
		}//不等就false
		else{
			$('.list_chk>input').prop('checked',false);
		}
	})
})

// 点击单个复选框
$(function(){
	$('.orderList .select>input').click(function(){
		// 被选中的话
		if($(this).prop('checked')==true){
			// 计算总价
			allPrice();
			allNum();
		}else{
			// 计算总价
			allPrice();
			allNum();
		}
	})
})

// 点击移除
$(function(){
	$('.listOp>a').click(function(){
		// 删除当前行
		$(this).parent().parent().remove();
		// 重新计算总价格和数量
		allNum();
		allPrice();
		
		// 商品删除完了就取消全选
		$('.orderList .select>input').length-=1;
		if($('.orderList .select>input').length==0){
			$('.list_chk>input').prop('checked',false);
		}
	})
})