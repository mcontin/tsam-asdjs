var a = [1,2,3,4,5,6];
var t = 0;
var i = 0;
var n = a.length/2;
console.log("Iterativo: prima: "+a);
function ex_9_I(a){
    for(var i=n-1;i>=0;i--){
        t = a[i];
        a[i] = a[a.length-1-i];
        a[a.length-1-i] = t;
    }
    return a;
}
console.log("Iterativo: dopo: "+ex_9_I(a));
//O(n)