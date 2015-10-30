var a = [5,8,43,2,3,8,1,7,98,-15];
var i = 0;
var avg = 0;
while (i<a.length){
    avg += a[i];
    i++;
}
avg = avg/a.length;
console.log("Iterativo: "+avg);