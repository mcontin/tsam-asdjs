var a = 5;
var n = 4;
var array = [];
var i = 0;
function ex_10_I(a,n){
	var array = [];
	while(i<n){
    	array.push(a);
    i++;
	}
	return array;
}
console.log("Iterativo: "+ex_10_I(a,n));
//O(n)