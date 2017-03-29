// Your JavaScript goes here

var students = ["Jahid", "Zaohar", "Ziaul", "Abid", "Alomgir", "Sami"];
showList();


// functions
function showList() {
	var i = 0;
	var listString = "";
	for(i=0 ; i<students.length ; i++) {
		listString += "<li>";
		listString += students[i];
		listString += "</li>";
	}
	document.getElementById("list").innerHTML = listString;
	document.getElementById("delete-index").max = students.length;
	document.getElementById("edit-index").max = students.length;
}
function addStudent() {
	var student = document.getElementById("add-student").value;
	if(student.length > 0) {
		students.push(student);
		document.getElementById("add-student").value = "";
		showList();
	}
}
function showWarning(elementId) {
	document.getElementById(elementId).innerHTML =
		"If you really want to delete the student, double-click the button";
	document.getElementById(elementId).style.color = "red";
}
function deleteStudent() {
	students.pop();
	showList();
	document.getElementById("delete-msg").innerHTML = "";
}
function deleteSpecificStudent() {
	var index = parseInt(document.getElementById("delete-index").value) - 1;
	if(index < students.length && index > -1) {
		students.splice(index, 1);
		showList();
		document.getElementById("delete-msg-2").innerHTML = "";
	}
	else {
		document.getElementById("delete-msg-2").innerHTML = "Invalid index";
		document.getElementById("delete-msg-2").style.color = "red";
	}
	document.getElementById("delete-index").value = "";
}
function updateStudent() {
	var index = parseInt(document.getElementById("edit-index").value) - 1;
	var newName = document.getElementById("edit-student").value;
	if(index < students.length && index > -1) {
		students[index] = newName;
		showList();
		document.getElementById("update-msg").innerHTML = "";
	}
	else {
		document.getElementById("update-msg").innerHTML = "Invalid index";
		document.getElementById("update-msg").style.color = "red";
	}
	document.getElementById("edit-index").value = "";
	document.getElementById("edit-student").value = "";
}
