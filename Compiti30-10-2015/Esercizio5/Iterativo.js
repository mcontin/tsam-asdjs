var a = 1000000;
var b = 2;
var i = 0;
var tot = 0;
if(a<b){
	while(i<a){
		tot += b;
		i++;	
    }
}
else{
	while(i<b){
		tot += a;
		i++;
	}
}
console.log("Iterativo: "+tot);
//O(n) 