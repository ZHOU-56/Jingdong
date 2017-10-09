//js代码..#header2 分类列表(服装城) ..搜索显示连衣裙..nav 滚动条移动H后nav固定在上方...
$(function(){ 
   //..............#header2 分类列表(服装城)...........
  $('#header2>.liebiao').mouseover(function(){
    $('#header2>.liebiao ul').css('display','block');
    $('#header2>.liebiao span').css('display','block');
  })
  .mouseout(function(){
    $('#header2>.liebiao ul').css('display','none');
    $('#header2>.liebiao span').css('display','none');
  })
    //........搜索显示连衣裙............
	  $('#header2>.sousuo input:text').focus(function(){
		this.value='';
	    })
    $('#header2>.sousuo input:text').blur(function(){
    this.value='连衣裙';
      })

	  //nav 滚动条移动H后nav固定在上方.............
    var H=214;
    //滚动条滚动的距离
    /*var Vwidth=document.documentElement.scrollWidth;//网页宽度
    var Vheight=document.documentElement.scrollHeight;//网页高度*/
    $(window).scroll(function(){
        //网页卷去的高度
         var windH=$(document).scrollTop();
         // if(windH>=Vheight/2){
         // 	alert('sdsds');
         // }
         if(windH>=H){
              $('#nav').css({
                'position':'fixed','top':0,'z-index':888
              })
              $('#banner').css('margin-top','48px');
         }
         else{
            $('#nav').css({
                'position':'static',
              });
            $('#banner').css('margin-top','0px');
         }
    })

    //......................侧边栏js...............
    var He=1500;
    $(window).scroll(function(){
        //网页卷去的高度       
         var windH=$(document).scrollTop();
         var $scrollTop=$(document).scrollTop();
         if(windH>=He){
              $('#right_nav').css({
                'position':'absolute','display':'block','top':$scrollTop+60+'px'
              })    
         }
         else{
            $('#right_nav').css({
               'display':'none'
              });    
         }
         for(let i=0;i<11;i++){
           if(windH>=1850+530*i){
                         $('#right_nav ul li').eq(i)
                         .css({'background':'black'})
                         .stop().siblings().css({'background':'#fff'});
                         $('#right_nav ul li a').eq(i)
                         .css('color','#fff').parent().siblings().find('a').css('color','black');
                         $('#right_nav ul li ').last().css({'background':'black','color':'#fff'});
                         $('#right_nav ul li ').last().find('a').css('color','#fff')
                  }
         }    
    })
    //................侧边栏跳转动画.....................  
  var $root=$('html,body');
  $('#right_nav>ul>li>a').click(function(){
  $root.animate({
    scrollTop:$($.attr(this,'href')).offset().top-80
  },500);
  console.log($($.attr(this,'href')).offset().top-80);
  $(this).css('color','red');
  return false;
});
    //.................图片懒加载.........
    function isInSight(el){
           const bound=el.getBoundingClientRect();
           //获取图片到可视区顶部的距离
           const clientHeight=window.innerHeight;
           return bound.top<=clientHeight-100;
     }
    checkImgs();
    window.onscroll=checkImgs;
     //................加载图片,检查位置..........
     function checkImgs(){
         const imgs=document.querySelectorAll('.my_pohto');
         Array.from(imgs).forEach(el=>{
           if(isInSight(el)){
            loadImg(el);
           }
         })
     }
     //........添加图片src属性............
     function loadImg(el){
      if(!el.src){
        const source=el.dataset.src;
        el.src=source;
       }
     }
    return false;       
})
