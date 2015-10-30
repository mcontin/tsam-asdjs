function pow(a,b){
    return (b==0)?1:mult(a,pow(a,b-1),0,0);
}

function mult(a,b,i,tot){
    if(a>b)
        return mult(b,a,0,0);
    else {
        return (i<b)?mult(a,b,i+1,tot+a):tot;
    } 
}
var res = pow(10,2);
console.log("Ricorsivo: "+res);