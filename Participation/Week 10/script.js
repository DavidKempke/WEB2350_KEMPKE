function myFunction(a, b) {
	return a * b;
}

function helloWorld() {
	alert("Hello World!");
}

function myTimer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("timer").innerHTML = t;
}

var myVar = setInterval(function(){
	myTimer();
}, 1000)

function myStopFunction() {
	clearInterval(myVar);
}