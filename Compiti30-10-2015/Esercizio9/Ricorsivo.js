var array = [1,2,3,4,5,2,6,8,6,3,4,7,8,6,4,2,3,46,7,7,5,3,2,3,45,54];
console.log("Ricorsivo: prima: "+array);
function swap(aa,i,ab){
    if(i==aa.length)
        return ab;
    else {
        ab[i] = aa[aa.length-1-i];
        return swap(aa,++i,ab);
        console.log(ab[i]);
    }
}
array = swap(array,0,new Array(array.length)); 
console.log("Ricorsivo: dopo: "+array);
//O(n)