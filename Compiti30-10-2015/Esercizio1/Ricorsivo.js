var a = [1,2,3,-1,3];
function sum(i){
	return (a[i]<0)?0:(a[i]+sum(i+1));
}
console.log("Ricorsivo: "+sum(0));
//O(n)