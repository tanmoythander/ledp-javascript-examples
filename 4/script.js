// Your JavaScript goes here

// More about Operators
// View the console output to see these results
var a = 5;
var b = "5";
var c = 5;
console.log("a = " + a + " " + typeof a);
console.log("b = " + b + " " + typeof b);
console.log("c = " + c + " " + typeof c);

console.log("");
console.log("a == b");
console.log(a == b);

console.log("");
console.log("a == c");
console.log(a == c);

console.log("");
console.log("a === b");
console.log(a === b);

console.log("");
console.log("a === c");
console.log(a === c);

console.log("");
console.log("a != b");
console.log(a != b);

console.log("");
console.log("a != c");
console.log(a != c);

console.log("");
console.log("a !== b");
console.log(a !== b);

console.log("");
console.log("a !== c");
console.log(a !== c);


// Function to process form input
function submit() {
	// Collecting the input values
	var fname = document
		.getElementById("fname").value;
	var lname = document
		.getElementById("lname").value;
	var email = document
		.getElementById("umail").value;

	// Processing the values
	var fullName = fname + " " + lname;
	var reply = "Hello " + fullName +
		".<br>We will contact with you through "
		+ email + " soon !";

	// Displaying the result on the view
	if ((fname.length > 1 || fname.length > 1) && email.length > 4) {
		document.getElementById("reply")
			.innerHTML = reply;
		document.getElementById("reply")
			.style.color = "green";
	}
	else {
		document.getElementById("reply")
			.innerHTML = "Input invalid !";
		document.getElementById("reply")
			.style.color = "red";
	}
}
