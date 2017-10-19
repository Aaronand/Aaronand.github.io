var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 0);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 0);
}

jumpToDecode = function(){
	var url = "result.html";
	var jumpTo = url+'?'+Math.ceil(Math.random()*37).toString();
	window.location = jumpTo;
}

var u = navigator.userAgent; 
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
alert('是否是iOS：'+isiOS);

$('body').on('touchend',start);
//$('body').click(start);


// //微信分享  失效了，有时间的可以根据官方公布的 JS-SDK进行开发

// var shareMeta = {
// 	img_url: "http://www.imeiwen.com/2015/thumbnail.gif",
// 	image_width: 100,
// 	image_height: 100,
// 	link: 'http://www.imeiwen.com/2015/index.html',
// 	title: "2015乙未羊，为自己摇枚新年签！",
// 	desc: "这是对过去的感悟和对新年的祈望，希望它能为你带来好运...",
// 	appid: ''
// };
// document.addEventListener('WeixinJSBridgeReady', function () {
// 	WeixinJSBridge.on('menu:share:appmessage', function(){
// 		WeixinJSBridge.invoke('sendAppMessage', shareMeta);
// 	});
// 	WeixinJSBridge.on('menu:share:timeline', function(){
// 		WeixinJSBridge.invoke('shareTimeline', shareMeta);
// 	});
// 	WeixinJSBridge.on('menu:share:weibo', function(){
// 		WeixinJSBridge.invoke('shareWeibo', {
// 			content: shareMeta.title + shareMeta.desc,
// 			url: shareMeta.link
// 		});
// 	});
// });
