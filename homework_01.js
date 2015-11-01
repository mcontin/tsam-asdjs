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
	return (myArray.length<=0 || myArray[0]<0)?0:(myArray[0]+ex_1_R(myArray.slice(1)));
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
	var i = 0;
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
	var i = 0;
		while(i<a){
			tot += b;
			i++;	
		}
	return tot;
}
//O(n)
function ex_5_R(a,b){
	return (b>0)?a+ex_5_R(a,--b):0;
}
//O(n)

/*
Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
*/
function ex_6_I(a,b){
	var i = 0;
    while(a-b>=0){
        a -= b;
        i++;
    }
	return "quoziente: "+i+" resto: "+a;
}
//O(n)
function ex_6_R(a,b){
    return divR(a,b,0);
}
function divR(a,b,q){
    return (a-b>=0)?divR(a-b,b,++q):"quoziente: "+q+" resto: "+a;
}
//O(n)

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/
function ex_7_I(a,b){
	var tot = a;
	for(var i=0; i<b-1; i++)
		tot = ex_5_I(tot,a);
	return tot;
}
//O(n^2)
function ex_7_R(a,b){
    return (b==0)?1:ex_5_R(a,ex_7_R(a,b-1));
}
//O(n^2)

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/
function ex_8_I(aa){
    var n = Math.sqrt(aa.length);
    var ab = [];
    for(var i=0;i<n;i++){
        ab[i] = [];
        for(var j=0;j<n;j++){
            ab[i][j] = aa[n*i+j];
        }
    }
    return ab;
}
//O(n^2)
function ex_8_R(aa){
	var n = Math.sqrt(aa.length); 
    var ab = new Array(n);
    for(var i=0;i<n;i++){
        ab[i]=new Array(n);
    }
    return swapMx(aa,ab,n,0);
}
function swapMx(aa,aRes,n,i){
    if(i==aa.length)
        return aRes;
    aRes[Math.floor(i/n)][i%n]=aa[i];
    return swapMx(aa,aRes,n,++i);
}
//O(n^2)
/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
*/
function ex_9_I(a){
    for(var i=0;i<a.length/2;i++){
        t = a[i];
        a[i] = a[a.length-1-i];
        a[a.length-1-i] = t;
    }
    return a;
}
//O(n)
function ex_9_R(aa){
    return (aa.length==1)?aa[0]:new Array(0).concat(aa.pop(),ex_9_R(aa));
}
//O(n)
/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
*/
function ex_10_I(a,n){
	var array = [];
	var i = 0;
	while(i<n){
    	array.push(a);
    i++;
	}
	return array;
}
//O(n)
function ex_10_R(a,n){
    return (n==1)?a:new Array(0).concat(a,ex_10_R(a,--n));
}
//O(n)
/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
function ex_11_I(a){
	var res = [];
	var i = 0;
	var j = 0;
	while(j<a.length){
	    if(a[j]%2!=0)
	        res.push(a[j]);
	    j++;
	}    
	j = 0;
	while(j<a.length){
	    if(a[j]%2==0)
	        res.push(a[j])
	    j++
	}      
	return res;
}
//O(n)
function ex_11_R(a){
    var nOdds = 0;
    for(var i=0;i<a.length;i++){
        if(a[i]%2!=0)
            nOdds++;
    }
    return orderOdds(a,nOdds,new Array(a.length),0);
}
function orderOdds(a,freePosForEven,b,i){
    if(a.length==0)
        return b;
    if(a[0]%2!=0){
        b[i]=a.shift();
        return orderOdds(a,freePosForEven,b,++i);    
    }  
    else{
        b[freePosForEven]=a.shift();
        return orderOdds(a,freePosForEven+1,b,i);
    }
}
//O(n)