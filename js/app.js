
	var choice = prompt("Please choose a number between 1 to 100");

	if (+choice%1 != 0 ) {
	alert('Number must NOT be a decimal. \ Please try again.');
	location.reload();
	}
	
	var parChoice = parseInt(choice);

	var countFizzBuzz = function(choice1) {

	var num = 1;
	for (num = 1; num <= +choice1; num++ ) {
	if (num%3 == 0 && num%5 == 0) {
	//console.log("fizz buzz");
	document.write('Fizz Buzz');
	document.write('<br/>');
	//$('#fizzApp').append("Fizz Buzz");
	//num++;
	}
	else if (num%3 == 0) {
	//$('#fizzApp').append("Fizz");
	document.write('Fizz');
	document.write('<br/>');
	//console.log("fizz");	
	//num++;
	}
	else if (num%5 == 0) {
	//$('#fizzApp').append("Buzz");
	document.write('Buzz');
	document.write('<br/>');
	//console.log("buzz");
	//num++;
	}
	else {
	document.write(num);
	document.write('<br>');
	//num++;
	}
	}
};

countFizzBuzz(parChoice);


