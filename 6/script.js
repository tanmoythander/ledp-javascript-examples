// Your JavaScript goes here

var students = ["Jahid", "Zaohar", "Ziaul", "Abid", "Alomgir", "Sami"]; // Declared array
showList(); // Shows the list of students


// functions
function showList() {
	var i; // counter
	var listString = ""; // string to store list
	for(i=0 /*Initialization*/ ; i<students.length /*condition*/ ; i++/*increment*/) {
		listString += "<li>"; // create <li>
		listString += students[i]; // add name
		listString += "</li>"; // end <li>
	}
	document.getElementById("list").innerHTML = listString; // sends the li elements inside the ol element
	document.getElementById("delete-index").max = students.length; // sets the max attribute of delete index
	document.getElementById("edit-index").max = students.length; // sets the max attribute of update index
}
function addStudent() {
	var student = document.getElementById("add-student").value; // retrieves the value from the input
	if(student.length > 0) { // works when the string is not empty
		students.push(student); //push the student to the array
		document.getElementById("add-student").value = ""; // empty the input field
		showList(); // updates the list
	}
}
function showWarning(elementId) {
	document.getElementById(elementId).innerHTML =
		"If you really want to delete the student, double-click the button"; //sets the warning message
	document.getElementById(elementId).style.color = "red"; // sets the text color to red
}
function deleteStudent(position) {
	if (position) {
		students.shift(); // deletes the first array element
	}
	else {
		students.pop(); // deletes the last array element
	}
	showList(); // updates the list
	document.getElementById("delete-msg").innerHTML = ""; // remove the delete message
}
function deleteAllStudent() {
	students = []; // Empty the array
	showList(); // updates the list
	document.getElementById("delete-msg").innerHTML = ""; // remove the delete message
}
function deleteSpecificStudent() {
	var index = parseInt(document.getElementById("delete-index").value) - 1; // retrieves the value from the input
	if(index < students.length && index > -1) {
		students.splice(index, 1); // delete the indexed element
		showList(); // updates the list
		document.getElementById("delete-msg-2").innerHTML = ""; // remove the delete message
	}
	else {
		document.getElementById("delete-msg-2").innerHTML = "Invalid index"; //sets the warning message
		document.getElementById("delete-msg-2").style.color = "red"; // sets the text color to red
	}
	document.getElementById("delete-index").value = ""; // empty the input field
}
function updateStudent() {
	var index = parseInt(document.getElementById("edit-index").value) - 1; // retrieves the value from the input
	var newName = document.getElementById("edit-student").value; // retrieves the value from the input
	if(index < students.length && index > -1) {
		students[index] = newName; // updates the name in the array
		showList(); // updates the list
		document.getElementById("update-msg").innerHTML = ""; // remove the update message
	}
	else {
		document.getElementById("update-msg").innerHTML = "Invalid index"; //sets the warning message
		document.getElementById("update-msg").style.color = "red"; // sets the text color to red
	}
	document.getElementById("edit-index").value = ""; // empty the input field
	document.getElementById("edit-student").value = ""; // empty the input field
}
