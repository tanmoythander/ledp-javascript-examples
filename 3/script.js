// Your JavaScript goes here

// increase by 1
var a = 0;
document.getElementById("output")
	.innerHTML = a;

// increase 10
var f = 0;
document.getElementById("output2")
	.innerHTML = f;

// for the string
var b = "I";
var c = "am";
var d = "not";
var e = "hungry.";
var myString = b + " " + c + " " + d + " " + e;
document.getElementById("strings")
	.innerHTML = myString;
var extra = " Are you?";

document.getElementById("strings")
	.innerHTML = myString;

// For the bulb
var bulbState = false;
var limit = 0;

// Functions
function toggle() {
	if(bulbState) {
		bulbState = false;
		document.getElementById("bulb")
			.src = "img/bulboff.gif";
		document.getElementById("bulb-switch")
			.innerHTML = "On";
	}
	else {
		bulbState = true;
		document.getElementById("bulb")
			.src = "img/bulbon.gif";
		document.getElementById("bulb-switch")
			.innerHTML = "Off";
	}
}
function increase() {
	a++; //a = a + 10; //a++;
	document.getElementById("output")
		.innerHTML = a;
}
function decrease() {
	a--;
	document.getElementById("output")
		.innerHTML = a;
}
function increase10() {
	f += 10; //a = a + 10; //a++;
	document.getElementById("output2")
		.innerHTML = f;
}
function decrease10() {
	f -= 10;
	document.getElementById("output2")
		.innerHTML = f;
}
function addString() {
	document.getElementById("strings")
		.innerHTML += extra;
}
