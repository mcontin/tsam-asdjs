var a = [5,8,43,2,3,8,1,7,98,-15];
function average(i,avg){
    return (i<a.length)?average(i+1,avg+a[i]):avg/a.length;
}
console.log("Ricorsivo: "+average(0,0));
//O(n)