function mult(a,b){
    return (b>0)?a+mult(a,--b):0;
}
console.log("Ricorsivo: "+mult(122,152)); //numeri troppo grandi danno problemi con lo stack
//O(n)
