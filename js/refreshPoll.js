var yPoll=0; //一次提交的亮灯数
var rPoll=0;  //一次提交的灭灯数
var allYPoll=0; //亮灯总票
var allRPoll=0;  //灭灯总票
var diffPoll=0;  //亮灯与灭灯的差值
var $input1; //第一个input
var $input2;
var $input3;
var $input4; //第四个input
var slnumber=$('#showLightNumber'); 
var spnumber=$('#showPutoutNumber');

                        
 function clNumber() {  	//增加亮灯票的函数
     	
         $input1=$('#lightNumber');
         yPoll=parseInt(($input1.val()));
         if(!yPoll) {
         	allYPoll=allYPoll+0
         }
         else {
         	allYPoll=allYPoll+yPoll
         } 
         
         renderLight(allYPoll,allRPoll);
         $input1.val('');

}
function cpNumber() {  //增加灭灯票的函数     	     	
         $input2=$('#putoutNumber');
         rPoll=parseInt(($input2.val()));
         if(!rPoll) {
         	allRPoll=allRPoll+0
         }
         else {
         	allRPoll=allRPoll+rPoll
         }          
         renderLight(allYPoll,allRPoll);
         $input2.val('');
}
function lSum() {  //改变亮灯总票的函数
	     var temp1; 
         $input3=$('#lightSum');
         temp1=parseInt(($input3.val()));
         if(!temp1) {
         	allYPoll=allYPoll+0
         }
         else {
         	allYPoll=temp1;
         }          
         renderLight(allYPoll,allRPoll);     
         $input3.val('');
}
function pSum() {  //改变灭灯总票的函数
	     var temp2;
         $input4=$('#putoutSum');         
         temp2=parseInt(($input4.val()));
         if(!temp2) {
         	allRPoll=allRPoll+0
         }
         else {
         	allRPoll=temp2;
         }          
         renderLight(allYPoll,allRPoll);
         $input4.val('');
}

function renderLight(allYPoll,allRPoll) {  //渲染亮灯票数、灭灯票数、差值票数的函数
	var ipwrap=$('#img-poll-wrap');
    var ispoll=$('#imgshowPoll');
	slnumber.html(allYPoll);
	spnumber.html(allRPoll);
	diffPoll=allYPoll-allRPoll;
	if(diffPoll===0) {
		ispoll.html(0);
		ipwrap.css('color','#515151');
	}
	else if(diffPoll>0) {
		ispoll.html(diffPoll);
		ipwrap.css('color','#FAEE1C');		
	}
	else if(diffPoll<0) {
		ispoll.html(Math.abs(diffPoll));
		ipwrap.css('color','#FF0033');		
	}
}
function restart() { //重新开始按钮的函数
	allYPoll=0; 
    allRPoll=0; 
    renderLight(allYPoll,allRPoll);
}
var robButton=$('#robMarriage');
var closeRob=$('#closeRob');
var robLi=document.getElementsByClassName('robLi');
var robMarry=document.getElementById('rob-Marriage');
//关于抢亲的变量开始

var robBg=$('#robBg');
var b=0;
var timer1=0;
var tipDiv=$('#tipDiv');
//关于抢亲的变量结束
function robFunction() {
	robMusic();
	rob();
}
function rob() { //关于抢亲的函数
	if(diffPoll>0) {
		robButton.hide();
	    closeRob.show();
	    $('.content-center-bottom').hide();
	    $('.lightLeft').hide();
	    $('.content-center-middle').addClass('closeDiv');
	    $('#lightTexta').addClass('closeTextarea');
		robMarry.style.display="block";
		robBg.show();
		for(var i=0;i<100;i++) {
		robLi[i].style.display="none";
	    }
		robLi[b].style.display="block";
		b++;
		timer1=setTimeout(rob,70);
		if(b>99) {
			clearTimeout(timer1);
			b=0;
			robMarry.style.display="none";
			robBg.hide();
		}
    }
	else {
		tipDiv.show();
		b++;
		timer1=setTimeout(rob,1000);
		if(b>1) {
			clearTimeout(timer1);
			b=0;
			tipDiv.hide();
		}
	}
}
function robMusic() {
	if(diffPoll>0) {
		var musicWrap=$('#musicWrap');
		var music;
		musicWrap.empty();
	 	music="<embed src='music/sanshengsanshi.mp3' height='0' width='0' loop='false'></embed>";	 	
	 	musicWrap.append(music);
	}
}
function closeRobMerry() {  //关闭抢亲的函数
	robButton.show();
	closeRob.hide();
	$('.content-center-bottom').show();
	$('.lightLeft').show();
	$('.content-center-middle').removeClass('closeDiv');
	$('#lightTexta').removeClass('closeTextarea');
}

