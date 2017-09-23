new Image().src="decode.png";
new Image().src="234.png";
var start, showDecode, jumpToDecode, lastTime, lastAcc, isStarted = false;

start = function() {
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 1000);
}

showDecode = function(){
	$('.result').hide();
	$('.decode').show();
	setTimeout(jumpToDecode, 1000);
}

jumpToDecode = function(){
	var urls = [
	"https://raw.githubusercontent.com/Aaronand/Aaronand.github.io/master/1.PNG",
	"https://raw.githubusercontent.com/Aaronand/Aaronand.github.io/master/2.PNG", 
	"https://raw.githubusercontent.com/Aaronand/Aaronand.github.io/master/3.PNG" 
	];
	var jumpTo = urls[parseInt(Math.random() * urls.length)];
	window.location = jumpTo;
}

$('.do').click(start);

//摇一摇
$(window).on('deviceorientation', function(e) {
	if (isStarted) {
		return true;
	}
	if (!lastAcc) {
		lastAcc = e;
		return true;
	}
	var speed = e.alpha + e.beta + e.gamma - lastAcc.alpha - lastAcc.beta - lastAcc.gamma;
	if (Math.abs(speed) > 50) {
		start();
	}
	lastAcc = e;
});

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