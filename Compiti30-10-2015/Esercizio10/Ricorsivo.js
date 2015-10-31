function ex_10_R(a,n){
    return (n==1)?a:new Array(0).concat(a,ex_10_R(a,--n));
}
console.log("Ricorsivo: "+ex_10_R(12,2));
//O(n)