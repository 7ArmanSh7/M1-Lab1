var coinFlip;
var res ="";
for(var i=0; i<=10;i++){
	coinFlip = Math.round(Math.random());
	if(coinFlip==0){
		res += " Heads\n"
	}
	else if(coinFlip==1){
		res += " Tails\n";
	}
}
console.log(res);
