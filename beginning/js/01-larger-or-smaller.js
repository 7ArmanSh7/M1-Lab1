var firstNumber = parseInt(window.prompt("Please enter the first number"),10);
var secondNumber = parseInt(window.prompt("Please enter the second number"),10);
if(firstNumber>secondNumber){
	console.log("First number which is " + firstNumber + " is larger than " + secondNumber);
}
else if(firstNumber<secondNumber){
	console.log("Second number which is " + secondNumber + " is larger than " + firstNumber);
}
else{
	console.log(secondNumber + " and " + firstNumber+" are equal!");
}