var a = [5,8,43,2,3,8,1,7,98,-15];
var i = 0;
var avg = 0;
function ex_3_I(myArray){
var avg = 0;
    while (i<myArray.length){
        avg += myArray[i];
        i++;
    }
return avg/myArray.length;
}
avg = avg/a.length;
console.log("Iterativo: "+ex_3_I(a));