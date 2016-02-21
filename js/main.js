
function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {

		console.log('Hello General, welcome back!')
	}

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {

		console.log('User is a teenager');

	} else {

		console.log('User is a child');
	}

	var faveColour = prompt ('What is your favourite colour?').toLowerCase();

	// pipe is the or operator

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h1').css('color', faveColour);
	}

}



/* When the page has loaded */
// is this how to do comments too?
$(function() {

	$('img').on('click', askQuestions);

	//Hide all the sections
	$('h3').next().hide();

	// When the user clicks an h3
	$('h3').on('click', function() {

		// slide Toggle the next element the word 'this' applies to the
		// element clicked on in this click event Units in the brackets after
		// slideToggle are miliseconds
		$(this).next().slideToggle(5000, 'swing');


	})

})
