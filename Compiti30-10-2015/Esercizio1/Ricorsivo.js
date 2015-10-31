function sum(myArray){
	return (myArray.length<=0 || myArray[0]<0)?0:(myArray[0]+sum(myArray.slice(1)));
}
console.log("Ricorsivo: "+sum([1,2,3,-1,-1]));
//O(n)