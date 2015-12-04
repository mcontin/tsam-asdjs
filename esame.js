function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

//ESERCIZIO 1 - Ricorsione
function count(array){
	if(array.length==0)
		return 0;
	return (array.shift()==5070)?1+count(array):0+count(array);
}
function ex_1(){
    return count(initialArray());
}

//ESERCIZIO 2 - Radice della somma dei quadrati pari
function sqrtOfEvensSquared(array){
	return Math.sqrt(array.filter(x => { return (x>=0 && x%2==0) }).map(x => { return x*x; }).reduce(function(acc, x){ return acc+x }, 0));
}
function ex_2(){
    return sqrtOfEvensSquared(initialArray());
}

//ESERCIZIO 3 - Espressione fully parenthesized
function Stack(){
    this.array = [];
}
Stack.prototype.push = function(el){
    this.array[this.array.length] = el;
}
Stack.prototype.pop = function(){
    if(!this.array.isEmpty){
        var t = this.array[this.array.length-1];
        this.array = this.array.slice(0,this.array.length-1);
        return t;
    }
    return null;
}
Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;   
}
function calcExpression(expr){
    var numbers = new Stack();
    var symbols = new Stack();
    var array = expr.split(" ");
    while(array.length>0){
        switch(array[0]){
            case '(':
                symbols.push(array);
                break;
            case ')':
                var b = numbers.pop();
                var a = numbers.pop();
                var op = symbols.pop();
                symbols.pop();          //pop '('
                switch(op){
                    case '+':
                        numbers.push(a+b);
                        break;
                    case '-':
                        numbers.push(a-b);
                        break;
                    case '*':
                        numbers.push(a*b);
                        break;
                    case '/':
                        numbers.push(a/b);
                        break;
                    default:
                        break;
                }
                break;
            case '+':
                symbols.push(array[0]);
                break;
            case '-':
                symbols.push(array[0]);
                break;
            case '*':
                symbols.push(array[0]);
                break;
            case '/':
                symbols.push(array[0]);
                break;
            default:
                numbers.push(parseInt(array[0]));
                break;
        }
        array.shift();
    }
    return numbers.peek();
}

//ESERCIZIO 4 - Binary Search Tree
function Node(i, l, r){
	this.item = i;
	this.left = l;
	this.right = r;
}
function BST(){
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
BST.prototype.addArray = function(array){
    while(array.length>0){
        this.add(array.shift());
    }
}
BST.prototype.getMax = function(){
    if(this.root!=null)
        return this.gMax(this.root);
    return null;
}
BST.prototype.gMax = function(node){
    if(node.right==null)
        return node.item;
    return this.gMax(node.right);
}