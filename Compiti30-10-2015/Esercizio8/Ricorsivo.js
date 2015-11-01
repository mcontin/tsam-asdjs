var aa = [1,2,3,4,5,6,7,8,9];
var n = Math.sqrt(aa.length); 

function ex_8_R(aa){
    var ab = new Array(n);
    for(var i=0;i<n;i++){
        ab[i]=new Array(n);
    }
    return swapMx(aa,ab,n,0);
}
function swapMx(aa,aRes,n,i){
    if(i==aa.length)
        return aRes;
    aRes[Math.floor(i/n)][i%n]=aa[i];
    return swapMx(aa,aRes,n,++i);
}
var ab = ex_8_R(aa);
console.log(ab);
//O(n)