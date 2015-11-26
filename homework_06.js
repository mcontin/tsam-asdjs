function CircularQueue(n){
    this.array = new Array(n);
    this.lastInsert = 0;
    this.lastDelete = 0;
}

CircularQueue.prototype.enqueue = function(el){
    if(this.lastInsert + 1 == this.array.length){
        this.lastInsert = 0;
    }
    else this.lastInsert++;
    this.array[this.lastInsert] = el;
}
CircularQueue.prototype.dequeue = function(){
    if(this.lastDelete + 1 == this.array.length){
        this.lastDelete = 0;
    }
    else this.lastDelete++;
    var temp = this.array[this.lastDelete];
    this.array[this.lastDelete] = undefined;
    return temp;
}
CircularQueue.prototype.peek = function(){
    return this.array[this.lastDelete];
}
CircularQueue.prototype.isEmpty = function(){
    return this.array.length == 0;   
}
CircularQueue.prototype.front = function(){
	return this.array[this.lastInsert];
}
CircularQueue.prototype.size = function(){
	return this.array.length;
}