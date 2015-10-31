function sumInterval(a, b, tot){
    if(a>b)
        return sumInterval(b,a,0);
    else {
        return (a==b)?tot+a:sumInterval(a+1,b,tot+a);
    }
}
function ex_4_R(a,b){
    if(a>b)
        return ex_4_R(b,a);
    return (a==b)?a:a+ex_4_R(a+1,b);
}
console.log("Ricorsivo: "+ex_4_R(9,8));
//O(n)