var a = [1,2,3,-1,3];
var sum = 0;
var i = 0;
while (a[i]>=0){
    sum += a[i];
	i++;
}
console.log("Iterativo: "+sum);
//O(n)