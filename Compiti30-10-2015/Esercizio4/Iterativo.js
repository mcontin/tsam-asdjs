var a = 7;
var b = 4;
var tot = 0;
if(a>b){
    while(a>=b){
        tot += a;
        a--;
    }
}
else {
    while(a<=b){
        tot += a;
        a++;
    }
}
console.log("Iterativo: "+tot);
//O(n)