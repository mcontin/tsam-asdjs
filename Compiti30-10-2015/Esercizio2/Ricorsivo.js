/*function sumOdds(c,n,tot){ //c = adder, n = how many odds
    if(n==0)
        return tot;
    else if(c%2!=0)
        return sumOdds(c+2,n-1,tot+c); 
    else return sumOdds(c+1,n,tot);
}*/
function ex_2_R(n){
    return (n!=0)?2*n-1+ex_2_R(n-1):0;
}
console.log("Ricorsivo: "+ex_2_R(5));
//O(n)