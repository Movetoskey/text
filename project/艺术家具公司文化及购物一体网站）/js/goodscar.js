$(function(){
	//全选$('.item-1 span input')
	//商品选项$('.item-3 input')
	
	
	//全选
	
	$('.item-1 span input').click(function(){
		
		for(var i=0;i<$('.item-3 input').length;i++){
			$('.item-3 input').eq(i).prop('checked',this.checked);
		}
		$('.foot .a span input').prop("checked",this.checked)
	})
	$('.foot .a span input').click(function(){
		
		for(var i=0;i<$('.item-3 input').length;i++){
			$('.item-3 input').eq(i).prop("checked",this.checked)
		}
		$('.item-1 span input').prop("checked",this.checked)
	})
	
	// 点击单个商品
	for(var i=0;i<$('.item-3 input').length;i++){
		$('.item-3 input').eq(i).click(function(){
			check()
		})
	}
	
	// 检测是否已经全选
	function check(){
		var selectGoods = [];
		// 判断是否需要全选
		for(var j=0;j<$('.item-3 input').length;j++){
			if($('.item-3 input').eq(j).prop("checked")){
				selectGoods.push($('.item-3 input').eq(j))
			}
		}
		selectGoods.length == $('.item-3 input').length 
		? $('.item-1 span input').prop("checked",true) 
		: $('.item-1 span input').prop("checked",false);
		
		selectGoods.length == $('.item-3 input').length
		? $('.foot .a span input').prop("checked",true) 
		: $('.foot .a span input').prop("checked",false);
	}
	
	
	
	//删除
	$('.item-5 div .delete').click(function(){
		$(this).parents('.goodcard').remove()
		check()
	})
	
	
	$('.goodcard .item-4 .addgoods').click(function(){
		var nums =parseInt($(this).parent().find('p').text()) 
		$(this).parent().find('p').text('')
		$(this).parent().find('p').text(nums+1)
		
		//小计
		var nums1 =parseInt($(this).parent().find('p').text()) 
		var price = parseInt($(this).parents('.goodcard').find('.price').text())
		$(this).parents('.goodcard').find('.sum').text('￥'+nums1*price+'元')
		
		
	})
	$('.goodcard .item-4 .reducegoods').click(function(){
		var nums =parseInt($(this).parent().find('p').text()) 
		$(this).parent().find('p').text('')
		$(this).parent().find('p').text(nums-1)
		if(parseInt($(this).parent().find('p').text())<0){
			$(this).parents('.goodcard').remove()
		}
		//小计
		var nums1 =parseInt($(this).parent().find('p').text()) 
		var price = parseInt($(this).parents('.goodcard').find('.price').text())
		$(this).parents('.goodcard').find('.sum').text('￥'+nums1*price+'元')
	})
	
})
