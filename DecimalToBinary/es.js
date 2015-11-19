function es(n){
    var q = 0;
    var r = 0;
    var binary = [];
    do{
        r = n%2;
        q = Math.floor(n/2);
        binary.push(r);        
        console.log(q);
    }while(q!=0);
    var res = "";
    console.log("test")
    while(!binary.isempty()){
        res += binary.pop();
    }
    console.log(res);
    return res;
}