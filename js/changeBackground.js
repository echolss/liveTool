//改变背景色开始

var conHead=document.getElementsByClassName('content-head');
var textBg=document.getElementsByClassName('textBg');
var colorArr1=['#d4d0cf','#C3C0BB','#DFBE77','#DDC19C','#C1D1DE','#60B5BC','#9B5110','#D5D4D0','#ffffff']; //conHead的背景色
var colorArr2=['#CECBCB','#CFCCC8','#E4D1A1','#E3CDAF','#CDDAE4','#7FC3C9','#BF7F43','#E1DEDB','#ffffff']; //textarea的背景色
var color = 0;

function clickChangeBg() {
	color=color+1;
	if (color>=9) color = 0;
	for(var m=0;m<conHead.length;m++) {
		conHead[m].style.background=colorArr1[color];
	}
	for(var n=0;n<textBg.length;n++) {
		textBg[n].style.background=colorArr2[color];
	}
	
}


//改变背景色结束

