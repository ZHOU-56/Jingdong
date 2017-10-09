// 二级菜单js
window.onload = function(){
   var aNav=document.getElementsByClassName('nav-left');
   var aItem=document.getElementsByClassName('item');
   var aDiv=document.getElementsByClassName('item-hidden');
   var timer=null;
   // menu();
   // function menu(){
    // aNav.onmouseover=function(){
   	for(var i=0;i<aItem.length;i++){
   		aItem[i].index=i;
      clearInterval(timer);
   		aItem[i].onmouseover = function(){
   	for(var j=0;j<aDiv.length;j++){
   			aDiv[j].style.display='none';
	    }	
    		var aA=this.getElementsByTagName('a')[0];
    		aA.style.color='#c0b6c2';
    		this.style.background='#fff';
    		aDiv[this.index].style.display='block';
    	} 
       
   aItem[i].onmouseout=function(){
   	for(var i=0;i<aItem.length;i++){
   			aItem[i].style.background='#312b30';
   				}
   				for(var j=0;j<aDiv.length;j++){
   			aDiv[this.index].style.display='none';
   			var aA=this.getElementsByTagName('a')[0];
   			aA.style.color='#fff';
   				}
   			}	
        
		}


  // banner图部分JS
  $(function () {

      var arrColor=['#F9DC8C','#F6E31B','#3F0A80','#FA3F3A'];
        var aDiv=document.getElementsByClassName('banner')[0]; 
    // 手动控制轮播图
    $(".img li").eq(0).show();//eq(0)=>.first()
      $(".num li").mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        i=index;
        // alert(1);
        $(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        aDiv.style.background=arrColor[i];
      })
      // 自动控制轮播图
      var i=0;
      var timer=setInterval(move,1500);
      // 轮播向右核心函数
      function move(){
        i++;
        // alert(i);
        i%4==0?i=0:i;
        $(".num li").eq(i).addClass('active').siblings().removeClass('active');
        $(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
        aDiv.style.background=arrColor[i];
      }
      // 核心向左运动函数
      function moveLeft(){
        i--;
        // alert(i);
        i<0?i=3:i;
        $(".num li").eq(i).addClass('active').siblings().removeClass('active');
        $(".img li").eq(i).fadeIn(1500).siblings().fadeOut(1500);
        aDiv.style.background=arrColor[i];
      }
      // 对鼠标滑过div时停止定时器判断hover有2种状态
      $(".banner-top").hover(function(){
        clearInterval(timer);//ommouseover
      },function(){
        timer=setInterval(move,1500);
        /*onmouseout
        不能直接用setInterval 会重开定时器，定时器叠加，也不可用var 会出现定义域问题*/
      });

      $(".banner-top .left").click(function(){
        moveLeft();
      })
      $(".banner-top .right").click(function(){
        move();
      })
  })


  // banner2实现JS
      var aTit=document.getElementsByClassName('title')[0];
      var aLi=aTit.getElementsByTagName('li');
      var aBtn=document.getElementsByClassName('btn')[0];
      var aLi1=aBtn.getElementsByTagName('li');

      for(var i=0;i<aLi1.length;i++){
        aLi1[i].index=i;
          aLi1[i].onmouseover=function(){
            for(var i=0;i<aLi1.length;i++){
              aLi1[i].style.background='';
            }
            var m=this.index;
            move(aTit,'left',-242*m);
            this.style.background='#000';

          }

      }

  
    function move(obj,attr,target,fnEnd){
        clearInterval(obj.timer);

       obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=parseFloat(getStyle(obj,attr)*100);
        }else{
            cur=parseInt(getStyle(obj,attr));
        }

        var speed=(target-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(cur==target){
            clearInterval(obj.timer);
            if(fnEnd){
                fnEnd();
            }
        }else {
            if (attr == "opacity") {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (cur+speed) + ')';
            } else {
                obj.style[attr] = cur + speed + "px";
            }

        }
    },50);
}

  function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];}
  
 //全球特卖JS部分
  $(function(){
    $('.top-curr ul li').click(function(){
      $(this).addClass('active-temai').siblings().removeClass('active-temai')

      var index=$(this).index();
      // console.log(index);
      $('.bottom-curr .purchase').eq(index).addClass('selected').siblings().removeClass('selected');
    })
  })

  // 倒计时部分
    var aTime=document.getElementsByClassName('time')[0];
    var iNew=null;
    var iNow=null;
    var iNew=new Date(2017,9,22,20,00,00);
    var t=0;
    var timer=null;
    var str='';
    timer=setInterval(function(){
    var iNow=new Date();
    t=Math.floor((iNew-iNow)/1000);
    if(t>=0){
      str=Math.floor(t%86400/3600)+' : '+Math.floor(t%86400%3600/60)+' : '+t%60;

        aTime.innerHTML=str;
    }else{
      clearInterval(timer);
    }},1000);

    //全球地区馆JS
    $(function(){
    $('.national-bg li:first-child').show()
    $('.national-text li').mouseover(function(){
      $(this).addClass('active-map').siblings().removeClass('active-map');
      var index=$(this).index();
      $('.national-bg li').eq(index).show().siblings().hide();
    })
  })

    // 3C-数码JS
    var aWords=document.getElementsByClassName('words');
    var aPhoto=document.getElementsByClassName('photo');
   
    for(var i=0;i<aPhoto.length;i++){ 
      
      aPhoto[i].onmouseover=function(){
        var aImg=this.getElementsByTagName('img')[0];
      aImg.classList.add('hide1'); 
   }
      aPhoto[i].onmouseout=function(){
        var aImg=this.getElementsByTagName('img')[0];
        aImg.classList.remove('hide1');
      }
    }

    //侧边栏导航条JS
    var menu=$('.menu');
    var nav=$('.go-top>a');
    for(var i=1;i<nav.length-1;i++){
      nav[i].index=i;
      $(nav[i]).click(function(){
        $('html,body').animate({scrollTop:$(menu[this.index-1]).offset().top},400);
      })//scrollTop获取当前垂直位置，offset返回或设置匹配元素相对于文档的偏移量
      $(nav[nav.length-1]).click(function(){  
        $('html,body').animate({scrollTop:0},400);
      })
      $(window).scroll(function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        for(var i=0;i<menu.length;i++){
            if(menu[i].offsetTop-scrollTop>-400&&menu[i].offsetTop-scrollTop<=200){
              nav[i+1].style.backgroundColor='#863177';
            }
            else{
              nav[i+1].style.backgroundColor='';
            }

        }
      })
    }
  }
 
  