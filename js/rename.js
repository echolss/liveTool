var c=0;
var timer2=0;
var chButton=$('#changeName');
var closeRename=$('#closeRename');
var chLi=document.getElementsByClassName('chLi');
var chName=document.getElementById('change-name');
function renameFunction() {
	renameMusic();
	rename();
}
function rename() {  //改名
	chButton.hide();
	closeRename.show();
	$('.content-center-middle').hide();
	$('.lightLeft').hide();
	$('.content-center-bottom').addClass('closeDiv');
	$('#putoutTexta').addClass('closeTextarea');
	chName.style.display="block";
	for(var i=0;i<76;i++) {
		chLi[i].style.display="none";
	    }
    chLi[c].style.display="block";
	c++;
	timer2=setTimeout(rename,70);
	if(c>75) {
		clearTimeout(timer2);
		c=0;
		chName.style.display="none";
	}
}
function closeChangeName() {  //关闭改名
	chButton.show();
	closeRename.hide();
	$('.content-center-middle').show();
	$('.lightLeft').show();
	$('.content-center-bottom').removeClass('closeDiv');
	$('#putoutTexta').removeClass('closeTextarea');
}
function renameMusic() {
	 var musicWrap=$('#musicWrap');
	 var music;
	 musicWrap.empty();
 	 music="<embed src='music/gaiming.mp3' height='0' width='0' loop='false'></embed>";	 	
 	 musicWrap.append(music);
}
