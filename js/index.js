
var tip=$('#tip');
var mask=$('#mask');
var tipInfo=$('#tip-info');
var sadImg=$('#sad-img');
var failImg=$('#fail-img');
var successImg=$('#success-img');
var imgStoryWrap=$('#imgStory-wrap');

/*var nowDayImgDesc = "";
var nowDayImgTitle = "";
var nowDayImgUrl = "";

//获取必应壁纸
function getBiImages() {
    $.get("api/bingImgFetch",{},function (data) {
        $("#body").css("background-image",data.url);
        nowDayImgDesc = data.d;
        nowDayImgTitle = data.title;
        nowDayImgUrl = data.url;
    });
}
getBiImages();
$('#imgStory-title').html(nowDayImgTitle);
$('#imgStory-content').html(nowDayImgDesc);
$('#img-a-download').attr('href',nowDayImgUrl);
*/


    function checkNumber(theObj) {
        var reg =  /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
            return true;
        }
        return false;
    }

   function checkForm() {
        var PhoneObject = $("#phone");
        var PasswordObject = $("#password");
        var nextLoad = $("#nextLoad:checked").val();
        var robotCheck = $("#robotCheck:checked").val();
        var type = $("#selectOm").val();
        var phone = PhoneObject.val();
        var password = PasswordObject.val();
        if(phone==""){
            tipInfo.html('手机号码不能为空！');
            showTip();
            chooseTipImg();
            return false;
        }else if(!checkNumber(phone) || phone.length!=11){
        	tipInfo.html('手机号码格式有误！');
        	showTip();
            chooseTipImg();
            return false;
        }else if(password==""){
        	tipInfo.html('密码不能为空！');
            showTip();
            chooseTipImg();
            return false;
        }else if(robotCheck==undefined){
        	tipInfo.html('登录之前请先进行防机器人检测！');
            showTip();
            chooseTipImg();
            return false;
        }else if(type==""){
        	tipInfo.html('人员类型值获取错误，无法继续！');
            showTip();
            chooseTipImg();
            return false;
        }else{
     		$("#LoginForm").submit();
			/*$.get(
				"http://oa.cdrysj.com:8888/login_rysj_api?phone="+phone+"&password="+password+"&type="+type+"&apikey=RlZa0BzaaA9fxrUMJF642frBdiwi8kiK&callback=?",
				function(data){
					alert(data)
				}
				)*/
			/*$.post(
				'http://oa.cdrysj.com:8888/login_rysj_api?callback=flightHandler',
				{
					phone:phone,
					password:password,
					type:type,
					apikey:'RlZa0BzaaA9fxrUMJF642frBdiwi8kiK'
				},
				function(APIMessage){
					alert(APIMessage.code)
				}
			)*/
			
        }


}
function showTip() {
	mask.show();
	tip.show();
}
function hideTip() {
	mask.hide();
	tip.hide();
}
function chooseTipImg() {
	failImg.hide();
    successImg.hide();
    sadImg.show();
}

function closeStory() {
	imgStoryWrap.hide();
}
function openStory() {
	imgStoryWrap.show();
}

