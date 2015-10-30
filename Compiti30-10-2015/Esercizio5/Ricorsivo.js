function mult(a,b,i,tot){
    if(a>b)
        return mult(b,a,0,0);
    else {
        return (i<b)?mult(a,b,i+1,tot+a):tot;
    } 
}
console.log("Ricorsivo: "+mult(10000,5,0,0)); //numeri troppo grandi danno problemi con lo stack
//O(n)
