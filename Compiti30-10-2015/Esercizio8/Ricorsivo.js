var aa = [1,2,3,4,5,6,7,8,9];
var n = Math.sqrt(aa.length);
var ab = new Array(n);
for(var i=0;i<n;i++)
    ab[i] = new Array(n);

function swap(aa,ab,i){
    if(i<aa.length){
        ab[i]=aa[i]
        return swap(aa,ab,i+1);
    }
    return ab;
}
ab = swap(aa,ab,0);
console.log("Iterativo: 1: "+aa+" 2: "+ab);
//O(n)