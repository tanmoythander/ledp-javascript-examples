// Your JavaScript goes here
var pi = 3.1416;

// functions
function calculateCircleArea () {
	var rad = parseInt(
		document.getElementById("radius").value);
	var area = circleArea(rad);
	document.getElementById("circle-area")
		.innerHTML = area + " square unit";
}
function circleArea (radius) {
	return pi * radius * radius;
}
function calculateRectangleArea () {
	var len = parseInt(
		document.getElementById("length").value);
	var wid = parseInt(
		document.getElementById("width").value);
	var area = rectangleArea(len, wid);
	document.getElementById("rectangle-area")
		.innerHTML = area + " square unit";
}
function rectangleArea (length, width) {
	return length * width;
}
