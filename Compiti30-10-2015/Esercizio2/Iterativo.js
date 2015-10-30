var c = 0; //adder
var sum = 0; //result
var n = 5; //amount of odd numbers
for(var i=0; i<n;i++){
    if(c%2!=0){
        sum += c;
        c += 2;
    }
    else {
        c++;
        i--;
    }
}
console.log("Iterativo: "+sum);
//O(n)