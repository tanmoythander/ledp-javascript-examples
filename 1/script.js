/*
	Variable Naming Rules
	1. (A-Z), (a-z), (0-9), _(underscore)
	2. Can not start with numbers
	3. Can not match with other keywords


	Value rules for variables
	1. Numbers >> 12.34
	2. Character >> 'h'
	3. String >> 'This is string' or "This is string"
	4. Boolean >> true or false
*/
var a = 34;
var b = 'r';
var c = 'javaScript is excellent';
var d = true; // false


function changeText1() {
	document.getElementById("text1")
		.innerHTML = "The text has changed";
	document.getElementById("text1-1")
		.innerHTML = "JavaScript can change the innerHTML";
}
function changeText2() {
	document.getElementById("text2-1")
		.innerHTML = "Number - " + a;
	document.getElementById("text2-2")
		.innerHTML = "Character - " + b;
	document.getElementById("text2-3")
		.innerHTML = "String - " + c;
	document.getElementById("text2-4")
		.innerHTML = "Boolean - " + d;
}





