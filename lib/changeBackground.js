//改变背景色开始

var conHead=$('.content-head');
var textBg=$('.textBg');
var colorArr1=['#C4BAB9','#C3C0BB','#DFBE77','#DDC19C','#C1D1DE','#60B5BC','#9B5110','#D5D4D0','#ffffff']; //conHead的背景色
var colorArr2=['#D4D0CF','#CFCCC8','#E4D1A1','#E3CDAF','#CDDAE4','#7FC3C9','#BF7F43','#E1DEDB','#ffffff']; //textarea的背景色
var size = colorArr1.length;
var i = 0;

function clickChangeBg() {
	i=i+1;
	if (i>=size) i = 0;
	for(var m=0;m<conHead.length;m++) {
		conHead[m].style.background=colorArr1[i];
	}
	for(var n=0;n<textBg.length;n++) {
		textBg[n].style.background=colorArr2[i];
	}
	
}


//改变背景色结束
//牵手成功开始
var sucBg=$('#sucBg');
var sucLi=document.getElementsByClassName('sucLi');
var sucHand=document.getElementById('success-hand');
var a=0;
var timer=0;
function sucFuction() {
	sucMusic();
	sucPlay();
}
function sucPlay() {
	sucHand.style.display="block";		
	for(var i=0;i<65;i++) {
		sucLi[i].style.display="none";
	}
	sucLi[a].style.display="block";
	a++;
	timer=setTimeout(sucPlay,80);
	if(a>64) {
		clearTimeout(timer);
		a=0;
		sucHand.style.display="none";
		
	}
}
function sucMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/qianshou_success.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);
	 
}
//牵手成功结束
