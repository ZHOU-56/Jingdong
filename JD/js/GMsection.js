$(function(){
	//................品牌特卖...............
	$('.content>ul li:first').mouseover(function(){
		$('#cimg1').attr('src','images/GM/section/tubiao2.png');
	})
	$('.content>ul li:first').mouseout(function(){
		$('#cimg1').attr('src','images/GM/section/tubiao1.png');
	})
	$('.content>ul li').eq(1).mouseover(function(){
		$('#cimg2').attr('src','images/GM/section/tubiao4.png');
	})
	$('.content>ul li').eq(1).mouseout(function(){
		$('#cimg2').attr('src','images/GM/section/tubiao3.png');
	})

	//......................sec2 图标...................

})