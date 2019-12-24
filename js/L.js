// /*
// * @Author: 刘士博
// * @Date:   2019-12-18 10:30:48
// * @Last Modified by:   刘士博
// * @Last Modified time: 2019-12-21 16:20:20
// */


function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var a = document.getElementById("a");
var as5 = new Array("新年大吉","喜迎新春","百亿红包","限量礼品");
var inputPs = new Array("小丑公仔","超级飞侠","雪人奇缘","全职高手人偶");
var inputP = document.getElementById("inputP");
window.onload = function(){
	var i = 0;
	var j = 0
	setInterval(function(){
		a.innerHTML = as5[i%4];
		i ++;
	}, 1000);
	setInterval(function(){
		inputP.setAttribute("placeholder", inputPs[i%4]);
		j ++;
	}, 2000);
	setInterval(next,3000);
};
var index = 1;
var slider = document.getElementById("slider");
function next(){
	index ++;
	animate(slider, {left: -975*index},function(){
		if (index === 4) {
		    slider.style.left = "-975px";
		    index = 1;
	    }
	});
}