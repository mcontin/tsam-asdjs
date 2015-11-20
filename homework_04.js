function dec2bin(n){
    var quoz = 0;
    var resto = 0;
    var temp = n;
    var binary = [];
    do{
        resto = temp%2;
        temp /= 2;
        quoz = Math.floor(temp);
        binary.push(resto);     
    }while(quoz!=0);
    var res = "";
    while(binary.length>0){
        res+=binary.pop();
    }
    return res;
}
function ex_1_F(n){
    return dec2bin(n);
}