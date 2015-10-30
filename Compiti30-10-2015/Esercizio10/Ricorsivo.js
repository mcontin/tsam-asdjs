function replicate(a,n,i,finalA){
    if(i==n){
        return finalA;
    }
    else {
        finalA.push(a);
        return replicate(a,n,++i,finalA);
    }
}
var array = replicate(3,10,0,new Array(0))
console.log("Ricorsivo: "+array);
//O(n)