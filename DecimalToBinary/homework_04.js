function es(n){
    var quoz = 0;
    var resto = 0;
    var temp = n;
    var binary = [];
    do{
        r = temp%2;
        temp /= 2;
        q = Math.floor(temp);
        binary.push(r);     
    }while(q!=0);
    var res = "";
    while(binary.length>0){
        res+=binary.pop();
    }
    return res;
}