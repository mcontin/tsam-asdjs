function ex_1_I(myArray){
	var sum = 0;
	for(var i=0; i<myArray.length && myArray[i]>=0; i++){
	    sum += myArray[i];
	}
	return sum;
}
console.log("Iterativo: "+ex_1_I([1,2,3,4,-1,2]));
//O(n)