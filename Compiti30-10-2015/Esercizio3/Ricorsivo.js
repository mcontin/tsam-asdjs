var a = [5,8,43,2,3,8,1,7,98,-15];
/*function average(i,avg){
    return (i<a.length)?average(i+1,avg+a[i]):avg/a.length;
}*/
function ex_3_R(array){
    return avgR(array,0);
}
function avgR(array,i){
    return (i<array.length)?array[i]/array.length+avgR(array,++i):0;
}
console.log("Ricorsivo: "+ex_3_R(a));
//O(n)