var a = [4,2,7,93,7,2,32,5,7,3];
var res = [];
var i = 0;
var j = 0;
while(j<a.length){
    if(a[j]%2!=0)
        res.push(a[j]);
    j++;
}    
j = 0;
while(j<a.length){
    if(a[j]%2==0)
        res.push(a[j])
    j++
}       
console.log("Iterativo: prima: "+a+" dopo: "+res);
//O(n)