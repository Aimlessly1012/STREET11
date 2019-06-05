function move(ele,data,callback){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var onoff = true;
		for(var attr in data){
//			透明度的当前值的获取
			if(attr === "opacity"){
				var iNow = getStyle(ele,attr) * 100;
			}else{
				var iNow = parseInt(getStyle(ele,attr));
			}
			
			var speed = (data[attr] - iNow)/8;
			speed = speed<0 ? Math.floor(speed) : Math.ceil(speed)
			if(data[attr] != iNow){
				onoff = false;
			}
//			透明度的设置
			if(attr === "opacity"){
				ele.style[attr] = (iNow + speed)/100;
			}else{
				ele.style[attr] = iNow + speed + "px";
			}
		}
		if(onoff){
			clearInterval(ele.timer);
//			没有传回调函数时，不执行，在回调函数中，可以写任何代码，包括但不限于再次执行move
			callback && callback();
		}
	},30)
}

function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele,false)[attr];
	}else{
		return ele.currentStyle[attr]
	}
}