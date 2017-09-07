var suprumLi=document.getElementsByClassName('suprumLi');
var suprumPro=document.getElementById('suprum-Protect');
var a=0;
var timer1=0;

var silverLi=document.getElementsByClassName('silverLi');
var silverPro=document.getElementById('silver-Protect');
var b=0;
var timer2=0;

var goldLi=document.getElementsByClassName('goldLi');
var goldPro=document.getElementById('gold-Protect');
var c=0;
var timer3=0;

var carLi=document.getElementsByClassName('carLi');
var carInto=document.getElementById('show-Car');
var d=0;
var timer4=0;

var protectLi=document.getElementsByClassName('protectLi');
var proInto=document.getElementById('show-Protect');
var e=0;
var timer5=0;

var parkLi=document.getElementsByClassName('parkLi');
var parkCar=document.getElementById('park-Car');
var f=0;
var timer6=0;

var g=0;
var timer7=0;
var tipDiv=$('#tipDiv');

var h=0;
var timer8=0;
var welcomeDiv=$('#welcomeDiv');
var shadowDiv=$('#shadowDiv');
var wLeft=190;
var sLeft=191;

var j=0;
var timer9=0;

var img1=document.getElementsByClassName('img-1');
var img2=document.getElementsByClassName('img-2');
var img3=document.getElementsByClassName('img-3');
var img4=document.getElementsByClassName('img-4');
var logCar;

var proset1={
	id:"proset1",
	name:"",
	medal:""
};
var proset2={
	id:"proset2",
    name:"",
	medal:""
};
var proset3={
	id:"proset3",
	name:"",
	medal:""
};
var proset4={
	id:"proset4",
	name:"",
	medal:""
};
var proset5={
	id:"proset5",
	name:"",
	medal:""
};
var proset6={
	id:"proset6",
	name:"",
	medal:""
};
var proset7={
	id:"proset7",
	name:"",
	medal:""
};
var proset8={
	id:"proset8",
	name:"",
	medal:""
};
var proset9={
	id:"proset9",
	name:"",
	medal:""
};
var proset10={
	id:"proset10",
	name:"",
	medal:""
};
var proset11={
	id:"proset11",
	name:"",
	medal:""
};
var proset12={
	id:"proset12",
	name:"",
	medal:""
};
var proset13={
	id:"proset13",
	name:"",
	medal:""
};
var proset14={
	id:"proset14",
	name:"",
	medal:""
};


var carset1={
	id:"carset1",
	name:""
};
var carset2={
	id:"carset2",
    name:""
};
var carset3={
	id:"carset3",
	name:""
};
var carset4={
	id:"carset4",
	name:""
};

function saveCarSet() {
	var carsetId=$('#carsetIds').val();
	var carsetName=$('#carsetInput').val();
	if($('#carsetInput').val()=="") {
		tipDiv.html('目标值不能为空！');
		showtipDiv();
	}
	else {		
		if(carsetId==carset1.id) {
				carset1.name=carsetName;
				renderCarset1();
			}
			else if(carsetId==carset2.id) {
				carset2.name=carsetName;
				renderCarset2();
			}
			else if(carsetId==carset3.id) {
				carset3.name=carsetName;
				renderCarset3();
			}
			else if(carsetId==carset4.id) {
				carset4.name=carsetName;
				renderCarset4();
			}		
	}
}
function renderCarset1() {
	if(carset1.name=="") {
		$('#carset1-name').html('车位待租');
		$('#carimg-wrap1 img').css('opacity','0.5');
	}
	else {
		$('#carset1-name').html(carset1.name);
		$("#carsetIds option[value='carset1']").remove();
		$('#carsetInput').val('');
		$('#carimg-wrap1 img').css('opacity','0.8');
		tipDiv.html('添加成功！');
		showtipDiv();
		parkFunction();
	}
}
function renderCarset2() {
	if(carset2.name=="") {
		$('#carset2-name').html('车位待租');
		$('#carimg-wrap2 img').css('opacity','0.5');
	}
	else {
		$('#carset2-name').html(carset2.name);
		$("#carsetIds option[value='carset2']").remove();
		$('#carsetInput').val('');
		$('#carimg-wrap2 img').css('opacity','0.8');
		tipDiv.html('添加成功！');
		showtipDiv();
		parkFunction();
	}
}
function renderCarset3() {
	if(carset3.name=="") {
		$('#carset3-name').html('车位待租');
		$('#carimg-wrap3 img').css('opacity','0.5');
	}
	else {
		$('#carset3-name').html(carset3.name);
		$("#carsetIds option[value='carset3']").remove();
		$('#carsetInput').val('');
		$('#carimg-wrap3 img').css('opacity','0.8');
		tipDiv.html('添加成功！');
		showtipDiv();
		parkFunction();
	}
}
function renderCarset4() {
	if(carset4.name=="") {
		$('#carset4-name').html('车位待租');
		$('#carimg-wrap4 img').css('opacity','0.5');
	}
	else {
		$('#carset4-name').html(carset4.name);
		$("#carsetIds option[value='carset4']").remove();
		$('#carsetInput').val('');
		$('#carimg-wrap4 img').css('opacity','0.8');
		tipDiv.html('添加成功！');
		showtipDiv();
		parkFunction();
	}
}

function showtipDiv() {
	tipDiv.show();
	g++;
	timer7=setTimeout(showtipDiv,1000);
	if(g>1) {
		clearTimeout(timer7);
		g=0;
		tipDiv.hide();
	}
}

function suprumFunction() {
	suprumMusic();
	suprumPlay();
}
function suprumPlay() {
	suprumPro.style.display="block";		
	for(var i=0;i<72;i++) {
		suprumLi[i].style.display="none";
	}
	suprumLi[a].style.display="block";
	a++;
	timer1=setTimeout(suprumPlay,80);
	if(a>71) {
		clearTimeout(timer1);
		a=0;
		suprumPro.style.display="none";
		
	}
}
function suprumMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/shouhu_open.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function silverFunction() {
	silverMusic();
	silverPlay();
}
function silverPlay() {
	silverPro.style.display="block";		
	for(var i=0;i<111;i++) {
		silverLi[i].style.display="none";
	}
	silverLi[b].style.display="block";
	b++;
	timer2=setTimeout(silverPlay,80);
	if(b>110) {
		clearTimeout(timer2);
		b=0;
		silverPro.style.display="none";
		
	}
}
function silverMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/shouhu_open2.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function goldFunction() {
	goldMusic();
	goldPlay();
}
function goldPlay() {
	goldPro.style.display="block";		
	for(var i=0;i<110;i++) {
		goldLi[i].style.display="none";
	}
	goldLi[c].style.display="block";
	c++;
	timer3=setTimeout(goldPlay,80);
	if(c>109) {
		clearTimeout(timer3);
		c=0;
		goldPro.style.display="none";
		
	}
}
function goldMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/shouhu_open3.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}

function carFunction() {
	carMusic();
	carPlay();
}
function carPlay() {
	carInto.style.display="block";		
	for(var i=0;i<90;i++) {
		carLi[i].style.display="none";
	}
	carLi[d].style.display="block";
	d++;
	timer4=setTimeout(carPlay,80);
	if(d>89) {
		clearTimeout(timer4);
		d=0;
		carInto.style.display="none";
		
	}
}
function carMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/che_rc.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function proFunction() {
	proMusic();
	proPlay();
}
function proPlay() {
	proInto.style.display="block";		
	for(var i=0;i<77;i++) {
		protectLi[i].style.display="none";
	}
	protectLi[e].style.display="block";
	e++;
	timer5=setTimeout(proPlay,80);
	if(e>76) {
		clearTimeout(timer5);
		e=0;
		proInto.style.display="none";
		
	}
}
function proMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/ruchang.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function parkFunction() {
	parkMusic();
	parkPlay();
}
function parkPlay() {
	parkCar.style.display="block";		
	for(var i=0;i<84;i++) {
		parkLi[i].style.display="none";
	}
	parkLi[f].style.display="block";
	f++;
	timer6=setTimeout(parkPlay,80);
	if(f>83) {
		clearTimeout(timer6);
		f=0;
		parkCar.style.display="none";
		
	}
}
function parkMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/tingchewei.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);	 
}
function chooseMedalMusic(proset) {
	var temp=proset;
	if(temp.medal=="suprum") {
			suprumFunction();
		}
		else if(temp.medal=="silver") {
			silverFunction();
		}
		else if(temp.medal=="gold") {
			goldFunction();
		}
}
function showWelcomeName(proset) {
	var temp=proset;
	welcomeDiv.html('欢迎'+temp.name+'进入直播间');
	shadowDiv.html('欢迎'+temp.name+'进入直播间');
}
function showProtect1() {
	var proP=$('#proset1-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset1)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect2() {
	var proP=$('#proset2-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset2)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect3() {
	var proP=$('#proset3-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset3)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect4() {
	var proP=$('#proset4-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset4)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect5() {
	var proP=$('#proset5-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset5)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect6() {
	var proP=$('#proset6-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset6)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect7() {
	var proP=$('#proset7-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset7)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect8() {
	var proP=$('#proset8-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset8)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect9() {
	var proP=$('#proset9-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset9)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect10() {
	var proP=$('#proset10-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset10)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect11() {
	var proP=$('#proset11-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset11)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect12() {
	var proP=$('#proset12-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset12)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect13() {
	var proP=$('#proset13-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset13)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}
function showProtect14() {
	var proP=$('#proset14-name');
	if(proP.html()!=="虚位以待") {
		showWelcomeName(proset14)
		showWelcomeDiv();
		changeShadowColor();
		proFunction();
	}
}

function showWelcomeDiv() {
	welcomeDiv.show();
	shadowDiv.show();
	wLeft=wLeft+20;
	sLeft=sLeft+20;
	welcomeDiv.css('left',wLeft+'px');
	shadowDiv.css('left',sLeft+'px');
	h++;
	timer8=setTimeout(showWelcomeDiv,80);
	if(h>7) {
		wLeft=340;
	    sLeft=341;
	    welcomeDiv.css('left',wLeft+'px');
	    shadowDiv.css('left',sLeft+'px');
	}
	if(h>80) {
		clearTimeout(timer8);
		h=0;
		welcomeDiv.hide();
	    shadowDiv.hide();
	    wLeft=190;
	    sLeft=191;
	}
}
function changeShadowColor() {
	var color=["#e7403c","#ff01e6","#0a8f08","#f0ad4e"];
	welcomeDiv.css('color',color[j]);
	j++;
	timer9=setTimeout(changeShadowColor,1000);
	if(j>3) {
		clearTimeout(timer9);
		j=0;
	}
}
function showCarName(proset) {
	var temp=proset;
	welcomeDiv.html('欢迎'+temp.name+'驾车入场');
	shadowDiv.html('欢迎'+temp.name+'驾车入场');
}
function drive1() {
	var proP=$('#carset1-name');
	if(proP.html()!=="车位待租") {
		showCarName(carset1)
		showWelcomeDiv();
		changeShadowColor();
		carFunction();
	}
}
function drive2() {
	var proP=$('#carset2-name');
	if(proP.html()!=="车位待租") {
		showCarName(carset2)
		showWelcomeDiv();
		changeShadowColor();
		carFunction();
	}
}
function drive3() {
	var proP=$('#carset3-name');
	if(proP.html()!=="车位待租") {
		showCarName(carset3)
		showWelcomeDiv();
		changeShadowColor();
		carFunction();
	}
}
function drive4() {
	var proP=$('#carset4-name');
	if(proP.html()!=="车位待租") {
		showCarName(carset4)
		showWelcomeDiv();
		changeShadowColor();
		carFunction();
	}
}
function saveProSet() {
	var prosetId=$('#prosetIds').val();
	var prosetName=$('#prosetInput').val();
	var prosetMedal=$('#prosetMedals').val();
	if(prosetName=="") {
		tipDiv.html('目标值不能为空！');
		showtipDiv();
	}
	else {
		if(prosetId=="default") {
		tipDiv.html('目标守护位置有误！');
		showtipDiv();
	    }
		else {
			
			if(prosetId==proset1.id) {
				proset1.name=prosetName;
				proset1.medal=prosetMedal;
				renderProset1();
			}
			else if(prosetId==proset2.id) {
				proset2.name=prosetName;
				proset2.medal=prosetMedal;
				renderProset2();
			}
			else if(prosetId==proset3.id) {
				proset3.name=prosetName;
				proset3.medal=prosetMedal;
				renderProset3();
			}
			else if(prosetId==proset4.id) {
				proset4.name=prosetName;
				proset4.medal=prosetMedal;
				renderProset4();
			}
			else if(prosetId==proset5.id) {
				proset5.name=prosetName;
				proset5.medal=prosetMedal;
				renderProset5();
			}
			else if(prosetId==proset6.id) {
				proset6.name=prosetName;
				proset6.medal=prosetMedal;
				renderProset6();
			}
			else if(prosetId==proset7.id) {
				proset7.name=prosetName;
				proset7.medal=prosetMedal;
				renderProset7();
			}
			else if(prosetId==proset8.id) {
				proset8.name=prosetName;
				proset8.medal=prosetMedal;
				renderProset8();
			}
			else if(prosetId==proset9.id) {
				proset9.name=prosetName;
				proset9.medal=prosetMedal;
				renderProset9();
			}
			else if(prosetId==proset10.id) {
				proset10.name=prosetName;
				proset10.medal=prosetMedal;
				renderProset10();
			}
			else if(prosetId==proset11.id) {
				proset11.name=prosetName;
				proset11.medal=prosetMedal;
				renderProset11();
			}
			else if(prosetId==proset12.id) {
				proset12.name=prosetName;
				proset12.medal=prosetMedal;
				renderProset12();
			}
			else if(prosetId==proset13.id) {
				proset13.name=prosetName;
				proset13.medal=prosetMedal;
				renderProset13();
			}
			else if(prosetId==proset14.id) {
				proset14.name=prosetName;
				proset14.medal=prosetMedal;
				renderProset14();
			}
		}
	}
}
function renderProset1() {
	if(proset1.name=="") {
		$('#proset1-name').html('虚位以待');
		$('#proSet1 img').hide();
		$('#proset1ImgDefault').show();
	}
	else {
		$('#proset1-name').html(proset1.name);
		$('#proSet1 img').hide();
		if(proset1.medal=="suprum") {
			$('#proset1ImgSuprum').show();
		}
		else if(proset1.medal=="silver") {
			$('#proset1ImgSilver').show();
		}
		else if(proset1.medal=="gold") {
			$('#proset1ImgGold').show();
		}
		$("#prosetIds option[value='proset1']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset1);
	}
}
function renderProset2() {
	if(proset2.name=="") {
		$('#proset2-name').html('虚位以待');
		$('#proSet2 img').hide();
		$('#proset2ImgDefault').show();
	}
	else {
		$('#proset2-name').html(proset2.name);
		$('#proSet2 img').hide();
		if(proset2.medal=="suprum") {
			$('#proset2ImgSuprum').show();
		}
		else if(proset2.medal=="silver") {
			$('#proset2ImgSilver').show();
		}
		else if(proset2.medal=="gold") {
			$('#proset2ImgGold').show();
		}
		$("#prosetIds option[value='proset2']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset2);
	}
}
function renderProset3() {
	if(proset3.name=="") {
		$('#proset3-name').html('虚位以待');
		$('#proSet3 img').hide();
		$('#proset3ImgDefault').show();
	}
	else {
		$('#proset3-name').html(proset3.name);
		$('#proSet3 img').hide();
		if(proset3.medal=="suprum") {
			$('#proset3ImgSuprum').show();
		}
		else if(proset3.medal=="silver") {
			$('#proset3ImgSilver').show();
		}
		else if(proset3.medal=="gold") {
			$('#proset3ImgGold').show();
		}
		$("#prosetIds option[value='proset3']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset3);
	}
}
function renderProset4() {
	if(proset4.name=="") {
		$('#proset4-name').html('虚位以待');
		$('#proSet4 img').hide();
		$('#proset4ImgDefault').show();
	}
	else {
		$('#proset4-name').html(proset4.name);
		$('#proSet4 img').hide();
		if(proset4.medal=="suprum") {
			$('#proset4ImgSuprum').show();
		}
		else if(proset4.medal=="silver") {
			$('#proset4ImgSilver').show();
		}
		else if(proset4.medal=="gold") {
			$('#proset4ImgGold').show();
		}
		$("#prosetIds option[value='proset4']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset4);
	}
}
function renderProset5() {
	if(proset5.name=="") {
		$('#proset5-name').html('虚位以待');
		$('#proSet5 img').hide();
		$('#proset5ImgDefault').show();
	}
	else {
		$('#proset5-name').html(proset5.name);
		$('#proSet5 img').hide();
		if(proset5.medal=="suprum") {
			$('#proset5ImgSuprum').show();
		}
		else if(proset5.medal=="silver") {
			$('#proset5ImgSilver').show();
		}
		else if(proset5.medal=="gold") {
			$('#proset5ImgGold').show();
		}
		$("#prosetIds option[value='proset5']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset5);
	}
}
function renderProset6() {
	if(proset6.name=="") {
		$('#proset6-name').html('虚位以待');
		$('#proSet6 img').hide();
		$('#proset6ImgDefault').show();
	}
	else {
		$('#proset6-name').html(proset6.name);
		$('#proSet6 img').hide();
		if(proset6.medal=="suprum") {
			$('#proset6ImgSuprum').show();
		}
		else if(proset6.medal=="silver") {
			$('#proset6ImgSilver').show();
		}
		else if(proset6.medal=="gold") {
			$('#proset6ImgGold').show();
		}
		$("#prosetIds option[value='proset6']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset6);
	}
}
function renderProset7() {
	if(proset7.name=="") {
		$('#proset7-name').html('虚位以待');
		$('#proSet7 img').hide();
		$('#proset7ImgDefault').show();
	}
	else {
		$('#proset7-name').html(proset7.name);
		$('#proSet7 img').hide();
		if(proset7.medal=="suprum") {
			$('#proset7ImgSuprum').show();
		}
		else if(proset7.medal=="silver") {
			$('#proset7ImgSilver').show();
		}
		else if(proset7.medal=="gold") {
			$('#proset7ImgGold').show();
		}
		$("#prosetIds option[value='proset7']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset7);
	}
}
function renderProset8() {
	if(proset8.name=="") {
		$('#proset8-name').html('虚位以待');
		$('#proSet8 img').hide();
		$('#proset8ImgDefault').show();
	}
	else {
		$('#proset8-name').html(proset8.name);
		$('#proSet8 img').hide();
		if(proset8.medal=="suprum") {
			$('#proset8ImgSuprum').show();
		}
		else if(proset8.medal=="silver") {
			$('#proset8ImgSilver').show();
		}
		else if(proset8.medal=="gold") {
			$('#proset8ImgGold').show();
		}
		$("#prosetIds option[value='proset8']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset8);
	}
}
function renderProset9() {
	if(proset9.name=="") {
		$('#proset9-name').html('虚位以待');
		$('#proSet9 img').hide();
		$('#proset9ImgDefault').show();
	}
	else {
		$('#proset9-name').html(proset9.name);
		$('#proSet9 img').hide();
		if(proset9.medal=="suprum") {
			$('#proset9ImgSuprum').show();
		}
		else if(proset9.medal=="silver") {
			$('#proset9ImgSilver').show();
		}
		else if(proset9.medal=="gold") {
			$('#proset9ImgGold').show();
		}
		$("#prosetIds option[value='proset9']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset9);
	}
}
function renderProset10() {
	if(proset10.name=="") {
		$('#proset10-name').html('虚位以待');
		$('#proSet10 img').hide();
		$('#proset10ImgDefault').show();
	}
	else {
		$('#proset10-name').html(proset10.name);
		$('#proSet10 img').hide();
		if(proset10.medal=="suprum") {
			$('#proset10ImgSuprum').show();
		}
		else if(proset10.medal=="silver") {
			$('#proset10ImgSilver').show();
		}
		else if(proset10.medal=="gold") {
			$('#proset10ImgGold').show();
		}
		$("#prosetIds option[value='proset10']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset10);
	}
}
function renderProset11() {
	if(proset11.name=="") {
		$('#proset11-name').html('虚位以待');
		$('#proSet11 img').hide();
		$('#proset11ImgDefault').show();
	}
	else {
		$('#proset11-name').html(proset11.name);
		$('#proSet11 img').hide();
		if(proset11.medal=="suprum") {
			$('#proset11ImgSuprum').show();
		}
		else if(proset11.medal=="silver") {
			$('#proset11ImgSilver').show();
		}
		else if(proset11.medal=="gold") {
			$('#proset11ImgGold').show();
		}
		$("#prosetIds option[value='proset11']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset11);
	}
}
function renderProset12() {
	if(proset12.name=="") {
		$('#proset12-name').html('虚位以待');
		$('#proSet12 img').hide();
		$('#proset12ImgDefault').show();
	}
	else {
		$('#proset12-name').html(proset12.name);
		$('#proSet12 img').hide();
		if(proset12.medal=="suprum") {
			$('#proset12ImgSuprum').show();
		}
		else if(proset12.medal=="silver") {
			$('#proset12ImgSilver').show();
		}
		else if(proset12.medal=="gold") {
			$('#proset12ImgGold').show();
		}
		$("#prosetIds option[value='proset12']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset12);
	}
}
function renderProset13() {
	if(proset13.name=="") {
		$('#proset13-name').html('虚位以待');
		$('#proSet13 img').hide();
		$('#proset13ImgDefault').show();
	}
	else {
		$('#proset13-name').html(proset13.name);
		$('#proSet13 img').hide();
		if(proset13.medal=="suprum") {
			$('#proset13ImgSuprum').show();
		}
		else if(proset13.medal=="silver") {
			$('#proset13ImgSilver').show();
		}
		else if(proset13.medal=="gold") {
			$('#proset13ImgGold').show();
		}
		$("#prosetIds option[value='proset13']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset13);
	}
}
function renderProset14() {
	if(proset14.name=="") {
		$('#proset14-name').html('虚位以待');
		$('#proSet14 img').hide();
		$('#proset14ImgDefault').show();
	}
	else {
		$('#proset14-name').html(proset14.name);
		$('#proSet14 img').hide();
		if(proset14.medal=="suprum") {
			$('#proset14ImgSuprum').show();
		}
		else if(proset14.medal=="silver") {
			$('#proset14ImgSilver').show();
		}
		else if(proset14.medal=="gold") {
			$('#proset14ImgGold').show();
		}
		$("#prosetIds option[value='proset14']").remove();
		$('#prosetInput').val('');
		tipDiv.html('添加成功！');
		showtipDiv();
		chooseMedalMusic(proset14);
	}
}
