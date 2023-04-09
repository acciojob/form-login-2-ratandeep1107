function alert() {
	//your JS code here. If required.
let firstname = document.getElementById("first-name").value;
let lastname = document.getElementById("last-name").value;
let phonenumber = document.getElementById("phone-number").value;
let emailid = document.getElementById("email-id").value;

	let record = "First Name: " + firstname + "\nLast Name: " + lastname + "\nPhone Number: "+ phonenumber + "\nEmail ID: "+ emailid;
	alert (record);
}