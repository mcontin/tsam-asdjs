function Stack(){
    this.array = [];
}

Stack.prototype.push = function(el){
    this.array[this.array.length] = el;
}
Stack.prototype.pop = function(){
    var t = this.array[this.array.length-1];
    this.array = this.array.slice(0,this.array.length-1);
    return t;
}
Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;   
}

function dec2bin(n){
    var temp = n;
    var binary = new Stack();
    while(temp!=0){
        binary.push(temp%2);     
        temp = Math.floor(temp/2);
    }
    var res = "";
    while(!binary.isEmpty()){
        res+=binary.pop();
    }
    return res;
}

