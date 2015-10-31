var aa = [1,2,3,4,5,6,7,8,9];
n = Math.sqrt(aa.length);
ab = new Array(n);
for(var i=0;i<n;i++)
    ab[i] = new Array(n);

function ex_8_R(aa){
    return swapMx(aa,ab,n)
}
function swapMx(startA,resA,n){
    return (startA.length==1)?startA[0]:swapMx(startA.slice(1),resA[(startA.length+n^2-1)/n][(startA.length+n^2-1)%n],n);    
}



ab = ex_8_R(aa);
console.log("Iterativo: 1: "+aa+" 2: "+ab);
//O(n)