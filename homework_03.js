/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo
*/
Array.prototype.ex_1 = sumUntilNeg;
function sumUntilNeg(){
	var sum = 0;
	this.every(x => {
		if(x>0)
			sum += x;
		return x>0
	});
	return sum;
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
Array.prototype.ex_3 = average;
function average(){
	var avg = 0;
		this.every(x => avg += x);
	return avg/this.length;
}
//per TC
//function ex_2_P(array){
//	return array.avg();
//}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
Array.prototype.toBidimensional = funcThree;
function funcThree(){
    var n = Math.sqrt(this.length);
    var destination = [];
    var temp = [];
    this.every(x =>{
    	temp.push(x);
    	if(temp.length==n){
    		destination.push(temp);
    		temp = [];
    		}
    	return true;
    });
	
    return destination;
}
//per TC
function ex_3_P(array){
	return array.toBidimensional();
}

/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
*/
Array.prototype.invert = funcFour;
function funcFour(){
    var b = [];
    this.every(x => b.unshift(x));
    return b;
}
function ex_4_P(array){
	return array.invert();
}
/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
Array.prototype.ex_11 = oddsFirst;
function oddsFirst(){
	var odds = [];
	var evens = [];
	this.every(x => {
		(x%2==0)?evens.push(x):odds.push(x);
		return true;
	});
	return odds.concat(evens);
}
//function ex_5_P(array){
//	return array.oddsFirst();
//}