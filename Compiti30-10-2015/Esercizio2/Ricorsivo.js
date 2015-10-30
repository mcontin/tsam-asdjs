function sumOdds(c,n,tot){ //c = adder, n = how many odds
    if(n==0)
        return tot;
    else if(c%2!=0)
        return sumOdds(c+2,n-1,tot+c); 
    else return sumOdds(c+1,n,tot);
}
console.log("Ricorsivo: "+sumOdds(0,3,0));
//O(n)