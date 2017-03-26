// Your JavaScript goes here
function submit() {
	var fname = document.getElementById("fname")
		.value;
	var lname = document.getElementById("lname")
		.value;
	var email = document.getElementById("umail")
		.value;
	var fullName = fname + " " + lname;
	if (fname.length>1 && fname.length>1
		&& email.length>4) {
		var reply = "Hello " + fullName +
			".<br>We will contact with you through "
			+ email + " soon.";
		document.getElementById("reply")
			.innerHTML = reply;
	}
	else {
		document.getElementById("reply")
			.innerHTML =
			"Please fill up all the fields correctly.";
	}
}
