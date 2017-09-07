var sPoll=0; //一次提交的糖数
var dPoll=0;  //一次提交的鸭数
var allSPoll=0; //总糖数
var allDPoll=0;  //总鸭数
var diffPoll=0;  //总糖数与总鸭数的差值
var $input1=$('#suggerInput'); //关于糖的input
var $input2=$('#duckInput'); //关于鸭的input

var $input3=$('#addNumber');  //计算器用的input
var number="" , //算式第一个数
    number2,  //算式第二个数
    log,        // 记录运算符
    result="";  //算式结果

var suggerSum=$('#showSuggerSum'); 
var duckSum=$('#showDuckSum');
var tipDiv=$('#tipDiv');

var bladeLi=document.getElementsByClassName('bladeLi');
var blRule=document.getElementById('blade-Rule');
var a=0;
var timer1=0;

var bellLi=document.getElementsByClassName('bellLi');
var tenBell=document.getElementById('tenThousand-Bell');
var b=0;
var timer2=0;

var devilLi=document.getElementsByClassName('devilLi');
var devArrive=document.getElementById('devil-Arrive');
var c=0;
var timer3=0;

var haoticLi=document.getElementsByClassName('haoticLi');
var haoPower=document.getElementById('haotic-Power');
var d=0;
var timer4=0;

var suggerTitles=['喜欢你','棒棒糖']; //conHead的背景色
var duckTitles=['么么哒','去污皂']; //textarea的背景色
var title = 0;
var imgArr=[];
var likekissImg=$('#likekissImg');
var suggerImg=$('#suggerImg');
imgArr.push(likekissImg);
imgArr.push(suggerImg);

var suggerTitle=$('#suggerTitle');
var duckTitle=$('#duckTitle');

var e=0;
var timer5=0;

var minJ=100;
var maxJ=500;
var minZ=500;
var maxZ=1000;
var minM=1000;
var maxM=1500;
var minH=1500;
var maxH=999999;

var minInputJ=$('#minInputJ');
var maxInputJ=$('#maxInputJ');
var minInputZ=$('#minInputZ');
var maxInputZ=$('#maxInputZ');
var minInputM=$('#minInputM');
var maxInputM=$('#maxInputM');
var minInputH=$('#minInputH');
var maxInputH=$('#maxInputH');

var openScreen=$('#openScreen');
var closeScreen=$('#closeScreen');
var myId=$('#myId');
var iemyId=$('#iemyId');
var showSuggerWrap=$('#showSuggerWrap');
var showDuckWrap=$('#showDuckWrap');
var showDiffWrap=$('#showDiffWrap');
var showlikeKiss=$('#showlikeKiss');
var textArea1=$('#textArea1');
var textArea2=$('#textArea2');

var startDuang=$('#startDuang');
var endDuang=$('#endDuang');
var logDuang=0; //记录小特效状态

var s1=0;
var s1timer=0;
var s5=0;
var s5timer=0;
var s10=0;
var s10timer=0;
var s50=0;
var s50timer=0;
var d1=0;
var d1timer=0;
var d5=0;
var d5timer=0;
var d10=0;
var d10timer=0;
var d50=0;
var d50timer=0;
var su1Li=document.getElementsByClassName('su1Li');
var sugger1=document.getElementById('show-sugger1');
var su5Li=document.getElementsByClassName('su5Li');
var sugger5=document.getElementById('show-sugger5');
var su10Li=document.getElementsByClassName('su10Li');
var sugger10=document.getElementById('show-sugger10');
var su50Li=document.getElementsByClassName('su50Li');
var sugger50=document.getElementById('show-sugger50');
var du1Li=document.getElementsByClassName('du1Li');
var duck1=document.getElementById('show-duck1');
var du5Li=document.getElementsByClassName('du5Li');
var duck5=document.getElementById('show-duck5');
var du10Li=document.getElementsByClassName('du10Li');
var duck10=document.getElementById('show-duck10');
var du50Li=document.getElementsByClassName('du50Li');
var duck50=document.getElementById('show-duck50');

 function addsuggerNumber() {  	//增加糖数的函数 
 	     var temp=$input1.val();
	     if(temp==""){
		 tipDiv.html('值不能为空~');
		 showtipDiv();		
	     }
	     else {
		     sPoll=parseInt(temp);
	         if(!sPoll || sPoll<0) {
	         	tipDiv.html('请输入数值！');
			    showtipDiv();
	         }
	         else {
	         	allSPoll=allSPoll+sPoll;
	         	chooseDuang(sPoll);
	         }          
	         renderLight(allSPoll,allDPoll);
	         $input1.val('');
	     }
         
}
function addduckNumber() {  //增加鸭数的函数  
	     var temp=$input2.val();
	     if(temp=="") {
		 tipDiv.html('值不能为空~');
		 showtipDiv();		
	     }
	     else {
	     	dPoll=parseInt(temp);
	        if(!dPoll || dPoll<0) {
	            tipDiv.html('请输入数值！');
			    showtipDiv();
	        }
	        else {
	         	allDPoll=allDPoll+dPoll;
	         	chooseDuang(dPoll);
	        }          
	        renderLight(allSPoll,allDPoll);
	        $input2.val('');
	     }
         
}
function changesuggerSum() {  //改变总糖数的函数
	     var temp=$input1.val();
	     var temp1; 
	     if(temp=="") {
			 tipDiv.html('值不能为空~');
			 showtipDiv();		
	     }
	     else {
	     	 temp1=parseInt(temp);
	         if(!temp1 || temp1<0) {
	         	tipDiv.html('请输入数值！');
			    showtipDiv();
	         }
	         else {
	         	allSPoll=temp1;
	         	chooseDuang(temp1);
	         }          
	         renderLight(allSPoll,allDPoll);     
	         $input1.val('');
	     }	              
}
function changeduckSum() {  //改变总鸭数的函数	             
	     var temp=$input2.val();
	     var temp2;
	     if(temp=="") {
			 tipDiv.html('值不能为空~');
			 showtipDiv();	
	     }
	     else {
	     	 temp2=parseInt(temp);
	     	 if(!temp2 || temp2<0) {
	         	 tipDiv.html('请输入数值！');
			     showtipDiv();
	         }
	         else {
	         	allDPoll=temp2;
	         	chooseDuang(temp2);
	         }          
	         renderLight(allSPoll,allDPoll);
	         $input2.val('');
		 }        
}

function renderLight(allSPoll,allDPoll) {  //渲染总糖数、总糖数、差值票数的函数
	var diffTitle=$('#diffTitle');
    var showDiff=$('#showDiffSum');
    var suggerTitle=$('#suggerTitle');
	suggerSum.html(allSPoll);
	duckSum.html(allDPoll);
	diffPoll=allSPoll-allDPoll;
	if(diffPoll===0) {
		if(allSPoll==0&&allDPoll==0) {
			diffTitle.html('差距：');
		    showDiff.html(diffPoll);
		}
		else {
			diffTitle.html('怎么可能？');
		    showDiff.html('居然平局！');
		}
	}
	else if(diffPoll>0) {
		diffTitle.html(duckTitle.html()+'差：');		
		showDiff.html(diffPoll);		
	}
	else if(diffPoll<0) {
		diffTitle.html(suggerTitle.html()+'差：');
		showDiff.html(Math.abs(diffPoll));		
	}
}
function restart() { //重新开始按钮的函数
	allSPoll=0; 
    allDPoll=0; 
    renderLight(allSPoll,allDPoll);
    tipDiv.html('因数据为空，系统为保持本场数据！');
    showtipDiv();
}


//圣剑裁决开始

function bladeFunction() {
	bladeMusic();
	bladePlay();
}
function bladePlay() {
	blRule.style.display="block";		
	for(var i=0;i<83;i++) {
		bladeLi[i].style.display="none";
	}
	bladeLi[a].style.display="block";
	a++;
	timer1=setTimeout(bladePlay,80);
	if(a>82) {
		clearTimeout(timer1);
		a=0;
		blRule.style.display="none";
		
	}
}
function bladeMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/shenjiancaijue.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);
	 
}
//圣剑裁决结束

//万灭心钟开始

function bellFunction() {
	bellMusic();
	bellPlay();
}
function bellPlay() {
	tenBell.style.display="block";		
	for(var i=0;i<74;i++) {
		bellLi[i].style.display="none";
	}
	bellLi[b].style.display="block";
	b++;
	timer2=setTimeout(bellPlay,80);
	if(b>73) {
		clearTimeout(timer2);
		b=0;
		tenBell.style.display="none";
		
	}
}
function bellMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/wanmiexinzhong.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
//万灭心钟结束

//神魔降临开始

function devilFunction() {
	devilMusic();
	devilPlay();
}
function devilPlay() {
	devArrive.style.display="block";		
	for(var i=0;i<87;i++) {
		devilLi[i].style.display="none";
	}
	devilLi[c].style.display="block";
	c++;
	timer3=setTimeout(devilPlay,80);
	if(c>86) {
		clearTimeout(timer3);
		c=0;
		devArrive.style.display="none";
		
	}
}
function devilMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/shenmojianglin.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
//神魔降临结束

//洪荒之力开始

function haoFunction() {
	haoMusic();
	haoPlay();
}
function haoPlay() {
	haoPower.style.display="block";		
	for(var i=0;i<91;i++) {
		haoticLi[i].style.display="none";
	}
	haoticLi[d].style.display="block";
	d++;
	timer4=setTimeout(haoPlay,80);
	if(d>90) {
		clearTimeout(timer4);
		d=0;
		haoPower.style.display="none";
		
	}
}
function haoMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/honghuangzhili.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
//洪荒之力结束
function womanMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/nvshengguongji.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function manMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/nanshenggongji.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
//sugger1
function sugger1Function() {
	womanMusic();
	sugger1Play();
}
function sugger1Play() {
	sugger1.style.display="block";		
	for(var i=0;i<45;i++) {
		su1Li[i].style.display="none";
	}
	su1Li[s1].style.display="block";
	s1++;
	s1timer=setTimeout(sugger1Play,30);
	if(s1>44) {
		clearTimeout(s1timer);
		s1=0;
		sugger1.style.display="none";
		
	}
}

//sugger1

//sugger5
function sugger5Function() {
	manMusic();
	sugger5Play();
}
function sugger5Play() {
	sugger5.style.display="block";		
	for(var i=0;i<51;i++) {
		su5Li[i].style.display="none";
	}
	su5Li[s5].style.display="block";
	s5++;
	s5timer=setTimeout(sugger5Play,30);
	if(s5>50) {
		clearTimeout(s5timer);
		s5=0;
		sugger5.style.display="none";
		
	}
}

//sugger5
//sugger10
function sugger10Function() {
	womanMusic();
	sugger10Play();
}
function sugger10Play() {
	sugger10.style.display="block";		
	for(var i=0;i<71;i++) {
		su10Li[i].style.display="none";
	}
	su10Li[s10].style.display="block";
	s10++;
	s10timer=setTimeout(sugger10Play,20);
	if(s10>70) {
		clearTimeout(s10timer);
		s10=0;
		sugger10.style.display="none";
		
	}
}


//sugger10
//sugger50
function sugger50Function() {
	manMusic();
	sugger50Play();
}
function sugger50Play() {
	sugger50.style.display="block";		
	for(var i=0;i<71;i++) {
		su50Li[i].style.display="none";
	}
	su50Li[s50].style.display="block";
	s50++;
	s50timer=setTimeout(sugger50Play,20);
	if(s50 > 70) {
		clearTimeout(s50timer);
		s50=0;
		sugger50.style.display="none";
		
	}
}

//sugger50
//duck1
function duck1Function() {
	manMusic();
	duck1Play();
}
function duck1Play() {
	duck1.style.display="block";		
	for(var i=0;i<71;i++) {
		du1Li[i].style.display="none";
	}
	du1Li[d1].style.display="block";
	d1++;
	d1timer=setTimeout(duck1Play,20);
	if(d1>70) {
		clearTimeout(d1timer);
		d1=0;
		duck1.style.display="none";
		
	}
}

//duck1
//duck5
function duck5Function() {
	manMusic();
	duck5Play();
}
function duck5Play() {
	duck5.style.display="block";		
	for(var i=0;i<72;i++) {
		du5Li[i].style.display="none";
	}
	du5Li[d5].style.display="block";
	d5++;
	d5timer=setTimeout(duck5Play,20);
	if(d5>71) {
		clearTimeout(d5timer);
		d5=0;
		duck5.style.display="none";
		
	}
}

//duck5
//duck10
function duck10Function() {
	manMusic();
	duck10Play();
}
function duck10Play() {
	duck10.style.display="block";		
	for(var i=0;i<71;i++) {
		du10Li[i].style.display="none";
	}
	du10Li[d10].style.display="block";
	d10++;
	d10timer=setTimeout(duck10Play,20);
	if(d10>70) {
		clearTimeout(d10timer);
		d10=0;
		duck10.style.display="none";
		
	}
}

//duck10
//duck50
function duck50Function() {
	manMusic();
	duck50Play();
}
function duck50Play() {
	duck50.style.display="block";		
	for(var i=0;i<71;i++) {
		du50Li[i].style.display="none";
	}
	du50Li[d50].style.display="block";
	d50++;
	d50timer=setTimeout(duck50Play,20);
	if(d50>70) {
		clearTimeout(d50timer);
		d50=0;
		duck50.style.display="none";
		
	}
}

//duck50



function changeTeamTitle() {
	var diffTitle=$('#diffTitle');
    var showDiff=$('#showDiffSum');
	title=title+1;
	if (title>=2) title = 0;
	for(var i=0;i<imgArr.length;i++) {
		imgArr[i].hide();
	}
	imgArr[title].show();
	$('#suggerTitle').html(suggerTitles[title]);
	$('#duckTitle').html(duckTitles[title]);
	if(diffPoll===0) {
		if(allSPoll==0&&allDPoll==0) {
			diffTitle.html('差距：');
		    showDiff.html(diffPoll);
		}
		else {
			diffTitle.html('怎么可能？');
		    showDiff.html('居然平局！');
		}
	}
	else if(diffPoll>0) {		
		diffTitle.html(duckTitle.html()+'差：');		
		showDiff.html(diffPoll);		
	}
	else if(diffPoll<0) {		
		diffTitle.html(suggerTitle.html()+'差：');
	    showDiff.html(Math.abs(diffPoll));		
	}
}

function changeSuggerTitle() {
	var temp=$input1.val();
	if(temp==""){
		tipDiv.html('值不能为空~');
		showtipDiv();		
	}
	else {
		suggerTitle.html(temp);
		$input1.val('');
	}
}
function changeDuckTitle() {
	var temp=$input2.val();
	if(temp==""){
		tipDiv.html('值不能为空~');
		showtipDiv();		
	}
	else {
		duckTitle.html(temp);
		$input2.val('');
	}
}

function showtipDiv() {
	tipDiv.show();
	e++;
	timer5=setTimeout(showtipDiv,1000);
	if(e>1) {
		clearTimeout(timer5);
		e=0;
		tipDiv.hide();
	}
}
function chooseDuang(data) {
	var number=data;
	if(number>=minJ&&number<maxJ) {
 		bladeFunction();
 	}
 	else if(number>=minZ&&number<maxZ) {
 		bellFunction();
 	}
 	else if(number>=minM&&number<maxM) {
 		devilFunction();
 	}
 	else if(number>=minH&&number<maxH) {
 		haoFunction();
 	}
}
function sugger1Click() {
	allSPoll=allSPoll+1;
	if(logDuang==1) {
		sugger1Function();
	}
	chooseDuang(1);
	renderLight(allSPoll,allDPoll);    
}
function sugger5Click() {
	allSPoll=allSPoll+5;
	if(logDuang==1) {
		sugger5Function();
	}
	chooseDuang(5);
	renderLight(allSPoll,allDPoll);    
}
function sugger10Click() {
	allSPoll=allSPoll+10;
	if(logDuang==1) {
		sugger10Function();
	}
	chooseDuang(10);
	renderLight(allSPoll,allDPoll);    
}
function sugger50Click() {
	allSPoll=allSPoll+50;
	if(logDuang==1) {
		sugger50Function();
	}
	chooseDuang(50);
	renderLight(allSPoll,allDPoll);    
}
function sugger100Click() {
	allSPoll=allSPoll+100;
	chooseDuang(100);
	renderLight(allSPoll,allDPoll);    
}
function sugger500Click() {
	allSPoll=allSPoll+500;
	chooseDuang(500);
	renderLight(allSPoll,allDPoll);    
}
function sugger1000Click() {
	allSPoll=allSPoll+1000;
	chooseDuang(1000);
	renderLight(allSPoll,allDPoll);    
}
function duck1Click() {
	allDPoll=allDPoll+1;
	if(logDuang==1) {
		duck1Function();
	}
	chooseDuang(1);
	renderLight(allSPoll,allDPoll);
}
function duck5Click() {
	allDPoll=allDPoll+5;
	if(logDuang==1) {
		duck5Function();
	}
	chooseDuang(5);
	renderLight(allSPoll,allDPoll);
}
function duck10Click() {
	allDPoll=allDPoll+10;
	if(logDuang==1) {
		duck10Function();
	}
	chooseDuang(10);
	renderLight(allSPoll,allDPoll);
}
function duck50Click() {
	allDPoll=allDPoll+50;
	if(logDuang==1) {
		duck50Function();
	}
	chooseDuang(50);
	renderLight(allSPoll,allDPoll);
}
function duck100Click() {
	allDPoll=allDPoll+100;
	chooseDuang(100);
	renderLight(allSPoll,allDPoll);
}
function duck500Click() {
	allDPoll=allDPoll+500;
	chooseDuang(500);
	renderLight(allSPoll,allDPoll);
}
function duck1000Click() {
	allDPoll=allDPoll+1000;
	chooseDuang(1000);
	renderLight(allSPoll,allDPoll);
}




function input(n) {
	 result="";
	 number=number+n;
	 $input3.val(number);
}

function myclear() {
	 result="";
	 number="";
	 number2="";
	 $input3.val(number);
}

function plus() {
	log=1;
    sendNumebr();
}
function minus() {
	log=2;
    sendNumebr();
}
function times() {
	log=3;
    sendNumebr();    
}
function divide() {
	log=4;
    sendNumebr();
}
function sendNumebr() {
	if(result!="") {
    	number=result;
	    result="";
	}
	number2=number;
	number="" ;
}

function equal() {
	if(log==1) {
		result=parseFloat(number)+parseFloat(number2);
		$input3.val(result);
		number="";
		}
	if(log==2) {
		result=parseFloat(number)*(-1)+parseFloat(number2);
		 $input3.val(result);
		 number="";
    }
	if(log==3) {
		result=parseFloat(number)*parseFloat(number2);
		 $input3.val(result);
		 number="";
	}
	if(log==4) {
		result=parseFloat(number2)*(1/parseFloat(number));
		$input3.val(result);
		number="";
	}
}

function addCalcSugger() {
	var temp=$input3.val();
	     if(temp==""){
		 tipDiv.html('值不能为空~');
		 showtipDiv();		
	     }
	     else {
		     sPoll=parseInt(temp);
	         if(!sPoll || sPoll<0) {
	         	tipDiv.html('请输入数值！');
			    showtipDiv();
	         }
	         else {
	         	allSPoll=allSPoll+sPoll;
	         	chooseDuang(sPoll);
	         }          
	         renderLight(allSPoll,allDPoll);
	         $input3.val('');
	         result="";
	         number="";
	         number2="";
	     }
}
function addCalcDuck() {
	var temp=$input3.val();
	     if(temp=="") {
		 tipDiv.html('值不能为空~');
		 showtipDiv();		
	     }
	     else {
	     	dPoll=parseInt(temp);
	        if(!dPoll || dPoll<0) {
	            tipDiv.html('请输入数值！');
			    showtipDiv();
	        }
	        else {
	         	allDPoll=allDPoll+dPoll;
	         	chooseDuang(dPoll);
	        }          
	        renderLight(allSPoll,allDPoll);
	        $input3.val('');
	        result="";
	        number="";
	        number2="";
	     }        
}

  
minInputJ.blur(function(){
  	var temp=minInputJ.val();
  	var temp1;
    if(temp=="") {
        minInputJ.val(minJ);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		minInputJ.val(minJ);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		minJ=temp1;
    		minInputJ.val(minJ);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  maxInputJ.blur(function(){
  	var temp=maxInputJ.val();
  	var temp1;
    if(temp=="") {
        maxInputJ.val(maxJ);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		maxInputJ.val(maxJ);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		maxJ=temp1;
    		maxInputJ.val(maxJ);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
  minInputZ.blur(function(){
  	var temp=minInputZ.val();
  	var temp1;
    if(temp=="") {
        minInputZ.val(minZ);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		minInputZ.val(minZ);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		minZ=temp1;
    		minInputZ.val(minZ);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
  maxInputZ.blur(function(){
  	var temp=maxInputZ.val();
  	var temp1;
    if(temp=="") {
        maxInputZ.val(maxZ);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		maxInputZ.val(maxZ);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		maxZ=temp1;
    		maxInputZ.val(maxZ);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
minInputM.blur(function(){
  	var temp=minInputM.val();
  	var temp1;
    if(temp=="") {
        minInputM.val(minM);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		minInputM.val(minM);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		minM=temp1;
    		minInputM.val(minM);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
maxInputM.blur(function(){
  	var temp=maxInputM.val();
  	var temp1;
    if(temp=="") {
        maxInputM.val(maxM);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		maxInputM.val(maxM);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		maxM=temp1;
    		maxInputM.val(maxM);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
minInputH.blur(function(){
  	var temp=minInputH.val();
  	var temp1;
    if(temp=="") {
        minInputH.val(minH);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		minInputH.val(minH);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		minH=temp1;
    		minInputH.val(minH);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
maxInputH.blur(function(){
  	var temp=maxInputH.val();
  	var temp1;
    if(temp=="") {
        maxInputH.val(maxH);
        tipDiv.html('触发分数不能为空');
		showtipDiv();
    }
    else {
    	temp1=parseInt(temp);
    	if(!temp1 || temp1<0) {
    		maxInputH.val(maxH);
    		tipDiv.html('请输入数值！');
			showtipDiv();
    	}
    	else {
    		maxH=temp1;
    		maxInputH.val(maxH);
    		tipDiv.html('已更改触发分数！');
		    showtipDiv();
    	}
    }
  });
  
function fullScreen() {
	if(allSPoll>=allDPoll) {
		tipDiv.html('主播分未低于主持分');
		showtipDiv();
	}
	else {
		closeScreen.show();
		openScreen.hide();
		showSuggerWrap.hide();
		showDuckWrap.hide();
		showDiffWrap.hide();
		showlikeKiss.hide();
		textArea1.hide();
		textArea2.hide();
		myId.attr('width','773');
		myId.attr('height','580');
		iemyId.attr('width','773');
		iemyId.attr('height','580');
		swfobject.embedSWF("swf/jscam2.swf", "myId","773","580","9.0.0", "expressInstall.swf", flashvars, params, attributes);
		
	}
}
function closeFullScreen() {
	closeScreen.hide();
	openScreen.show();
	showSuggerWrap.show();
	showDuckWrap.show();
	showDiffWrap.show();
	showlikeKiss.show();
	textArea1.show();
	textArea2.show();
    myId.attr('width','485');
	myId.attr('height','363');
	iemyId.attr('width','485');
	iemyId.attr('height','363');
	swfobject.embedSWF("swf/jscam2.swf", "myId","485","363","9.0.0", "expressInstall.swf", flashvars, params, attributes);
	
}

function openDuang() {
	startDuang.hide();
	endDuang.show();
	tipDiv.html('小特效已开启！');
    showtipDiv();
    logDuang=1;
}
function closeDuang() {
	startDuang.show();
	endDuang.hide();
	tipDiv.html('小特效已关闭！');
    showtipDiv();
    logDuang=0;
}
