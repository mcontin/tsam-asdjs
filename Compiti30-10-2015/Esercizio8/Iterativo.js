var aa = [1,2,3,4,5,6,7,8,9];
var n = Math.sqrt(aa.length);
var ab = new Array(n);
for(var i=0;i<n;i++)
    ab[i] = new Array(n);
var i = 0;
//var j = 0;
//var k = 0;
//while(i<n){
//    while(j<n){
//        ab[i][j] = aa[k];
//        k++;
//        j++;
//    }
//    i++;
//    j = 0;
//}
while(i<aa.length){
    ab[i]=aa[i];
    i++;
}
console.log("Iterativo: 1: "+aa+" 2: "+ab);
//O(n)