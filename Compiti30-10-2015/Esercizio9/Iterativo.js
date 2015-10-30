var a = [1,2,3,4,5,6];
var t = 0;
var i = 0;
var n = a.length/2;
console.log("Iterativo: prima: "+a);
while(i<n){
    t = a[i];
    a[i] = a[a.length-1-i];
    a[a.length-1-i] = t;
    i++;
}
console.log("Iterativo: dopo: "+a);
//O(n)