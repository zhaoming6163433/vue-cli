window.onresize = function(){
	window.requestAnimationFrame(function () {
	  var AvailableWidth = window.innerWidth;
	  var fontSize = (AvailableWidth/375)*10;
	  jsEnvironment = document.getElementById('jsEnvironment');
	  jsEnvironment.style.fontSize = fontSize+'px';
	});
}
window.onload = function(){
	  var AvailableWidth = window.innerWidth;
	  var fontSize = (AvailableWidth/375)*10;
	  jsEnvironment = document.getElementById('jsEnvironment');
	  jsEnvironment.style.fontSize = fontSize+'px';
}