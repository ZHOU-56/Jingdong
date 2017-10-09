window.onload=function(){
	regist();	
	userInfor();
	registInfor();
}

/*切换至注册页面*/
function regist(){
	var regist = document.getElementById('regist');
	var registSection = document.getElementById('registSection');
	var loginContent = document.getElementsByClassName('login-content')[0];

	regist.onclick = function(){
		loginContent.style.display = "none";
		registSection.style.display = "block";
	}
}

/*登入表单的验证*/
function userInfor(){
	var formItem = document.getElementsByClassName('form-item');
	var input1 = formItem[0].getElementsByTagName('input')[0];
	var input2 = formItem[1].getElementsByTagName('input')[0];
	var span1 = formItem[0].getElementsByTagName('span')[0];
	var span2 = formItem[1].getElementsByTagName('span')[0];

	var reg = /^1[3|4|5|7|8][0-9]{9}$/;

	input1.onblur = function(){
		if(!reg.test(input1.value)){
			span1.style.display = "block";
		}else{
			span1.style.display = "none";
		}
	}

	input2.onblur = function(){
		if(input2.value == ""){
			span2.style.display = "block";
		}else{
			span2.style.display = "none";
		}
	}
}

function registInfor(){
	var registSection = document.getElementById('registSection');
	var aInput = registSection.getElementsByTagName('input');
	var aSpan = registSection.getElementsByTagName('span');
	aInput[0].onblur = function(){
		if(aInput[0].value==""){
			aSpan[0].innerHTML = "用户名不能为空";
		}else{
			aSpan[0].innerHTML = "";
		}
	}
	aInput[1].onblur = function(){
		if(aInput[1].value==""){
			aSpan[1].innerHTML = "密码不能为空";
		}else{
			aSpan[1].innerHTML = "";
		}
	}
	aInput[2].onblur = function(){
		if(aInput[2].value!=aInput[1].value){
			aSpan[2].innerHTML = "两次密码不一致";
		}else{
			aSpan[2].innerHTML = "";
		}
	}
	aInput[3].onblur = function(){
		if(!/^1[3|4|5|7|8][0-9]{9}$/.test(aInput[3].value)){
			aSpan[3].innerHTML = "请输入正确格式手机号";
		}else{
			aSpan[3].innerHTML = "";
		}
	}
	aInput[4].onblur = function(){
		if(!/CMXY/.test(aInput[4].value)){
			aSpan[4].innerHTML = "验证码错误";
		}else{
			aSpan[4].innerHTML = "";
		}
	}
	aInput[5].onblur = function(){
		if(aInput[5].value==""){
			aSpan[5].innerHTML = "验证码不能为空";
		}else{
			aSpan[5].innerHTML = "";
		}
	}
}