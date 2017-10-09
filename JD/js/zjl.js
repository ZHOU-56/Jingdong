//计数
var photoNum = 0;
var nextPhoto = 1;
//轮播图的定时器
var clearPhotoActive = null;
//下划线的定时器
var clearlineFlow=null;

window.onload = function(){
	photoActive();
	stopPhotoActive();
	chosePhoto();
	foodsActive();
	timeOver();
	lineFlow();
	middleImgActive("myKitchen");
	middleImgActive("myPhone");
	smallImgActive("myKitchen");
	smallImgActive("myPhone");
}
//轮播图的实现
function photoActive(){
	var middleShow = document.getElementById('middleShow');
	var as = middleShow.getElementsByTagName('a');
	var scroll = document.getElementById('scroll');
	var aI = scroll.getElementsByTagName('i');
	clearPhotoActive = setInterval(function(){
		if(photoNum >= as.length){
			photoNum = 0;
		}else if(nextPhoto >= as.length){
			nextPhoto = 0;
		}
		as[photoNum].style.opacity = 0;
		as[nextPhoto].style.opacity = 1;
		aI[photoNum].className = "";
		aI[nextPhoto].className = "chose";
		photoNum++;
		nextPhoto++;
	},3000);
}

//鼠标移入轮播图内时，停止轮播，用一个事件委托
function stopPhotoActive(){
	var middleShow = document.getElementById('middleShow');
	middleShow.onmouseover = function(){
		clearInterval(clearPhotoActive);
	}
	middleShow.onmouseout = function(){
		photoActive();
	}
}

//点击下方小圆圈改变图片
function chosePhoto(){
	var middleShow = document.getElementById('middleShow');
	var as = middleShow.getElementsByTagName('a');
	var scroll = document.getElementById('scroll');
	var aI = scroll.getElementsByTagName('i');
	for(var i = 0;i < aI.length;i++){
		aI[i].index = i;
		aI[i].onclick = function(){
			clearInterval(clearPhotoActive);
			aI[photoNum].className = "";
			as[photoNum].style.opacity = 0;
			this.className = "chose";
			as[this.index].style.opacity = 1;
			photoNum = this.index;
			nextPhoto = this.index + 1;
		}
	}
}

//右侧新闻促销公告栏的切换
function lineFlow(){
	var lineDown=document.getElementById('lineDown');
	var newspaperTitle=document.getElementsByClassName('newspaperTitle')[0];
	var lineDown=document.getElementById('lineDown');
	var as = newspaperTitle.getElementsByTagName('a');
	var news=document.getElementsByClassName('news');
	var x=-2;
	as[0].onmouseover=function(){
		news[0].style.display="block";
		news[1].style.display="none";
		clearInterval(clearlineFlow);
		if(x!=-2){
			clearlineFlow=setInterval(function(){
				x-=2;
				lineDown.style.left=x+"px";
				if(x==-2){
					clearInterval(clearlineFlow);
				}
			},1);
		}
	}
	as[1].onmouseover=function(){
		news[0].style.display="none";
		news[1].style.display="block";
		clearInterval(clearlineFlow);
		if(x!=56){
			clearlineFlow=setInterval(function(){
				x+=2;
				lineDown.style.left=x+"px";
				if(x==56){
					clearInterval(clearlineFlow);
				}
			},1);
		}
	}
}

//下面商品动画的添加 对应css里面给的动画名称
function foodsActive(){
	var foodsAcitve=document.getElementById('foodsAcitve');
	var lis=foodsAcitve.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		(function(j){
			lis[j].onmouseover=function(ev){
				var ev = ev || event;
				this.getElementsByTagName('img')[0].className="foodsFlow";
				foodsNumber=j;
				if(ev.stopPropagation){
					ev.stopPropagation();
				}else{
					window.ev.cancelBubble=true;
				}
			}
			lis[j].onmouseout=function(ev){
				var ev = ev || event;
				lis[foodsNumber].getElementsByTagName('img')[0].className="foodsDown";
				if(ev.stopPropagation){
					ev.stopPropagation();
				}else{
					window.ev.cancelBubble=true;
				}
			}
		})(i);
	}
}

/*倒计时部分*/
function timeOver(){
	var curtime=new Date();
	var endtime=new Date("2017/9/22,18:0:0");
	var lefttime=parseInt((endtime.getTime()-curtime.getTime())/1000);
	var hour=parseInt(lefttime/(60*60));
	var min=parseInt(lefttime/60%60);
	var sec=parseInt(lefttime%60);
	var showTime=document.getElementById('showTime');
	if(hour/10<1){
		hour="0"+hour;
	}
	if(min/10<1){
		min="0"+min;
	}
	if(sec/10<1){
		sec="0"+sec;
	}
	showTime.getElementsByTagName('span')[0].innerHTML=hour;
	showTime.getElementsByTagName('span')[1].innerHTML=min;
	showTime.getElementsByTagName('span')[2].innerHTML=sec;
	setTimeout(timeOver,1000);
}

//鼠标滑入middleImg时，图片滑动
function middleImgActive(id){
	var obj = document.getElementById(id);
	var middImg = obj.getElementsByClassName('middImg')[0];
	var nav = obj.getElementsByTagName('nav')[0];
	var aImg = nav.getElementsByTagName('img');
	middImg.onmouseover = function(ev){
		var ev = ev || event;
		middImg.className ="middImg middImgActive";
		ev.stopPropagation();
	}

	middImg.onmouseout = function(ev){
		var ev = ev || event;
		middImg.className ="middImg middImgEnd";
		ev.stopPropagation();
	}

	for(let i = 0; i < aImg.length; i++){
		aImg[i].onmouseover = function(ev){
			var ev = ev || event;
			this.className = "middImg middImgActive";
			ev.stopPropagation();
		};
		aImg[i].onmouseout = function(ev){
			var ev = ev || event;
			this.className = "middImg middImgEnd";
			ev.stopPropagation();
		}
	}
}

//鼠标滑入smallImg
function smallImgActive(id){
	var obj = document.getElementById(id);
	var homeRight = obj.getElementsByClassName('homeRight')[0];
	var as = homeRight.getElementsByTagName('a');
	var aImg = homeRight.getElementsByTagName('img');
	for(var i = 0; i < as.length; i++){
		as[i].index = i;
		as[i].onmouseover = function(ev){
			var ev = ev || event;
			aImg[this.index].className = "smallImg foodsFlow";
			ev.stopPropagation();
		};
		as[i].onmouseout = function(ev){
			var ev = ev || event;
			aImg[this.index].className = "smallImg foodsDown";
			ev.stopPropagation();
		}
	}
}