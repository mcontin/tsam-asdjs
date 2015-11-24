function CircularQueue(n){
    this.array = new Array(n);
    this.length = this.array.length;
    this.lastInsert = 0;
    this.lastDelete = 0;
}

CircularQueue.prototype.push = function(el){
    if(this.lastInsert + 1 == this.array.length){
        this.lastInsert = 0;
    }
    else this.lastInsert++;
    this.array[this.lastInsert] = el;
}
CircularQueue.prototype.pop = function(){
    if(this.lastDelete + 1 == this.array.length){
        this.lastDelete = 0;
    }
    else this.lastDelete++;
    var temp = this.array[this.lastDelete];
    this.array[this.lastDelete] = undefined;
    return temp;
}
CircularQueue.prototype.peek = function(){
    return this.array[lastDelete];
}
CircularQueue.prototype.isEmpty = function(){
    return this.array.length == 0;   
}
CircularQueue.prototype.front = function(){
	return this.array[lastInsert];
}
CircularQueue.prototype.size = function(){
	return this.array.length;
}
CircularQueue.prototype.enqueue = CircularQueue.prototype.push;
CircularQueue.prototype.dequeue = CircularQueue.prototype.pop;
