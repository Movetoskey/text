var province = document.querySelector('#province');
	var city = document.querySelector('#city');
	var area = document.querySelector('#area');
	
	var provinceId = 0;
	var cityId = 0;
	
	window.onload = function(){
		console.log(arr)
		for(var i=0;i<arr.length;i++){
			var option = new Option(arr[i].name,i)
			province.appendChild(option)
		}
	}
	
	province.onchange = function(){
		var citys = arr[this.value].city
		provinceId = this.value;
		// 将之前的信息清空
		city.length = 0;
		area.length = 0;
		for(var i=0;i<citys.length;i++){
			var option = new Option(citys[i].name,i)
			city.appendChild(option)
		}
		
		var areas = citys[cityId].area;
		for(var i=0;i<areas.length;i++){
			var option = new Option(areas[i],i)
			area.appendChild(option)
		}
	}
	
	city.onchange = function(){
		cityId = this.value;
		var areas = arr[provinceId].city[cityId].area
		// console.log(areas)
		area.length = 0;
		for(var i=0;i<areas.length;i++){
			var option = new Option(areas[i],i)
			area.appendChild(option)
		}
		cityId = 0;
}