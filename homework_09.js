//1a - funzione T(array) se array[i] == empty return 10 else return 5*a[0] + T(a.shift());
function tenPlusFiveTimes(a){
    if(a.length==0)
        return 10;
    else{
    	return 5*a[0]+T(a.slice(1));
    }
}
function ex_1a(a){
    return tenPlusFiveT(a);
}
//1b - ex_1b(a){return somma quadrati elementi pari}
function sumSquareEven(a,tot){
    if(a.length==0)
        return tot;
    if(a[0]%2==0)
        return sumSquareEven(a.slice(1),a[0]*a[0]+tot)
    else 
        return sumSquareEven(a.slice(1),tot);
}
function ex_1b(a){
    return sumSquareEven(a,0);
}
//2 - funzionale (map,reduce,filter),somma quadrati di elementi pari dato un array
function sumSquareEvenF(a){
    return a.reduce(function(acc,x){
                        if(x%2==0)
                            return acc+x*x;
                        else return acc;   
                        },0);
}
function ex_2(a){
    return sumSquareEvenF(a);
}
//3 - stack/queue, 3 stack: stack pari, dispari, result. result = pari*dispari;
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
Stack.prototype.popAll = function(callback){
    while(!this.array.isEmpty()){
        callback(this.array.pop());
    }
}
function multStack(a){
    var evenStack = new Stack();
    var oddStack = new Stack();
    var resStack = new Stack();
    while(a.length>0){
        if(a[0]%2==0)
            evenStack.push(a[0]);
        else
            oddStack.push(a[0]);
        a.shift();
    }
    while(!evenStack.isEmpty() && !oddStack.isEmpty()){
        resStack.push(evenStack.pop()*oddStack.pop());    
    }
    var sum = 0;
    resStack.popAll(function(x){sum+=x;});
    return sum;
}
function ex_3(a){
    return multStack(a);
}
//4 - linkedList(), Node(item,succ,prec), add(index,e), get(index)
function Node(item,index,next,prev){
    this.item = item;
    this.index = index;
    this.next = next;
    this.prev = prev;
}
function LinkedList(){
    this.head = null;
}
LinkedList.prototype.add = function(index,e){
    if(this.head == null){
        this.head = new Node(e,index,null,null);
    }
    else{
        tempEl = this.head;
        while(tempEl.next!=null && tempEl.index<index){         //raggiungimento nodo corretto
            tempEl = tempEl.next;
        }
        if(tempEl.next==null && index>tempEl.index){            //inserimento in coda
            var node = new Node(e,index,null,tempEl);
            tempEl.next = node;
        }
        else if(tempEl.prev == null && index<tempEl.index){     //inserimento in testa
            this.head = new Node(e,index,tempEl,null);
            tempEl.prev = this.head;
        }
        else{                                                   //inserimento in mezzo
            var node = new Node(e,index,tempEl,tempEl.prev);
            tempEl.prev.next = node;
            tempEl.prev = node;
        }
    }
}
LinkedList.prototype.get = function(index){
    var tempEl = this.head;
    while(tempEl!=null){
        if(tempEl.index == index){
            return tempEl;
        }
        tempEl = tempEl.next;
    }
    return false;
}
//5 - sul BST, searchNode()return node:return null;
function Node(i, l, r){
	this.item = i;
	this.left = l;
	this.right = r;
}
function BST(){		//Binary Search Tree
	this.root = null;
}
BST.prototype.add = function(e){
	if(this.root == null){
		this.root = new Node(e,null,null);
	}
	else{
		this.addNode(this.root,e);
	}
}
BST.prototype.addNode = function(currentNode,e){
	if(e<currentNode.item){
		if(currentNode.left == null){
			currentNode.left = new Node(e,null,null);
		} 
        else{
            this.addNode(currentNode.left,e);
        }
	}
	else{
		if(currentNode.right == null){
			currentNode.right = new Node(e,null,null);
		} 
		else{
			this.addNode(currentNode.right,e);
		}
	}
}		
BST.prototype.searchNode = function(e){
    return this.search(this.root,e);
}
BST.prototype.search = function(currentNode,e){
	if(currentNode == null){
		return false;
	}
	if(currentNode.item == e){
		return currentNode;
	}
	else{
		if(e >= currentNode.item){
			return this.search(currentNode.right,e);
		}
		else{
			return this.search(currentNode.left,e);
		}
	}
}
BST.prototype.exists = function(currentNode,e){
	if(currentNode == null){
		return false;
	}
	if(currentNode.item == e){
		return true;
	}
	else{
		if(e >= currentNode.item){
			return this.exists(currentNode.right,e);
		}
		else{
			return this.exists(currentNode.left,e);
		}
	}
}