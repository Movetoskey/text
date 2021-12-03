export default {
	//设置缓存
	set(key,value){
		window.localStorage.setItem(key,JSON.stringify(value))
	},
	//读取缓存
	get(){
		return JSON.parse(window.localStorage.getItem('CartList')) || []
	}
	
}