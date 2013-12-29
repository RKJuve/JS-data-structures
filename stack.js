// stack.js - demo for a javascript implementation of
// the stack data structure
//Ryan Juve - codefellows 2013

// Stack class
var Stack = function(){
	this.node = {};	
};
// Stack prototype methods
Stack.prototype = {
	push: function(data){
		if (!this.node.data) {
			this.node = {data: data, next:null};
		} else {
			var temp = this.node;
			this.node = {data: data, next:temp};
		}
	},
	pop: function(callback) {
		var err = null;
		if (this.node == null){
			err = "Underflow";
		} else {
		var value = this.node.data;
		this.node = this.node.next;
		}
		if (callback){
			callback(err, value || null);
		} else {return;}
	}
};

// instantiate new stack and push values
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

// pop values from stack and log in console
stack.pop(function(err, value){console.log(value);});
stack.pop(function(err, value){console.log(value);});