var c = 0; //adder
var sum = 0; //result
var n = 5; //amount of odd numbers
	/*for(var i=0; i<n;i++){
	    if(c%2!=0){
	        sum += c;
	        c += 2;
	    }
	    else {
	        c++;
	        i--;
	    }
	}*/
function ex_2_I(n){	
var sum = 0;	
	for(var i=1;i<=n;i++){
		sum += 2*i - 1;
	}
return sum;
}
console.log("Iterativo: "+ex_2_I(3));
//O(n)