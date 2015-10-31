var a = 3;
var b = 2;
var q = 0;
var r = 0;
function ex_6_I(a,b){
    while(a-b>=0){
        a -= b;
        q++;
    }
return "quoziente: "+q+" resto: "+a;
}
console.log("Iterativo: "+ex_6_I(a,b));
//O(n)