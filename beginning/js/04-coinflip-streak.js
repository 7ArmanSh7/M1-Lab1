var coinFlip;
var res ="";
do{
	coinFlip = Math.random()
	coinFlip = Math.round(coinFlip);
	if(coinFlip==0){
		res += " Heads\n";
	}
	else if(coinFlip==1){
		res += " Tails\n";
	}
}while(coinFlip!=1);
console.log(res);
console.log("It was Tails and the loop ends\n");