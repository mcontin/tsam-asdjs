/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo
*/
function ex_1_I(myArray){
	var sum = 0;
	for(var i=0; i<myArray.length && myArray[i]>=0; i++){
	    sum += myArray[i];
	}
	return sum;
}
//O(n)
function ex_1_R(myArray){
	return (myArray.length<=0 || myArray[0]<0)?0:(myArray[0]+sum(myArray.slice(1)));
}
//O(n)

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function ex_2_I(n){	
var sum = 0;	
	for(var i=1;i<=n;i++){
		sum += 2*i - 1;
	}
return sum;
}
//O(n)
function ex_2_R(n){
    return (n!=0)?2*n-1+ex_2_R(n-1):0;
}
//O(2^n)

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function ex_3_I(myArray){
var avg = 0;
    while (i<myArray.length){
        avg += myArray[i];
        i++;
    }
return avg/myArray.length;
}
//O(n)
function ex_3_R(array){
    return avgR(array,0);
}
function avgR(array,i){
    return (i<array.length)?array[i]/array.length+avgR(array,++i):0;
}
//O(n)

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
*/
function ex_4_I(a,b){
    var tot = 0;
    if(a>b){
        while(a>=b){
            tot += a;
            a--;
        }
    }
    else {
        while(a<=b){
            tot += a;
            a++;
        }
    }
    return tot;
}
//O(n)
function ex_4_R(a,b){
    if(a>b)
        return ex_4_R(b,a);
    return (a==b)?a:a+ex_4_R(a+1,b);
}
//O(n)

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/
function ex_5_I(a,b){
	var tot = 0;
		while(i<a){
			tot += b;
			i++;	
		}
	return tot;
}
//O(n)
function ex_5_R(a,b){
	return (b>0)?a+mult(a,--b):0;
}
//O(n)

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/
function ex_6_I(a,b){
    while(a-b>=0){
        a -= b;
        i++;
    }
return i+" resto: "+a;
}
//O(n)
function ex_6_R(a,b){
    return div(a,b,0);
}
function div(a,b,q){
    return (a-b>=0)?div(a-b,b,++q):"quoziente: "+q+" resto: "+a;
}
//O(n)