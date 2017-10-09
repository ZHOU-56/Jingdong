window.onload = function(){
	// allCheck();
	addCount();
	dele();
}

// function allCheck(){
// 	var flag = true;
// 	var checkTop = document.getElementById('choseAll');
// 	var checkBottom = document.getElementById('all');

// 	var aInput = document.getElementsByTagName('input');
// 	checkTop.onclick = function(){
// 		if(flag == true){
// 			for(let i = 0; i < aInput.length; i++){
// 				if(aInput[i].type == "checkbox"){
// 					aInput[i].checked = true;
// 				}
// 			}
// 			checkTop.checked = true;
// 			flag = false;
// 		}
// 	}
// }

function addCount(){
	var clearNumber = document.getElementById('clearNumber');
	var sonyNumber = document.getElementById('sonyNumber');
	var clearA = clearNumber.getElementsByTagName('a');
	var sonyA = sonyNumber.getElementsByTagName('a');
	var clearInput = clearNumber.getElementsByTagName('input')[0];
	var sonyInput = sonyNumber.getElementsByTagName('input')[0];
	var aSmallCount = document.getElementsByClassName('smallCount');
	var clearCount = aSmallCount[0].getElementsByTagName('div')[0];
	var sonyCount = aSmallCount[1].getElementsByTagName('div')[0];

	// var one = parseInt(clearCount.innerHTML);
	// var two = parseInt(sonyCount.innerHTML);

	//减
	clearA[0].onclick = function(){


		if(clearInput.value == 1){
			clearCount.innerHTML = 19;
		}else{
			clearInput.value -= 1;
			clearCount.innerHTML = (clearInput.value*19);
		}
		finaly();
	};
	sonyA[0].onclick = function(){
		if(sonyInput.value == 1){
			sonyCount.innerHTML = 1999;
		}else{
			sonyInput.value -= 1;
			sonyCount.innerHTML = (sonyInput.value*1999);
		}
		finaly();
	};
	//加
	clearA[1].onclick = function(){
		// alert(clearInput[1].innerHTML);
		clearInput.value = parseInt(clearInput.value)+1;
		clearCount.innerHTML = (parseInt(clearInput.value)*19);
		finaly();
	};
	sonyA[1].onclick = function(){
		sonyInput.value = parseInt(sonyInput.value)+1;
		sonyCount.innerHTML = (parseInt(sonyInput.value)*1999);
		finaly();
	};
}

function finaly(){
	var clearNumber = document.getElementById('clearNumber');
	var sonyNumber = document.getElementById('sonyNumber');
	var clearA = clearNumber.getElementsByTagName('a');
	var sonyA = sonyNumber.getElementsByTagName('a');
	var clearInput = clearNumber.getElementsByTagName('input')[0];
	var sonyInput = sonyNumber.getElementsByTagName('input')[0];
	var aSmallCount = document.getElementsByClassName('smallCount');
	var clearCount = aSmallCount[0].getElementsByTagName('div')[0];
	var sonyCount = aSmallCount[1].getElementsByTagName('div')[0];

	var count = document.getElementById('count').getElementsByTagName('span')[0];
	var choseAdd = document.getElementById('choseAdd').getElementsByTagName('span')[0];



	count.innerHTML = parseInt(clearCount.innerHTML) + parseInt(sonyCount.innerHTML);
	choseAdd.innerHTML = parseInt(clearInput.value) + parseInt(sonyInput.value);
}

function dele(){
	var aDele = document.getElementsByClassName('dele');
	var buy = document.getElementsByClassName('buy')[0]; 
	var clearComputer = document.getElementById('clearComputer');
	var sony = document.getElementById('sony');

	var clearNumber = document.getElementById('clearNumber');
	var sonyNumber = document.getElementById('sonyNumber');
	var clearA = clearNumber.getElementsByTagName('a');
	var sonyA = sonyNumber.getElementsByTagName('a');
	var clearInput = clearNumber.getElementsByTagName('input')[0];
	var sonyInput = sonyNumber.getElementsByTagName('input')[0];
	var aSmallCount = document.getElementsByClassName('smallCount');
	var clearCount = aSmallCount[0].getElementsByTagName('div')[0];
	var sonyCount = aSmallCount[1].getElementsByTagName('div')[0];
	var number = document.getElementById('number');

	var count = document.getElementById('count').getElementsByTagName('span')[0];
	var choseAdd = document.getElementById('choseAdd').getElementsByTagName('span')[0];


	aDele[0].onclick = function(){
		choseAdd.innerHTML = parseInt(choseAdd.innerHTML) - parseInt(clearInput.value);
		count.innerHTML = parseInt(count.innerHTML) - parseInt(clearCount.innerHTML);
		buy.removeChild(clearComputer);
		number.innerHTML = parseInt(number.innerHTML) - 1;
	}
	aDele[1].onclick = function(){
		choseAdd.innerHTML = parseInt(choseAdd.innerHTML) - parseInt(sonyInput.value);
		count.innerHTML = parseInt(count.innerHTML) - parseInt(sonyCount.innerHTML);
		number.innerHTML = parseInt(number.innerHTML) - 1;
		buy.removeChild(sony);
	}
}