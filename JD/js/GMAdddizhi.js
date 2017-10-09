window.onload = function(){
	//............地址部分点击切换地址...................
	var oAddress = document.getElementById('olR');
	var oSubaddress = document.getElementById('dizhi');
	var aLi = oSubaddress.getElementsByTagName('li');
	var oS = oAddress.getElementsByTagName('span')[0];
    var oAs=oSubaddress.getElementsByTagName('a');
	var num = 0;
	function ChanAdd(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].index = i; 
			aLi[i].onclick = function(){
				oS.innerHTML =aLi[this.index].innerHTML;
				num = this.index;
				for (var j = 0; j < aLi.length; j++) {
					aLi[j].id= "";
					oAs[j].style.color='';
				}
				aLi[num].id= "active";
				oAs[num].style.color= "white";
			}
		}
	}
	ChanAdd();  

   //.............轮播图 banner........................
   function wd(id){
         return document.getElementById(id);
   }
   var aLeft=wd('left');
   var oBan=wd('banner');
   var aRig=wd('right');
   var oImg=oBan.getElementsByTagName('img')[0];
   var Imgs=['images/GM/banner/jdbanner1.png','images/GM/banner/jdbanner2.png'
   ,'images/GM/banner/jdbanner3.png','images/GM/banner/jdbanner4.png',
   'images/GM/banner/jdbanner5.png'];
   var oLis=oBan.getElementsByTagName('li');
   var Now=0;
   var timer=null;
   aLeft.onclick=function(){
           Now--; 
           if(Now<0){
            Now=Imgs.length-1;
           }   
           oImg.src=Imgs[Now];
          for(var i=0;i<oLis.length;i++){
             oLis[i].className='';
         }
           oLis[Now].className='active';
   }
   aRig.onclick=function(){  
       Now++; 
           if(Now>Imgs.length-1){
            Now=0;
           }   
           oImg.src=Imgs[Now]; 
           for(var i=0;i<oLis.length;i++){
            oLis[i].className='';
         } 
           oLis[Now].className='active';   
   }
   for(var i=0,len=oLis.length;i<len;i++){
        oLis[i].index=i; 
        var oldlis=oLis[0];
        oLis[i].onmouseover=function(){
          // oldlis.className='';
          // oLis[this.index].className='active';
          // oldlis=oLis[this.index];
        oImg.src=Imgs[this.index];  
        for(var j=0;j<oLis.length;j++){
             oLis[j].className='';
           }
        oLis[this.index].className='active';
        }
   }
   clearInterval(timer);
   function tab(){
    Now++; 
        if(Now>Imgs.length-1){
            Now=0;
           } 
       oImg.src=Imgs[Now]; 
       for(var i=0;i<oLis.length;i++){
        oLis[i].className='';
       }
       oLis[Now].className='active';
   }
  timer=setInterval(tab,1500);
  oBan.onmouseover=function(){ 
      clearInterval(timer);
  }
  oBan.onmouseout=function(){
     clearInterval(timer); 
     timer=setInterval(tab,1500);
  }
};