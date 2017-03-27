// 轮播图	
var i=0,timer;
$(function(){
	$('.big-pics li').eq(0).show().siblings().hide();
	ShowProcess();
});
// 函数区
function Show(){
$(".big-pics li").eq(i).fadeIn(300).siblings().fadeOut(300);
}
function ShowProcess(){
timer=setInterval(function(){
	i++;
	if(i==6)
	{
		i=0;
	}
	Show();
	},4000)
}
