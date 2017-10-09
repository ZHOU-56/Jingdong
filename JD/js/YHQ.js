$(function(){
	// 下拉菜单
	$ul=$('#one .fl');
	$ul.mouseenter(function(){
		$ul.find('.down1').show();
		$ul.css('background','#fff');
		$ul.find('i').css('transform','rotate(180deg)');
	})
	$ul.mouseleave(function(){
		$ul.find('.down1').hide();
		$ul.css('background','#F1F1F1');
		$ul.find('i').css('transform','rotate(0deg)');
	})
	// 变换
	$li=$('#one .down1 li ');
	$span=$('.fl li span');
	$li.click(function(){
		$li.removeClass('active1');
		$(this).addClass('active1');
		var str=$(this).html();
		$span.html(str);
	})
	// quan
	$quan=$('#two .container .quan');
	$quan_dd=$('.quan_dd');
	$quan.mouseenter(function(){
		$quan.css('background','#fff').addClass('shadow');
		$quan_dd.show().addClass('shadow');
		$('.null').show();
	})
	$quan.mouseleave(function(){
		$quan_dd.hide();
		$quan.css('background','#F9F9F9').removeClass('shadow');
		$('.null').hide();
	})
	// 固定导航栏
	var H=$('#one').height()+$('#two').height()+$('#three').height()+$('.banner').height();
       
        $(window).scroll(function(){
            // 网页卷去的高度:DOM==>document.body.scrollTop
            // console.log(document.body.scrollTop)
            var scrollTop=$(document).scrollTop();
            // console.log(scrollTop)
            // 如果卷去的高度大于头部高度
            if (scrollTop>=H) {
                $('#nav').css({
                    'position':'fixed',
                    'top':0,
                    'zIndex':'999',
                    'left':'68px'
                });
                $('#four').css('margin-top','20px');
            }else{
                $('#nav').css({
                    'position':'relative',
                    'top':'-20px',
                    'left':'0'
                });
                $('#four').css('margin-top','0');
            }
            
        })
        // 显示登录界面
        function showMask(){  
            $("#mask").css("height",$(document).height());  
            $("#mask").css("width",$(document).width());  
            $("#mask").show();  
        }  
        //让指定的DIV始终显示在屏幕正中间  
        function letDivCenter(divName){   
            var top = ($(window).height() - $(divName).height())/2;   
            var left = ($(window).width() - $(divName).width())/2;   
            var scrollTop = $(document).scrollTop();   
            var scrollLeft = $(document).scrollLeft();   
            $(divName).css( { position : 'absolute', 'top' : top + scrollTop, left : left + scrollLeft } ).slideDown(400);  
        }  
        function showAll(divName){  
            showMask();
            letDivCenter(divName);  
        }  
        $('#quan_btn').click(function(){
        	showAll('#model');
        })
        $('#model i').click(function(){
        	$('#mask').hide();
        	$('#model').hide();
        })
        // 回到顶部
      /*  $("#totop").click(function () {
            var speed=400;//滑动的速度
            $('body').animate({ scrollTop: 0 }, speed);
                $('#totop i').css('transform','rotate(180deg)');
                $('#totop span').html('Down');
        return false;
        });*/
        var a=1;

        $("#totop").click(function () {
            var speed=400;//滑动的速度
            if(a){

           a=0;
            $('body').animate({ scrollTop: 0 }, speed);
                $('#totop i').css('transform','rotate(180deg)');
                $('#totop span').html('Down');
                return false; }else{

             a=1;
            $('body').animate({ scrollTop: $('footer').offset().top}, speed);
                $('#totop i').css('transform','rotate(0deg)');
                $('#totop span').html('Top');
        return false;   }
        });
        // 刷新页面
           // $("#a_1").click(function () {
           //      $("#four").empty();

           //      $("#four").load("1.html .container");
                
           //   });
        var html=$('#four').html();
        $('#nav li').click(function(){
            $(this).addClass('active2').siblings().removeClass('active2');
             $("#four").empty();
                if($(this).index()==0){
                    $("#four").html(html);
                }
                else{
                    $("#four").load("./1.html .container");
                }
        })
})