var a = 3;
var b = 2;
var i = 0;
var r = 0;
while(a-b>=0){
    a -= b;
    i++;
}
r = a;
console.log("Iterativo: quoziente: "+i+" resto: "+r);
//O(n)