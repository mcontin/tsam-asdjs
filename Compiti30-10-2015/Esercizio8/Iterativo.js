var aa = [1,2,3,4,5,6,7,8,9];
n = Math.sqrt(aa.length);
var i = 0;
var j = 0;
var k = 0;
function ex_8_I(aa){
    n = Math.sqrt(aa.length);
    var ab = new Array(n);
    for(var i=0;i<n;i++)        //inizializzazione matrice
        ab[i] = new Array(n);
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            ab[i][j] = aa[n*i+j];
        }
    }
    return ab;
}

console.log("Iterativo: 1: "+aa+" 2: "+ex_8_I(aa));
//O(n)