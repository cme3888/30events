
$(function(event) {

//click paragraph one alert (1and2)
$(".derbyface").click(function(event){
	alert("Pictures");
	$(".momzombie").toggle();
});
//(3)
$(".momzombie").click(function(event){
	$(".derbyface").toggle();
});
//(4and5)
$(".momzombie").mouseover(function(event){
	$(".momzombie").css("background-color","yellow");

});//(6and7)
$(".momzombie").mouseout(function(event){
	$(".momzombie").css("background-color","none")
});//(8and9)
$(".derbyface").mouseover(function(event){
	$(".derbyface").css("background-color","blue")
});
//(10and11)
$(".derbyface").mouseout(function(event){
	$(".derbyface").css("background-color","none")
});//(12and13)
$(".programimg").click(function(event){
	$(this).remove();
	alert("efffff that picture!");
});//(14)
$(".nextpg2").mousemove(function(event){
	$(".nextpg2").css("background-color","orange")
});//(15)
$(".nextpg1").click(function(event){
	$(".nextpg1").css("background-color","green")
});//(16)
$(".nextpg1").mouseover(function(event){
	$(this).css("background-color","none")
})//(17and18)
$(".nextpg2").click(function(event){
	$(this).css("background-color","none")
	alert("AWESOME EVENTS!");
});








});















