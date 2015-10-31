var r = 0;
function div(a,b,q){
    return (a-b>=0)?div(a-b,b,++q):"quoziente: "+q+" resto: "+a;
}
function ex_6_R(a,b){
    return div(a,b,0);
}
console.log("Ricorsivo: "+ex_6_R(11,4));
//O(n)