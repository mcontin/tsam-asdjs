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
function ex_4_I(a,b){
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
    return tot;
}
console.log("Iterativo: "+ex_4_I(4,8));
//O(n)