

window.onload=function(){
      // 头部地区选择
      var oAddress = document.getElementById('address');
      var oSubaddress = document.getElementById('Subaddress');
      var aLi = oSubaddress.getElementsByTagName('li');
      var oA = oAddress.getElementsByTagName('a')[0];
      var num = 0;

      function ChanAdd(){
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



     //延时菜单
     var oD=document.getElementById('left-content');
     var oDl=oD.getElementsByTagName('dl');
     var oProduct=document.getElementById('product');
     var oWrap=oProduct.getElementsByClassName('wrap');
     var clock=null;

     //倒计时变量
     var oDay=document.getElementById('day');
     var oHour=document.getElementById('hour');
     var oMinute=document.getElementById('minute');
     var oSecond=document.getElementById('second');
     var timer2=null;
     
     //右侧回到顶部
     function backTop(){
        var huadong=document.getElementById('huadong');
        var huadongLi=huadong.getElementsByTagName('li');
        var toTop=document.getElementById('toTop');
        var toTopLlist=document.getElementById('to-top-list');
        var timer=null;
        var flag=true;
        var viewHeight=document.documentElement.clientHeight||document.body.clientHeight;
        var marketShow=document.getElementById('market-show');
        var teseBody=document.getElementById('tese-body');
        var marketShowTop=marketShow.offsetHeight;
        var teseBodyTop=teseBody.offsetHeight;
        window.onscroll=function(){
             var scrollY=document.body.scrollTop||document.documentElement.scrollTop;
             var mstoTop=getTop(marketShow);
             var tbtoTop=getTop(teseBody);
             if(scrollY>=viewHeight*0.7){
                   toTopLlist.style.opacity=1;
             }
             if(scrollY<viewHeight*0.3){
                   toTopLlist.style.opacity=0;
             }
             if((mstoTop+marketShowTop)<(scrollY+viewHeight)){
                  for(var i=0;i<2;i++){
                    huadongLi[i].className='';
                  }
                  huadongLi[0].className='choose';
             }else{
                 huadongLi[0].className='';
             }
             if((tbtoTop+teseBodyTop)<(scrollY+viewHeight)){
                  for(var i=0;i<2;i++){
                    huadongLi[i].className='';
                  }
                  huadongLi[1].className='choose';
             }else{
                 huadongLi[1].className='';
             }
             if(!flag){
                  clearInterval(timer);  
             }
             flag=false;
        }
        function getTop(obj) {//获取到页面的高度
            var iTop = 0;
            while(obj) {
              iTop += obj.offsetTop;
              obj = obj.offsetParent;
            }
            return iTop;
        }
        toTop.onclick=function(){
            timer=setInterval(function(){
                var oTo=document.body.scrollTop||document.documentElement.scrollTop;
                var speed=Math.floor((-oTo/5));
                oTo+=speed;
                flag=true; 
                if(oTo==0){
                    clearInterval(timer);
                }
                document.body.scrollTop=document.documentElement.scrollTop=oTo;
            },50);
        }
        //改变li背景
     }
     backTop();
     //倒计时
     countTime();
     timer2=setInterval(countTime,1000);
     function countTime(){
         var date=new Date();
         var then=new Date(2017,8,22,23,18,59);
         var distance=Math.floor((then-date)/1000);
         var d=Math.floor(distance/86400);
         var h=Math.floor(distance%86400/3600);
         var m=Math.floor(distance%86400%3600/60);
         var s=distance%60;
        
         if(distance>0){
            oDay.innerText=to(d);
             oHour.innerText=to(h);
             oMinute.innerText=to(m);
             oSecond.innerText=to(s);
         }else{
             clearInterval(timer2);
              oDay.innerText=0;
             oHour.inerText=0;
             oMinute.innerText=0;
             oSecond.innerText=0;
         }
         
     }
      function to(num){
            return num>=10?num:'0'+num;
        }
      //早市倒计时部分
      var timer3=null;
      var timer4=null;
      var timer5=null;
      var day=new Date();
      var H=day.getHours();
      var titleUl=document.getElementById('title-ul');
      var oL=titleUl.getElementsByTagName('li');
      if(H>=10 && H<17){
          checkNow(0);
          timer3=setInterval(function(){
             countZaoshi(16,59,59,timer3);
          },1000);
      }else if(H>=17 && H<22){
         checkNow(1);
         timer4=setInterval(function(){
             countZaoshi(21,59,59,timer4);
          },1000);
      }else if(H>=22 && H<24){
          checkNow(2);
          timer5=setInterval(function(){
             countZaoshi(23,59,59,timer5);
          },1000);
      }else{
         
      }
      function checkNow(checkIndex){
        for(var i=0;i<oL.length;i++){
          oL[i].className="";
        }
        oL[checkIndex].className="now";
      }
      function countZaoshi(hour,minute,seconds,timer){
        var bH=document.getElementById('bh');
        var bM=document.getElementById('bm');
        var bS=document.getElementById('bs');
        var day=new Date();
        var day2=new Date();
        day2.setHours(hour);
        day2.setMinutes(minute);
        day2.setSeconds(seconds);
        var dis=Math.floor((day2-day)/1000);
        var dDis=Math.floor(dis/86400);
        var hDis=Math.floor(dis%86400/3600);
        var mDis=Math.floor(dis%86400%3600/60);
        var sDis=dis%60;
        if(dis>0){
         bH.innerText=to(hDis);
         bM.innerText=to(mDis);
         bS.innerText=to(sDis);
        }else{
         clearInterval(timer);
         bH.inerText=0;
         bM.innerText=0;
         bS.innerText=0;
        }
      }
      
      //轮播图变量
     var oPic=document.getElementById('pic');
     var oLunbo=document.getElementById('lunbo');
     var oImg=oPic.getElementsByTagName('a');
     var oPrev=document.getElementById('left-span');
     var oNext=document.getElementById('right-span');
     var oControl=document.getElementById('control-img');
     var oLis=oControl.getElementsByTagName('li');
     var iNow=0;
     var timer=null;
     var n=0;
     var interTime=2000;
     var animated=false;
     oNext.onclick=function(){
        n++;
        n%=oLis.length;
        if(!animated){
          animate(-800);
        }
        showLi();
     }
     oPrev.onclick=function(){
        n--;
        if(n<0){
          n=oLis.length-1;
        }
        if(!animated){
          animate(800);
        }
        showLi();
     }
     function animate(offset){
        animated=true;
        var newLeft=parseInt(oPic.style.left)+offset;
        var time=300;
        var inter=10;
        var speed=offset/(time/inter);//每次位移量
        function go(){
           if((speed<0 && parseInt(oPic.style.left)>newLeft)||(speed>0 && parseInt(oPic.style.left)<newLeft)){
              oPic.style.left=parseInt(oPic.style.left)+speed+'px';
              setTimeout(go,inter);
           }else{
               animated=false;
               oPic.style.left=newLeft+'px';
              if(newLeft>-800){
                oPic.style.left=-3200+'px';   
              }
              if(newLeft<-3200){
                oPic.style.left=-800+'px';
              }
           }
        }
        go();
     }
     function showLi(){
      for(var i=0;i<oLis.length;i++){
        oLis[i].className='';
      }
       oLis[n].className="active";
     }
     
     for(var i=0;i<oLis.length;i++){
       oLis[i].index=i;
       oLis[i].onclick=function(){
         if(this.className=='active'){
           return;
         }
         var os=(this.index-n)*(-800);
         if(!animated){
             animate(os);
         }
         n=this.index;
         showLi();
       }
     }
     function autoPlay(){
        timer=setInterval(function(){
          oNext.onclick();
        },interTime);
     }
     autoPlay();
     function stop(){
        clearInterval(timer);
     }
     oLunbo.onmouseover=stop;
     oLunbo.onmouseout=autoPlay;
    

     //二级延时菜单
     function menu(){
     for(var i=0;i<oDl.length;i++){
        oDl[i].index=i;
        oWrap[i].index=i;
        oDl[i].onmouseover=show;
        oDl[i].onmouseout=hide; 
        oWrap[i].onmouseover=show;
        oWrap[i].onmouseout=hide;
      } 
     }
    function show(){
       clearTimeout(clock);
       for(var i=0;i<oWrap.length;i++){
          oWrap[i].style.zIndex=i+1;
          oWrap[i].style.display='none';
          oDl[i].className='';
       }
       oWrap[this.index].style.zIndex=10;
       oWrap[this.index].style.display='block';
       oDl[this.index].className='hover';
    }
    function hide(){
         that=this;
         clock=setTimeout(function(){
         oWrap[that.index].style.zIndex=that.index+1;
         oWrap[that.index].style.display='none';
         oDl[that.index].className='';
          },100);   
    }
    menu();
}  

