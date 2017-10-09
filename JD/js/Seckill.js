// 地址部分点击切换地址

window.onload = function(){
	function ChanAdd(){
		var oAddress = document.getElementById('address');
		var oSubaddress = document.getElementById('Subaddress');
		var aLi = oSubaddress.getElementsByTagName('li');
		var oA = oAddress.getElementsByTagName('a')[0];
		var num = 0;

		for(var i=0;i<aLi.length;i++){
			aLi[i].index = i;
			aLi[i].onclick = function(){
				oA.innerHTML =aLi[this.index].innerHTML;
				num = this.index;
				for (var j = 0; j < aLi.length; j++) {
					aLi[j].id= "";
				}
				aLi[num].id= "active";
			}
		}
	}
	ChanAdd();

	function ChanTime(){
		var oTime = document.getElementById('time1');
		var oUl = document.getElementById('ulul');
		var oLeave = document.getElementById('timer');
		var aB = oUl.getElementsByTagName('b');

		var myTime = new Date();
		
		var iHours = myTime.getHours();
		var iMin = myTime.getMinutes();
		var iSec = myTime.getSeconds();

		if(iHours%2==1){
			var iDate = Number(two(iHours))-1;
		}else{
			var iDate = two(iHours);
		}
		oTime.innerHTML = two(iDate)+':00';
		
		for (var i = 0; i < aB.length; i++) {
			aB[i].innerHTML = (i+1)*2+Number(iDate)+':00';
		}
	}
	ChanTime();

	function two(n){return n<10?'0'+n:''+n;}

	function leftTime(){
		var myTime = new Date();
		var iYear = myTime.getFullYear();
		var iMon = myTime.getMonth()+1;
		var iDay = myTime.getDate();
		var iHours = myTime.getHours();
		var iMin = myTime.getMinutes();
		var iSec = myTime.getSeconds();

		if(iHours%2==1){
			var iDate = Number(two(iHours))-1;
		}else{
			var iDate = two(iHours);
		}

		var newT = new Date(iYear,iMon,iDay,Number(two(iDate))+2,00,00);
		var newTime = newT.getTime();
		var nowTime = myTime.getTime();
		var t = Math.floor((newTime-nowTime)/1000);
		var str = two(Math.floor(t%86400/3600))+':'
		+two(Math.floor(t%86400%3600/60))+':'+two(t%60);
		document.getElementById('timer').innerHTML = str;
	}
	setInterval(leftTime,1000);

	window.onscroll=function(){

        var topScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var oNav = document.getElementById("nav");
        var oUl = document.getElementById("ulul");
        var oDiv = document.getElementById("divdiv");
        var oLi = document.getElementById("lili");

        if(topScroll > 130){
          oNav.style.position = 'fixed';
          oNav.style.top = '0';
          oNav.style.zIndex = '9999';
        }else{
        	// alert(topScroll);
        	oNav.style.position = 'static';
        }
        if(topScroll > 190){
        	oUl.style.position = 'fixed';
          	oUl.style.top = '47px';
          	oUl.style.left = '70px';
          	oUl.style. boxShadow = '2px 2px 4px #ccc';
          	oUl.style.zIndex = '9999';
          	oDiv.className = oUl.className.replace('Seckilltime','');
          	oUl.className = oUl.className.replace('time','');
          	oUl.style.width = 1210+'px';
        }else{
          	oUl.style.position = 'absolute';
          	oUl.style.top= '0';
          	oUl.style.left = '60px';
          	oUl.className='time';
          	oDiv.className='Seckilltime';
          	oUl.style.width = 1149.5+'px';
        }

        var oTop=document.getElementsByClassName('aaa')[0];
		var clientHeight = document.documentElement.clientHeight; 
		var timer = null; //定义一个定时器
    	var onOff = true; //定义一个布尔值，用于判断是否到达顶部
 
        if(!onOff){
            clearInterval(timer);
        }
        onOff = false;

        oTop.onclick=function(){
			timer=setInterval(function(){
				 var topScroll = document.documentElement.scrollTop || document.body.scrollTop;
				 //用于设置速度差，产生缓动的效果
	            var speed = Math.floor(-topScroll / 6);

	            document.documentElement.scrollTop = document.body.scrollTop = topScroll + speed;
	            onOff =true;  //用于阻止滚动事件清除定时器
	            if(topScroll == 0){
	                clearInterval(timer);
	            }
			},50);
		}

    }
	
};