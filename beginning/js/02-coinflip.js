// Random numbers between 0 to 10
var coinFlip = Math.random()*10;
coinFlip = Math.round(Math.random()*10);
window.document.write("Considering numbers from 0 to 5 are heads and numbers 5 to 10 are tails");
var choice = window.prompt("Heads or Tails");
while(choice==null || (choice.toLowerCase()!="tails" & choice.toLowerCase()!="heads"))
{
	choice = window.prompt("Please only Heads or Tails");
}
choice = choice.toLowerCase();
var result="";
if(coinFlip<=5){
	result = "heads";
}
else if(coinFlip>5){
	result = "tails";
}

result = choice == result;
console.log("Coin Flip result "+coinFlip);
console.log("User choice result "+choice);

if(result){
	if(coinFlip<=5){
		window.alert("\nThe flip was heads and you chose heads...you win!");
	}
	else{
		window.alert("\nThe flip was tails and you chose tails...you win!");
	}
}
else{
	if(coinFlip<=5){
		window.alert("\nThe flip was heads but you chose tails...you lose!");
	}
	else{
		window.alert("\nThe flip was tails but you chose heads...you lose!");
	}
}

