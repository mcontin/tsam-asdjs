var a = 5;
var b = 4;
var i = 0;
var j = 0;
var tot = 0;
var temp = a;
while(j<b-1){
	while(i<a){
		tot += temp;
		i++;
	}
temp = tot;
tot = 0;
j++;
i = 0;
}
tot = temp;
console.log("Iterativo: "+tot);
//O(n^2)