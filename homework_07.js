function QueueItem(el, p){
	this.value = el;
	this.priority = p;
}

function PriorityQueue(){
    this.array = [];
}

function PriorityQueueC(){
	this.array = [];
}

    //splice(pos, elToRemove, elToInsert)
PriorityQueueC.prototype.enqueue = function(callback,el){
	/*var inserted = false;
	if(this.size()>0){
		for(var i=0;i<=this.size() && !inserted;i++){
			if(i==this.size() || el.priority<=this.array[i].priority){
				this.array.splice(i, 0, el);
				inserted = true;
			}/*
			else if(i==this.size()){
				this.array.push(el);
				inserted = true;
			}
		}
	}
	else{
		this.array.push(el);
	}*/
	return false;
}
PriorityQueueC.prototype.dequeue = function(){
    return this.array.shift();
}
PriorityQueueC.prototype.front = function(){
    return this.array[0];
}
PriorityQueueC.prototype.isEmpty = function(){
    return this.array.length == 0;   
}
PriorityQueueC.prototype.size = function(){
	return this.array.length;
}

    //splice(pos, elToRemove, elToInsert)
PriorityQueue.prototype.enqueue = function(el){
	var inserted = false;
	if(this.size()>0){
		for(var i=0;i<=this.size() && !inserted;i++){
			if(i==this.size() || el.priority<=this.array[i].priority){
				this.array.splice(i, 0, el);
				inserted = true;
			}/*
			else if(i==this.size()){
				this.array.push(el);
				inserted = true;
			}*/
		}
	}
	else{
		this.array.push(el);
	}
}
PriorityQueue.prototype.dequeue = function(){
    return this.array.shift();
}
PriorityQueue.prototype.front = function(){
    return this.array[0];
}
PriorityQueue.prototype.isEmpty = function(){
    return this.array.length == 0;   
}
PriorityQueue.prototype.size = function(){
	return this.array.length;
}