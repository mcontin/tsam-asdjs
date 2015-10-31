function ex_7_I(a,b){
	var tot = a;
	for(var i=0; i<b-1; i++)
		tot = ex_5_I(tot,a);
	return tot;
}
function ex_5_I(a,b){
	var tot = 0;
	var i = 0;
		while(i<a){
			tot += b;
			i++;	
		}
	return tot;
}
console.log("Iterativo: "+ex_7_I(9,7));
//O(n^2)