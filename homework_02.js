/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo
*/
function ex_1_F(myArray){
	var sum = 0;
	myArray.every(x => {
		if(x>0)
			sum += x;
		return x>0
	});
	return sum;
}
/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function ex_2_F(n){	
	var a = [];
	var sum = 0;
	for(var i=1;i<=n;i++){
		a[i-1] = 2*i-1;
	}
	a.every(x => sum += x);
	return sum;
}
/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function ex_3_F(myArray){
	var avg = 0;
		myArray.every(x => avg += x);
	return avg/myArray.length;
}
/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
*/
function ex_4_F(a,b){
    var tot = 0;
    var array4 = [];
    if(a>b){
        for(var i=0; i<=a-b;++i){
			array4.push(b+i);
        }
    }
    else {
        for(var i=0; i<=b-a;++i){
			array4.push(a+i);	
        }
    }
    array4.every(x => tot += x);
    return tot;
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/
function ex_5_F(a,b){
	var tot = 0;
	var myArray = []
	for(var i=0; i<b; i++)
		myArray.push(a);
	myArray.every(x => tot += x);
	return tot;
}

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/
function ex_6_F(a,b){
	return null;
}
/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/
function ex_7_F(a,b){
	var tot = a;
	for(var i=0; i<b-1; i++)
		tot = ex_5_F(tot,a);
	return tot;
}
/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function ex_8_F(aa){
    var n = Math.sqrt(aa.length);
    var ab = [];
    var t = [];
    aa.every(x =>{
    	t.push(x);
    	if(t.length==n){
    		ab.push(t);
    		t = [];
    		}
    	return true;
    });
	
    return ab;
}
/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
*/
function ex_9_F(a){
    var b = [];
    a.every(x => b.unshift(x));
    return b;
}
//O(n)
/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/
function ex_10_F(a,n){
	var array = [];
	var i = 0;
	while(i<n){
    	array.push(a);
    i++;
	}
	return null;
}
/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
function ex_11_F(a){
	var odds = [];
	var evens = [];
	a.every(x => {
		(x%2==0)?evens.push(x):odds.push(x);
		return true;
	});
	console.log(odds);
	return odds.concat(evens);
}