function sumInterval(a, b, tot){
    if(a>b)
        return sumInterval(b,a,0);
    else {
        return (a==b)?tot+a:sumInterval(a+1,b,tot+a);
    }
}
console.log("Ricorsivo: "+sumInterval(7,4,0));
//O(n)