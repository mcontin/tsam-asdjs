var r = 0;
function div(a,b,q){
    if(a-b>=0){
        return div(a-b,b,++q);
    }
    else{
        return "quoziente: "+q+" resto: "+a;
    }
}
console.log("Ricorsivo: "+div(11,4,0));
//O(n)