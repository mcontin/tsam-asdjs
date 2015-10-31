var a = 10000000000;
var b = 2;
var i = 0;
function ex_5_I(a,b){
	var tot = 0;
	if(a<b){
		while(i<a){
			tot += b;
			i++;	
		}
	}
	else
		return ex_5_I(b,a);
	return tot;
}
console.log("Iterativo: "+ex_5_I(a,b));
//O(n) 