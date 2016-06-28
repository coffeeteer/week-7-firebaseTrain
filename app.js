//1 .Train Name, Destination, First Train Time (military time), and frequency (minutes).
//2. The app should have code able to use this basic information and self-determine when the next train is to arrive relative to the current time.
//3. This app must be such that multiple users from -- many different machines can all view the same times simultaneously.
 
$(document).ready(function() {
	var trainData = new Firebase("https://anytimetrain.firebaseio.com");

$('#trainUser').on('click', function(){
	//select id for input fields
	var nameInput = $('#input-train-name').val();
	var destinyInput = $('#destination').val();
	var frequencyInput = $('#frequency').val();
	var arrival = $('#next-arrival').val();
	var next = $('#minutes-away').val();

	trainData.push({
		nameInput: nameInput,
		destinyInput: destinyInput,
		frequencyInput: frequencyInput,
		arrival: arrival,
		next: next,
		dateAdded: Firebase.ServerValue.TIMESTAMP

	});

});



});